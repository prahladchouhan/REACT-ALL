import Nav from "./components/Nav";
import MainRoutes from "./components/MainRoutes";

const App = () => {
  return (
    <div className=" w-screen h-screen bg-zinc-400 p-10">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
