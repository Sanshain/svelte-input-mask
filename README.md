# svelte-input-mask

The simplest component of an input mask with validation for digits of a given format, which can contain arbitrary non-numeric characters

![image](https://user-images.githubusercontent.com/40761960/188269627-0d395369-31e7-4b46-81f3-802b5ef04c9c.png)

### Features:
- The minified bundle weighs less than 5kb
- universal validation for any numeric formats

### Installation:

```
npm i svelte-mask
```

[Demo](https://coding-style.ru/code_reviews/271/edit)


## Using inside Svelte app:

```html
<script>
  import PhoneMaskInput from 'svelte-mask'
</script>

<PhoneMaskInput originHolder="+1(000)0000000" />
```


## Using inside Preact (exactly the same React) app:

```jsx
import { h } from 'preact';
import { render } from 'preact';
import React from "react";

import { useState, useEffect, useRef } from "preact/hooks";

import PhoneMaskInput from "svelte-mask";


const App =  () => {

    const inputContainer = useRef(null);

    useEffect(() => {
                                       
        let widget = new PhoneMaskInput({
            target: inputContainer.current,
            props: {
                onComplete: v => setMsg(() => v)
            }
        })        
        return () => {};
    }, []);

    let [msg, setMsg] = useState('');

    return <div className="App">        
        <p style={{ cursor: 'pointer', userSelect: null }}>

            Enter complete number:
            <b className={'counter'}>
                {msg}
            </b>
        </p>
        <div ref={inputContainer}></div>
    </div>
};

render(<App />, document.body);
```

Look up working example [here](https://github.com/Sanshain/svelte-input-mask/tree/main/examples/react_sample)


## Using inside vanile app:

### using modules:

```js
import PhoneMaskInput from 'svelte-mask'

const app = new PhoneMaskInput({
  target: document.getElementById('app'),
  props: {
    originHolder: '+1(000)0000000'
  }  
})

export default app
```

### using prepared bundle:

```html
  <link rel="stylesheet" href="https://unpkg.com/svelte-mask@latest/build/css/app.css">  

  <div id="app"></div>    
  <script src="https://unpkg.com/svelte-mask@latest/build/bundle.js"></script>
  <script>
      createMaskInput('app', '+7(999)9999999')        
  </script>
```


## Comparison with a contenders:

|Name|size(min)|appreciated by the community|transparent mask|uneven rendering|
|----|------|-|-|-|
|svelte-mask|5kb|-|+|-|
|@imask/svelte|59kb|+|-|+|
|svelte-input-mask|?|+|-|+|
|svelte-masked-input|?|-|+|-|
|svelte-number-format|?|-|?|?|
|svelte-inputs|?|-|?|?|

## PS:

*if you found this component useful, you can show it by clicking on the star*
