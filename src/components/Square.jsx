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
    <div className="w-[33%] h-[100px] flex items-center justify-center border flex-nowrap p-10 text-9xl  border-black cursor-pointer"
    onClick={
        ()=>handleClick()
    }
    >{char=='-'?' ':char}</div>
  )
}

export default Square