import React from "react"

interface myprops{
   options:string[],  
   handle:(event: React.ChangeEvent<HTMLSelectElement>)=>void   
}

const Selectkota:React.FC<myprops> =({options,handle})=> {
  return (
    <div className="mt-7 pb-5 ml-5">
      <select className="px-3 border border-blue-500 rounded-md text-black bg-white" onChange={handle}>
        <option >Pilih Kota</option>
        {options.map((val,index)=>
        <option key={index} value={val}>{val}</option>
        )}
      </select>
    </div>
  )
}

export default Selectkota
