import React from 'react'

interface Props{
  datasholat:string[],
  ubahtanggal:string
}


const Listjadwal:React.FC<Props>= ({datasholat,ubahtanggal}) => {
  return (
    <ul className="p-3 gap-3 text-2xl">
        {datasholat.map((val:any, index) => (
            <li className="flex flex-col gap-5" key={index}>
              <h1 className="text-center">Tanggal : <span className="text-yellow-300">{ubahtanggal}</span> </h1>

              <div className="flex flex-row">
                <div className="mx-5 my-3">
                  <p>Imsyak</p> <p className="pb-3">{val.imsyak}</p>
                </div>
                <div className="mx-5 my-3">
                  <p>Subuh</p> <p className="pb-3">{val.shubuh}</p>
                </div>
                <div className="mx-5 my-3">
                  <p>Dhuha</p> <p className="pb-3">{val.dhuha}</p>
                </div>
              </div>
              
              <div className="flex flex-row">
                <div className="mx-5 my-3">
                  <p>Zuhur</p> <p className="pb-3">{val.dzuhur}</p>
                </div>
                <div className="mx-5 my-3">
                  <p>Ashar</p> <p className="pb-3">{val.ashr}</p>
                </div>
                <div className="mx-5 my-3">
                  <p>Magrib</p> <p className="pb-3">{val.magrib}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="mx-5 ">
                  <p className="text-center">Isya</p> <p>{val.isya}</p>
                </div>                
              </div>
            </li>
          ))}
    </ul>
  )
}

export default Listjadwal
