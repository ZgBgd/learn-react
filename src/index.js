import React from 'react';
import ReactDOM from 'react-dom';
//
// reactElement
import MReactElement from "./scripts/reactElement";
// reactComponent
import RCom from "./scripts/reactComponent";
//

ReactDOM.render(<div>
	{
		React.createElement('div',{v:100},React.createElement('div',{},React.createElement('div',{},'6666')))
	}
</div>,document.getElementById('root'))

