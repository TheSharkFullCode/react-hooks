import { useEffect,useState } from "react"

function USEEFFECT() {
    const [count,setCount]=useState(0)

useEffect(()=>{
    setCount(count+1)
    return ()=>{
        console.log('cleanup')
    }
},[]);
    // Este useEffect solo se ejecuta la primera vez, 
    
  return (
    <div>
        <h3>

        {count}
        </h3>
    </div>
  )
}

export default USEEFFECT
