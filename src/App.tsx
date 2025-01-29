

import Selectcomponent from "./components/Selectcomponent";

function App() {
 
  return (
    <>
      <div className="bg-black min-h-screen text-white flex flex-col justify-center gap-5 pt-2">
        <div className="flex justify-center text-3xl ">Jadwal Sholat </div>
        <Selectcomponent/>          
      </div>
    </>
  );
}

export default App;
