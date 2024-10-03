
import React from "react";
import { PrimaryBtn, UrlBtn } from "./interface/buttons";
import ThemeToggle from "./interaction/themeToggle";
import './App.css'
import './styles/button.css'

function App() {
  return (
    <div className="previewContainer">
      <PrimaryBtn text="Primary Button" />
      <UrlBtn text="Url Button" />
      <ThemeToggle />
    </div>
  );
}

export default App
