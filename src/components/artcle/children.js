import React from 'react';

var recodData={
    recodPosition:[],
    clearRecord:()=>{
        this.recodPostion=[];
    },
    addPosition:(index)=>{
        this.recodPostion.shift(index);
    }
}


function Children (props){
   
  return(
      <div>
          <span>这是一个组件</span>
          {
              props.data.children&&<Children data={props.data.children}></Children>
          }
      </div>
        )
}
export default Children;