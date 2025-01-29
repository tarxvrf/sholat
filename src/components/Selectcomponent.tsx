import { namakota } from "./Judulkota";
import { useEffect, useState } from "react";
import Selectkota from "./Selectkota";
import Listjadwal from "./Listjadwal";

const Selectcomponent = () => {
  const [datasholat, setdata] = useState<[]>([]);
  const [pilihkota, setpilihkota] = useState("");

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
  const day = new Date().getDate().toString().padStart(2, "0");
  const tanggalsolat = `${tahun}-${bulan}-${day}`;
  const ubahtanggal = `${day}-${bulan}-${tahun}`

  function handlepilih(event: React.ChangeEvent<HTMLSelectElement>): void {
    const kotanya = event.target.value;
    setpilihkota(kotanya);
  }
  console.log(pilihkota);
  useEffect(() => {
    const jadwal = async (pilihkota: string, tanggalsholat: string) => {
      try {
        if (pilihkota !== "") {
          const response = await fetch(
            `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${pilihkota}/${tahun}/${bulan}.json`
          );
          const data = await response.json();
          setdata(
            data.filter((item: waktusholat) => item.tanggal === tanggalsholat)
          );
        }
      } catch (error) {
        if (error) return <div>ada kendala di server</div>;
      }
    };
    jadwal(pilihkota, tanggalsolat);
  }, [pilihkota]);
  console.log(datasholat);

  return (
    <div className="w-full shadow shadow-2xl shadow-amber-600 border rounded-2xl">
      <div className="mb-5">
        <Selectkota options={namakota} handle={handlepilih} />
      </div>
      
      <div className="flex justify-center">
        {pilihkota === "" ? (
          "Silahkan Pilih Kota"
        ) : (
          <div className="font-semibold">
           <span className="text-2xl"> Kota yg dipilih :</span> <span className="text-yellow-300 text-3xl">{pilihkota}</span>
          </div>
        )}
      </div>
      <div className="flex justify-center pb-3">
        <Listjadwal datasholat={datasholat} ubahtanggal={ubahtanggal}/>
      </div>
    </div>
  );
};

export default Selectcomponent;
