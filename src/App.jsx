
import React from "react";

import ThemeToggle from "./interaction/themeToggle";
import './App.css'
import './styles/button.css'
import { bifrostPrimary } from './interface/buttons';

function App() {
  return (
    <div className="previewContainer">
      <bifrostPrimary text="Primary Button"/>
      <bifrostUrl text="Url Button" />
      
      <ThemeToggle />
    </div>
  );
}

export default App
