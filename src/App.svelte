<script>
  
  const originHolder = '+7(000)0000000'
  
  /**
   * @type {HTMLElement}
   */
  let shadowElement = null;
  let holderValue = originHolder;
  let holderOffset = 0;
  let value = '';

  /**
  * @param {InputEvent} event
  */
  function onInput(event) {    

    const formatHolder = (autoValue) => {
      let len = (autoValue || event.target.value).length;
      
      holderValue = originHolder.slice(len);
      setTimeout(() => {
        holderOffset = shadowElement.offsetWidth;
      })      
    }
   
    console.log(event);

    if (~['insertText', ].indexOf(event.inputType)) {
      
      console.log(event.inputType);
      let autoValue = validate(event.inputType, event);
      if (autoValue === false){
        event.target.value = value;
        // value = event.target.value;
        return;
      }
      
      formatHolder(autoValue)
    }    
    else if (~['deleteContentBackward', 'deleteContentForward'].indexOf(event.inputType)){
      console.log(event);
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
    console.log(data);

    if (data && data.length === 1){

      if (!value.length){
        if (Number.parseInt(data)){
          value = '+' + data;
          event.target.value = value;
          return value;
        }
        else if(data === '+') return false;
      }
      else if (value.length == 2){
        if (Number.parseInt(data)){
          value += '(' + data;
          event.target.value = value;
          return value;
        }        
      }
      else if (value.length == 6){
        if (Number.parseInt(data)){
          value += ')' + data;
          event.target.value = value;
          return value;
        }        
      }
      else if (Number.parseInt(data) && value.length < 14){
        value += data;
        event.target.value = value;
        return value;
      }

    }

    return false;
  }
</script>

<div class="container">
  <input type="text" on:input={onInput} bind:value>
  <div class="placeholder" style={`margin-left: ${holderOffset}px;`}>{holderValue}</div>  
  <div class="mask" bind:this={shadowElement}>{value}</div>
</div>

<style>
  *{
    font-family: Arial;
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
    top: 0.45em;
    left: 0.6em;
    pointer-events: none;
    color: gray;
  }
  .mask{
    visibility: hidden;
    position: absolute;
  }
</style>
