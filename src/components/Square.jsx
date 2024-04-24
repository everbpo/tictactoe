import { useState } from "react"

function Square({sqNo,tiro,handleTiro}) {
    const [click,setClick]=useState(0);
    const [char,setChar]=useState('-');
    const handleClick=()=>{
        setClick(click+1);
        if(click>=1) return;
        setChar(tiro);    
        handleTiro(sqNo);
    }
  return (
    <div
    onClick={
        ()=>handleClick()
    }
    className='border border-black p-10 text-9xl '
    >{char=='-'?' ':char}</div>
  )
}

export default Square