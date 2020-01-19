import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/main.css"
import FolderContextProvider from "./contexts/FolderContextProvider";
import FolderContainer from "./components/FolderContainer/Index";

function App() {
  return (
    <FolderContextProvider>{/*Provide Context To Components*/}
      <FolderContainer />
    </FolderContextProvider>
  );
}

export default App;
