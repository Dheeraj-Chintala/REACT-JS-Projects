import { useState } from 'react'
import './App.css'

function App() {
  const [text,settext]=useState("")
  const [url,seturl]=useState("")
  const fetchurl=()=>{
  fetch(" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text)
  .then((data)=>{
     seturl(data.url)
     
    
  })
}

  return (
    <><div>
      <h1>QR CODE GENERATOR</h1><input className='inp' type='text' placeholder='Enter Text to Generate QR' onChange={e=>settext(e.target.value)}/>
    <button className='buton' onClick={fetchurl}>Generate</button></div>
    
<div className='qrc'> <img className='imag' src={url}></img></div>
     
        
         
    </>
  )
}

export default App
