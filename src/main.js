import './app.css'

import PhoneMaskInput from './PhoneMaskInput.svelte'

const app = new PhoneMaskInput({
  target: document.getElementById('app'),
  props: {
    // originHolder: '+0(000)0000000'
    originHolder: '+0(___)_______',
    exceptNotNumbers: ['_'],
    onComplete: v => {
      console.log(v);
    }
  }
})

export default app
