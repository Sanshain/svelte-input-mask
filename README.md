# svelte-input-mask

The simplest component of an input mask with validation for digits of a given format, which can contain arbitrary non-numeric characters

![image](https://user-images.githubusercontent.com/40761960/188269627-0d395369-31e7-4b46-81f3-802b5ef04c9c.png)

Features:
- The minified bundle weighs less than 5kb
- universal validation for any numeric formats

## Using inside Svelte app:

```html
<script>
  import PhoneMaskInput from 'svelte-mask'
</script>

<PhoneMaskInput originHolder="+1(000)0000000" />
```


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
  <div id="app"></div>  
  <link rel="stylesheet" href="https://unpkg.com/svelte-mask@0.2.6/build/css/app.css">
  <script src="https://unpkg.com/svelte-mask@0.2.6/build/bundle.js"></script>
  <script>
      createMaskInput('app', '+7(999)9999999')        
  </script>
```

## PS:

*if you found this component useful, you can show it by clicking on the star*
