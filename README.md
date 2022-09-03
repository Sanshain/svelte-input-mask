# svelte-input-mask

Input mask component for phone number input:

![image](https://user-images.githubusercontent.com/40761960/188269627-0d395369-31e7-4b46-81f3-802b5ef04c9c.png)

## Using inside Svelte app:

```html
<script>
  import PhoneMaskInput from './svelte-mask.svelte'
</script>

<PhoneMaskInput originHolder="+0(000)0000000" />
```


## Using inside vanale app:

```js
import PhoneMaskInput from './svelte-mask.svelte'

const app = new PhoneMaskInput({
  target: document.getElementById('app')
})

export default app
```

