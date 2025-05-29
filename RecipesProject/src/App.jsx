import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {

  return (
    <div className='bg-amber-100 w-[100%] h-[100%] p-5 font-serif text-emerald-700 text-xl'>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App;
