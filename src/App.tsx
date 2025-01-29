import Selectcomponent from "./components/Selectcomponent";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen text-white flex flex-col pt-10 gap-5"> 
          <div className="flex justify-center text-3xl ">Jadwal Sholat </div>
         <div className="lg:px-96 "><Selectcomponent /></div>
      </div>
    </>
  );
}

export default App;
