import React,{createRef} from 'react';
// 1. 在 createElement 函数中观察ref的值， ref={current:div}
// const MReactElement = function (){
// 	const info = createRef()
// 	return (
// 		<>
//
// 			{React.createElement('div',{value:100,ref:info},'4444')}
// 		</>
// 	)
// }
// 2. 在 createElement 函数中观察ref的值，ref = ref => this.info = ref
class MReactElement extends React.Component {
	constructor() {
		super();
		this.info = null
	}
	componentDidMount() {
		console.log(this.info)
	}

	render(){
		return (
			<>
				{
					React.createElement('div',{value:200,ref:ref=>this.info=ref},'444')
				}
			</>
		)
	}
}
export default MReactElement