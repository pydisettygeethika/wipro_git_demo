import React, { useEffect, useState } from'react'


export default function FirstHook() {  
   
    const [count, setCount] = useState(0)
   
    useEffect( () => {
        document.title = `CDU ${count} times`
    })


  return (
    <div>
            <button onClick={ () => setCount(count + 1)}> CLICK </button>
       
    </div>
  )
}

