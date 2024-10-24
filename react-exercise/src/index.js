import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home/index"
import "./style/Index.scss"
import ShoppingCar from "./components/ShoppingCar/index"
import "./style/Home.scss"
import "./style/ShoppingCar.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShoppingCar/>
    <Home/>
    <App />
    <Home/>
  </React.StrictMode>
);

reportWebVitals();
