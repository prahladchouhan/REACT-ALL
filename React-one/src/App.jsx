import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Product from "./components/Product";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className=" w-screen h-screen bg-zinc-400 p-10">
        <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
