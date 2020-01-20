import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/main.css";
import FolderContextProvider from "./contexts/FolderContextProvider";
import FolderContainer from "./components/FolderContainer/Index";
import BreadCrumbs from "./components/BreadCrumbs/Index";

function App() {
  return (
    <FolderContextProvider>{/*Provide Context To Components*/}
      <BreadCrumbs />
      <FolderContainer />
    </FolderContextProvider>
  );
}

export default App;
