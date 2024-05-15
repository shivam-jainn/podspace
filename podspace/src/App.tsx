import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
 
  return (
    <div className="container">
      <h1>Welcome to Podspace!</h1>
      <h2>Your locally owned codespace</h2>
    </div>
  );
}

export default App;
