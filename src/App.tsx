import logo from "./assets/logo.png";
import { GameBoard } from "./components/GameBoard";


function App() {

  return (
    <>
      <header className="w-full h-auto flex justify-center">
        <img src={logo} alt="regular show logo"/>
      </header>

      <main className="mx-72 bg-blue-700 p-10 rounded-xl">
        <GameBoard />
      </main>
    </>
  )
}

export default App
