import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Table from './components/Table'
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  var test = "sdfsdf"
  const handleShow = ()=>{
    console.log("tt")
  }
  return (<>
  <h1>
      <Navbar text={test} handleShow={handleShow} setData={setData}/>
      <Table data={data} />
  </h1>
      </>
  )
}
function add(a,b){
  return a+b
}
const show = ()=>{
  return "sdfsdf"
}

export default App
