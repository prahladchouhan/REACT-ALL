import Navbar from "./component/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="p-4">
        <MainRoutes />
      </main>
    </div>
  );
};

export default App;
