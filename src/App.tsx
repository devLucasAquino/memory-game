import logo from "./assets/logo.png";
import mordecai from "./assets/Mordecai.webp";
import rigby from "./assets/Rigby.webp";
import benson from "./assets/Benson.webp";
import margaret from "./assets/Margaret.webp";
import eileen from "./assets/Eileen.webp";
import fastasmao from "./assets/BigGhost.webp";
import saltidao from "./assets/Saltidão.webp";
import pairulito from "./assets/Pairulito.webp";
import musculoso from "./assets/Muscleman.webp";


function App() {

  return (
    <>
      <header className="w-full h-auto flex justify-center">
        <img src={logo} alt="regular show logo"/>
      </header>

      <main className="mx-72 bg-blue-700 p-10 rounded-xl">
        <section className="grid grid-cols-6 grid-rows-3 gap-2">
          <div className="bg-white rounded-lg">
            <img src={mordecai} className="w-full h-full object-cover"  />
          </div>
          <div className="bg-white rounded-lg">
            <img src={rigby} className="w-full h-full object-cover"  />
          </div>
          <div className="bg-white rounded-lg">
            <img src={benson} className="w-full h-full object-cover"  />
          </div>
          <div className="bg-white rounded-lg">
            <img src={margaret} className="w-full h-full object-cover"  />
          </div>
          <div className="bg-white rounded-lg">
            <img src={eileen} className="w-full h-full object-cover"  />
          </div>
          <div className="bg-white rounded-lg">
            <img src={pairulito} className="w-full h-full object-cover"  />
          </div>
          <div className="bg-white rounded-lg">
            <img src={fastasmao} className="w-full h-full object-cover"  />
          </div>
          <div className="bg-white rounded-lg">
            <img src={musculoso} className="w-full h-full object-cover"  />
          </div>
          <div className="bg-white rounded-lg">
            <img src={saltidao} className="w-full h-full object-cover"  />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
