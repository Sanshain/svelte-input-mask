// export { default as default } from 'svelte-mask/src/PhoneMaskInput.svelte';

interface MutableRef<T> {
    current: T;
}

export default class PhoneMaskInput {
    constructor(options: {
        target: HTMLElement | MutableRef<any>,
        props: {
            originHolder?: string,
            exceptNotNumbers?: string[],
            onComplete?: (v: string) => void
        }
    });
}