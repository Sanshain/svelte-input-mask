import './app.css'

import PhoneMaskInput from './PhoneMaskInput.svelte'

/**
 * @param {string?} id
 * @param {string?} placeholder
 */
function createMaskInput(id, placeholder) {
  const app = new PhoneMaskInput({
    target: document.getElementById(id || 'app'),
    props: {
      originHolder: placeholder || '+0(000)0000000'
    }
  })

  return app;
}

export default createMaskInput;
