import React from "react";
import Navbar from "../Navbar/Navbar";
import wallpaperStyle from "./app-wallpaper";

const App = () => {
  return (
    <div className="App" style={wallpaperStyle}>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
