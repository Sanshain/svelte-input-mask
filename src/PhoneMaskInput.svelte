<script>
  
  export let originHolder = '+7(000)0000000';
  /**
   * @type {string|Array<string>} - `${'_'|'*'|'-'}`
   */
  export let exceptNotNumbers = [];
  export let onComplete = null;
  
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
  let notNumbers = Array.from(originHolder).reduce((acc, c, i, arr) => ((!~exceptNotNumbers.indexOf(c) && Number.isNaN(Number.parseInt(c)) ? (acc[i] = c) : ''), acc), [])

  /**
  * @param {InputEvent} event
  */
  function onInput(event) {    
    
    console.log(event);


    const formatHolder = (autoValue) => {
      let len = (autoValue || event.target.value).length;
      
      holderValue = originHolder.slice(len);
      setTimeout(() => {
        holderOffset = shadowElement.offsetWidth;
      })      
    }
   
    // console.log(event);

    if (~['insertText', 'insertFromPaste'].indexOf(event.inputType)) {
      
      let autoValue = validate(event.inputType, event);
      if (autoValue === false){
        event.target.value = value;
        // value = event.target.value;
        return;
      }
      
      formatHolder(autoValue)
    }
    else if (~['deleteContentBackward', 'deleteContentForward'].indexOf(event.inputType)){
      // console.log(event);
      // проверяем регуляркой:
      if (!(event.target.value.match(/\+\d\(\d{3}\)\d*/) || event.target.value.match(/\+\d\(\d{0,3}/) || event.target.value.match(/\+?/))){
        event.target.value = value;
        return;
      }

      formatHolder('')
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

    if (data && data.length === 1){

      for (const i in notNumbers) {
        if (Object.hasOwnProperty.call(notNumbers, i)) {
          const char = notNumbers[+i];
          
          if (value.length == +i && !Number.isNaN(Number.parseInt(data))){
            value += char + data;
            event.target.value = value;
            return value;
          }          
          // else if(data === c) return false;
        }
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
      if (!Number.isNaN(Number.parseInt(data)) && value.length < originHolder.length){
        value += data;
        event.target.value = value;
        if (value.length === originHolder.length && onComplete)  setTimeout(() => 
        {
          onComplete(value);
        })
        return value;
      }

    }
    else if (data && data.length > 1 && data.length < 13){
      // if (data.match(/\d/))
      return false;
    }

    return false;
  }
</script>

<div class="container">
  <input type="tel" on:input={onInput} bind:value>
  <div class="placeholder" style={`margin-left: ${holderOffset}px;`}>{holderValue}</div>  
  <div class="mask" bind:this={shadowElement}>{value}</div>
</div>

<style>
  *{
    font-family: Arial !important;
    font-size: medium !important;
  }
  .container{
    position: relative;
  }
  input{
    padding: .5em;
    border-radius: 1em;
    font-size: medium;

  }
  .placeholder{
    position: absolute;
    top: 0.65em;
    left: 0.6em;
    pointer-events: none;
    color: lightgrey;
  }
  .mask{
    visibility: hidden;
    position: absolute;
  }
</style>
