import React,{createRef,forwardRef} from "react";
const Fir = forwardRef((props,ref)=>{
	console.log(ref)
	return <div>
		<input  ref={ref}/>
	</div>
})
export default class LforwardRef extends React.Component {
	constructor() {
		super();
		this.rf = createRef()
	}
	componentDidMount() {
		this.rf.current.value = '991'
	}

	render() {
		return(
			<div>
				<Fir ref={this.rf}/>
			</div>
		)
	}
}