import React from 'react';
import ReactDOM from 'react-dom';
//
// reactElement
import MReactElement from "./scripts/reactElement";
// reactComponent
import RCom from "./scripts/reactComponent";
//
import LforwardRef from "./scripts/lforwardRef";
import Context,{Consumer} from './scripts/context/index';
import Lcontext from './scripts/lcontext';
import ForRender from './test/forRender';
// ReactDOM.render(<div>
// 	{
// 		React.createElement('div',{v:100},React.createElement('div',{},React.createElement('div',{},'6666')))
// 	}
// </div>,document.getElementById('root'))
// function Component
// console.log(RCom.toString())
// const RCom = function (props) {
// 	return React.createElement('div',{value:pro})
// }

ReactDOM.render(
React.createElement(ForRender,{val:100}),
document.getElementById('root')
)
