import React from 'react'
import { useState } from 'react'
const Navbar = ({setData}) => {
  const handleClick=()=>{
    setData("asdasd")
    setCount(count+1)
    setShow
  }
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(0)
  if (count%2) {
    setData("1")
  }else{
    setData("2")
  }
  return (
    <div>
        <button onClick={()=>handleClick()}>click</button>
        {count}</div>
  )
}
export default Navbar