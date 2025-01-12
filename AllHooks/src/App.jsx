import { useState } from 'react'

import './App.css'
import Formulary from './components/Formulary'

function App() {
  const [count, setCount] = useState(0);



 

  return (
    <>
      <div className='container'>

      <button  onClick={()=>setCount(count+1)} className='border-[#171515] border-[2px] br-[2px] p-[3px] border-r[2px]  rounded-[4px] bg-[#64f36e]'>Aumentar</button>
      <h1 className='border-[2px] border-[black] w-[80px] h-[30px] rounded text-center'>      {count}      </h1>
      <button onClick={()=>setCount(count-1)} className='border-[black] border-[2px] rounded-[4px] p-[3px] bg-[pink]' >Disminuir</button>
      </div>
      
      <Formulary ></Formulary>
 

    </>
  )
}

export default App
