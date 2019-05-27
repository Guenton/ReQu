import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => {
  return (
    <div className="Navbar">
      <AppBar position="static" color="default">
        <Toolbar>
          <h1>Hello World</h1>
        </Toolbar>       
      </AppBar>
    </div>
  );
}

export default Navbar;
