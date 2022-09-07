(function () {
    'use strict';

    function noop() { }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.wholeText !== data)
            text.data = data;
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    /* node_modules\.pnpm\svelte-mask@0.3.4\node_modules\svelte-mask\src\PhoneMaskInput.svelte generated by Svelte v3.50.0 */

    function create_fragment(ctx) {
    	let div2;
    	let input;
    	let t0;
    	let div0;
    	let t1;
    	let div0_style_value;
    	let t2;
    	let div1;
    	let t3;
    	let mounted;
    	let dispose;

    	return {
    		c() {
    			div2 = element("div");
    			input = element("input");
    			t0 = space();
    			div0 = element("div");
    			t1 = text(/*holderValue*/ ctx[1]);
    			t2 = space();
    			div1 = element("div");
    			t3 = text(/*value*/ ctx[3]);
    			attr(input, "type", "tel");
    			attr(input, "class", "svelte-1b22go2");
    			attr(div0, "class", "placeholder svelte-1b22go2");
    			attr(div0, "style", div0_style_value = `margin-left: ${/*holderOffset*/ ctx[2]}px;`);
    			attr(div1, "class", "mask svelte-1b22go2");
    			attr(div2, "class", "container svelte-1b22go2");
    		},
    		m(target, anchor) {
    			insert(target, div2, anchor);
    			append(div2, input);
    			set_input_value(input, /*value*/ ctx[3]);
    			append(div2, t0);
    			append(div2, div0);
    			append(div0, t1);
    			append(div2, t2);
    			append(div2, div1);
    			append(div1, t3);
    			/*div1_binding*/ ctx[9](div1);

    			if (!mounted) {
    				dispose = [
    					listen(input, "input", /*onInput*/ ctx[4]),
    					listen(input, "input", /*input_input_handler*/ ctx[8])
    				];

    				mounted = true;
    			}
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*value*/ 8) {
    				set_input_value(input, /*value*/ ctx[3]);
    			}

    			if (dirty & /*holderValue*/ 2) set_data(t1, /*holderValue*/ ctx[1]);

    			if (dirty & /*holderOffset*/ 4 && div0_style_value !== (div0_style_value = `margin-left: ${/*holderOffset*/ ctx[2]}px;`)) {
    				attr(div0, "style", div0_style_value);
    			}

    			if (dirty & /*value*/ 8) set_data(t3, /*value*/ ctx[3]);
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(div2);
    			/*div1_binding*/ ctx[9](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};
    }

    function instance($$self, $$props, $$invalidate) {
    	let { originHolder = '+7(000)0000000' } = $$props;
    	let { exceptNotNumbers = [] } = $$props;
    	let { onComplete = null } = $$props;

    	/**
     * @type {HTMLElement}
     */
    	let shadowElement = null;

    	let holderValue = originHolder;
    	let holderOffset = 0;
    	let value = '';

    	/**
     * 
     */
    	let notNumbers = Array.from(originHolder).reduce(
    		(acc, c, i, arr) => (!~exceptNotNumbers.indexOf(c) && Number.isNaN(Number.parseInt(c))
    		? acc[i] = c
    		: '', acc),
    		[]
    	);

    	/**
    * @param {InputEvent} event
    */
    	function onInput(event) {
    		console.log(event);

    		const formatHolder = autoValue => {
    			let len = (autoValue || event.target.value).length;
    			$$invalidate(1, holderValue = originHolder.slice(len));

    			setTimeout(() => {
    				$$invalidate(2, holderOffset = shadowElement.offsetWidth);
    			});
    		};

    		// console.log(event);
    		if (~['insertText', 'insertFromPaste'].indexOf(event.inputType)) {
    			let autoValue = validate(event.inputType, event);

    			if (autoValue === false) {
    				event.target.value = value;

    				// value = event.target.value;
    				return;
    			}

    			formatHolder(autoValue);
    		} else if (~['deleteContentBackward', 'deleteContentForward'].indexOf(event.inputType)) {
    			// console.log(event);
    			// проверяем регуляркой:
    			if (!(event.target.value.match(/\+\d\(\d{3}\)\d*/) || event.target.value.match(/\+\d\(\d{0,3}/) || event.target.value.match(/\+?/))) {
    				event.target.value = value;
    				return;
    			}

    			formatHolder('');
    		}
    	}

    	/**
     * 
     * @param {string} typeInput // {"insertText"|"deleteContentBackward"}
     * @param {InputEvent} event
     */
    	function validate(typeInput, event) {
    		let data = event.data;

    		// console.log(data);
    		if (data && data.length === 1) {
    			for (const i in notNumbers) {
    				if (Object.hasOwnProperty.call(notNumbers, i)) {
    					const char = notNumbers[+i];

    					if (value.length == +i && !Number.isNaN(Number.parseInt(data))) {
    						$$invalidate(3, value += char + data);
    						event.target.value = value;
    						return value;
    					}
    				} // else if(data === c) return false;
    			}

    			// if (value.length == 0){
    			//   if (!Number.isNaN(Number.parseInt(data))){
    			//     value = '+' + data;
    			//     event.target.value = value;
    			//     return value;
    			//   }
    			//   else if(data === '+') return false;
    			// }
    			// else if (value.length == 2){
    			//   if (!Number.isNaN(Number.parseInt(data))){
    			//     value += '(' + data;
    			//     event.target.value = value;
    			//     return value;
    			//   }        
    			// }
    			// else if (value.length == 6){
    			//   if (!Number.isNaN(Number.parseInt(data))){
    			//     value += ')' + data;
    			//     event.target.value = value;
    			//     return value;
    			//   }        
    			// }
    			if (!Number.isNaN(Number.parseInt(data)) && value.length < originHolder.length) {
    				$$invalidate(3, value += data);
    				event.target.value = value;

    				if (value.length === originHolder.length && onComplete) setTimeout(() => {
    					onComplete(value);
    				});

    				return value;
    			}
    		} else if (data && data.length > 1 && data.length < 13) {
    			// if (data.match(/\d/))
    			return false;
    		}

    		return false;
    	}

    	function input_input_handler() {
    		value = this.value;
    		$$invalidate(3, value);
    	}

    	function div1_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			shadowElement = $$value;
    			$$invalidate(0, shadowElement);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ('originHolder' in $$props) $$invalidate(5, originHolder = $$props.originHolder);
    		if ('exceptNotNumbers' in $$props) $$invalidate(6, exceptNotNumbers = $$props.exceptNotNumbers);
    		if ('onComplete' in $$props) $$invalidate(7, onComplete = $$props.onComplete);
    	};

    	return [
    		shadowElement,
    		holderValue,
    		holderOffset,
    		value,
    		onInput,
    		originHolder,
    		exceptNotNumbers,
    		onComplete,
    		input_input_handler,
    		div1_binding
    	];
    }

    class PhoneMaskInput extends SvelteComponent {
    	constructor(options) {
    		super();

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			originHolder: 5,
    			exceptNotNumbers: 6,
    			onComplete: 7
    		});
    	}
    }

    /**
     * @param {string?} id
     * @param {string?} placeholder
     */
    function createMaskInput(id, placeholder, options) {
        const app = new PhoneMaskInput({
            target: document.getElementById(id || 'app'),
            props: {
                originHolder: placeholder || '+0(000)0000000',
                exceptNotNumbers: (options && options.exceptNotNumbers) || []
                // originHolder: placeholder || '+0(___)_______'
            }
        });

        return app;
    }

    createMaskInput();

})();
