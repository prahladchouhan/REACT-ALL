import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "../src/components/Footer";


function App() {

  return (
    <div className='bg-amber-100 w-[100%] h-[100%]  font-serif text-emerald-700 text-xl'>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App;
