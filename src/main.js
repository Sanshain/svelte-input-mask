import './app.css'

import PhoneMaskInput from './PhoneMaskInput.svelte'

const app = new PhoneMaskInput({
  target: document.getElementById('app'),
  props: {
    // originHolder: '+0(000)0000000'
    originHolder: '+0(___)_______',
    exceptNotNumbers: ['_']
  }
})

export default app
