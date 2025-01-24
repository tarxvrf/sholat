import { judul,namakota } from "./Judulkota";
import { useState } from "react";

const Selectcomponent = () => {
    
  const [datasholat, setdata] = useState<[]>([]);  
  type waktusholat = {
      tanggal: string;
      imsyak: string;
      dhuha: string;
      dzuhur: string;
      ashr: string;
      magrib: string;
      isya: string;
      shubuh: string;
    };
    const bulan = (new Date().getMonth() + 1).toString().padStart(2, "0");
      const tahun = new Date().getFullYear();
    
      const jadwal = async (pilihkota: string) => {   
        const response = await fetch(
          `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${pilihkota}/${tahun}/${bulan}.json`
        );
        const data = await response.json(); 
        setdata(data)       
      }

    function handlepilih(event: React.ChangeEvent<HTMLSelectElement>): void {
        const kotanya = event.target.value; 
        jadwal(kotanya)
      }

  return (
    <div className="border">
      <div className="px-10 sm:pt-5 pt-15 pb-3">
        <form >
          <select className="border rounded-lg" onChange={handlepilih}>
            <option>silahkan pilih kotanya</option>
            {namakota.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </select>
        </form>
        <div></div>
      </div>

      <div className="fixed top-0 left-0 right-0 sm:relative sm:flex sm:justify-center sm:text-center">
        <div className="py-5 ">
          <ul className="flex flex-row gap-3 px-1">
            {judul.map((val, index) => (
              <li className="text-sm sm:text-lg" key={index}>
                <h1>{val}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pb-3">
        <form action="">
          <div>
            <ul>
              {datasholat.map((val: waktusholat, index:number) => (
                <li
                  key={index}
                  className="flex justify-center sm:text-sm text-xs flex-row gap-6 py-3 border sm:border-0 sm:py-1 "
                >
                  <div >{new Date(val.tanggal).getDate().toLocaleString()}</div>
                  <div>{val.imsyak}</div>
                  <div>{val.shubuh}</div>
                  <div>{val.dhuha}</div>
                  <div>{val.dzuhur}</div>
                  <div>{val.ashr}</div>
                  <div>{val.magrib}</div>
                  <div>{val.isya}</div>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Selectcomponent;

