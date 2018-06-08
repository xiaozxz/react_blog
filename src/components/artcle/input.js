import React from 'react';

function Input (props){
    let input;
    let value='text';
    function change(e){
        debugger
        value=1;
       input.value='';
    }
  return(
      <input ref={ele=>{input=ele}} onChange={e=>{change(e)}} type="text" value={value}/>
  )
}
export default Input;