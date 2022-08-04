import React from "react";
const ForRender = function (){
  return React.createElement('div',{val:123},'this is render loop',
    React.createElement('div',{val:456},'this is render loop')
  );
}
export default ForRender;