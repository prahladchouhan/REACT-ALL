import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.jsx";
import {Provider} from 'react-redux';
import { ToastContainer } from "react-toastify";
import {BrowserRouter}from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    <ToastContainer className=""/>
  </BrowserRouter>
  </Provider>
);
