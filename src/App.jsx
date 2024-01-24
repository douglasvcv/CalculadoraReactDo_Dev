import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [resu, setResu] = useState()

 
  

 
  return (
    <>
     <div className='container'>
      <div className='area-input'>
        <input type="number" placeholder='Digite um número' value={num1} onChange={(n)=>{setNum1(Number(n.target.value))}}/>
        <input type="number" placeholder='Digite um número' value={num2} onChange={(n)=>{setNum2(Number(n.target.value))}}/>
      </div>
      <div>{resu}</div>
      <div className='area-button'>
        <button onClick={()=>{setResu(num1+num2)}}>+</button>
        <button onClick={()=>{setResu(num1-num2)}}>-</button>
        <button onClick={()=>{setResu(num1*num2)}}>*</button>
        <button onClick={()=>{setResu(num1/num2)}}>/</button>
      </div>
     </div>
    </>
  )
}

export default App
