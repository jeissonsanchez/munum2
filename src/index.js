import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./componets/drawer";
import Navbar from "./componets/navbar";
//temp
import TableList from "./views/TableList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer className="responsiveDrawer" />
      <div>
        <Navbar
          className="navbar"
          router={["Dashboard", "Delegates", "Institutes", "Staff"]}
        />
      </div>

      {/* <View /> */}
      <TableList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
