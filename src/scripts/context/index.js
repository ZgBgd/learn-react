import React,{createContext,useState} from "react";
export const demoContext = createContext({})
export const {Provider,Consumer} = demoContext
const Context = (props)=>{
  const [name,setName] = useState('张三')
  const handleNameClick = (params)=>{
    setName(params)
  }
  const initValue = {
    name,
    handleNameClick
  }
  return (
      <Provider value={initValue}>{props.children}</Provider>
    )
}
export default Context