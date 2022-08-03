import React,{useContext,useState} from "react";
import DefaultContext from "./context/first";
const RCom = function (props){
	const [num,setNum] = useState(0)
	return (
		<DefaultContext.Provider value={{num,setNum}}>
			<div>333{props.val}</div>
			<ChildNode/>
		</DefaultContext.Provider>

	)
}
const ChildNode = function (props){
	return (
		<div>this is child node
		<div>
				<GrandChild/>
		</div>
		</div>
	)
}
const GrandChild = function (){
	const dc = useContext(DefaultContext)
		return (
			<div>this is grandChild,{dc.num}
			<SecGrandChild/>
			</div>
		)
}
const SecGrandChild = function (){
	const mm = useContext(DefaultContext)
	const clickAdd = function (){
		mm.setNum(mm.num+1)
	}
	return (
		<div onClick={clickAdd}>click to ADD {mm.num}time</div>
	)
}
// console.log(RCom.prototype)
export default RCom