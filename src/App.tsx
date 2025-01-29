

import Selectcomponent from "./components/Selectcomponent";

function App() {
 
  return (
    <>
      <div className="bg-black min-h-screen text-white flex flex-col pt-20 gap-5">
        <div className="flex justify-center text-3xl ">Jadwal Sholat </div>
        <Selectcomponent/>          
      </div>
    </>
  );
}

export default App;
