import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
   
    return (
        <div className="w-screen h-screen bg-green-200 p-10 flex text-center gap-10">
            <Create/>
            <Read/>
        </div>
    );
};
export default App;