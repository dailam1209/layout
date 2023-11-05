import Header from "./commons/Header";
import IMAGES from "./assets/images";
import './App.css';
import { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
 
  return (
    <div
      className="w-full min-h-max"
    >
      <Home/>
    </div>
  );
}

export default App;
