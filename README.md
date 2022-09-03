# svelte-input-mask

The simplest input mask component for phone number input:

![image](https://user-images.githubusercontent.com/40761960/188269627-0d395369-31e7-4b46-81f3-802b5ef04c9c.png)

## Using inside Svelte app:

```html
<script>
  import PhoneMaskInput from 'svelte-mask'
</script>

<PhoneMaskInput originHolder="+7(000)0000000" />
```


## Using inside vanale app:

```js
import PhoneMaskInput from 'svelte-mask'

const app = new PhoneMaskInput({
  target: document.getElementById('app'),
  props: {
    originHolder: '+7(000)0000000'
  }  
})

export default app
```

