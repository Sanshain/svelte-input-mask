import PhoneMaskInput from 'svelte-mask'

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
    })

    return app;
}

createMaskInput();