
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {
 const [length,setLength] = useState(5)
 const [numberAllowed,setNumberllowed] = useState(false)
 const [characterAllowed,setCharacterAllowed]= useState(false)
 const [password,SetPassword]= useState('')

 const refPassword = useRef(null)

 const copyPassword =()=>{
 refPassword.current?.select()
 refPassword.current?.setSelectionRange(0,4)
  window.navigator.clipboard.writeText(password)

 }
 const passwordGenerator = useCallback(
   () => {
     let pass =''
     let string='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
     if(numberAllowed) string+='0123456789';
     if(characterAllowed) string+='!@#$%^&*()_+{}|":>?<?/';
    
     for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()* string.length +1)
      pass += string.charAt(char) ; 
    
     }
     SetPassword(pass)
 
   },
   [length,numberAllowed,characterAllowed,SetPassword],
 )
 useEffect(()=>{

passwordGenerator()
 },[passwordGenerator,numberAllowed,characterAllowed,length])
 
  return (
  <div className='w-full  bg-gray-600 p-5'>
<h1>Password Generator</h1>

  <input className='w-96 rounded-sm'
  value={password}
  readOnly
  ref={refPassword}

  type="text" placeholder='Password' />
  <button 
  onClick={copyPassword}
  className='bg-blue-600'>Copy</button>

<div>
<label >
<input className='w-20'
min={0}
max={100}
value={length}
onChange={(e)=>{setLength(e.target.value)}}
type="range"

/>
Length {length}</label>

<label >Number </label>
<input type="checkbox" 
defaultChecked={numberAllowed}
className='mr-40 m-1'
  onChange={()=>setNumberllowed((prev)=> !prev)}
 
  

 

/>


</div>
<label >Chracter </label>
<input
 type="checkbox" 
 className='mb-24 ml-96'
defaultChecked={characterAllowed}
onChange={()=>setCharacterAllowed((prev)=>!prev)}
/>


  </div>

  
)
}

export default App
