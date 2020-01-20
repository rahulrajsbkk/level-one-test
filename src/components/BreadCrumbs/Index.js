import React, { useContext } from "react";
import { FolderContext } from "../../contexts/FolderContextProvider";
import home from "../../static/images/home.svg";

const BreadCrumbs = () => {
  const { parent, goBack } = useContext(FolderContext);

  return (
    <div className="container d-flex my-3">
      {parent.map(id => {
        if (id === "") {
          return (
            <img
              key={id}
              onClick={() => {
                console.log("onClick");
                goBack("");
              }}
              src={home}
              alt="home"
              style={{ maxWidth: "20px", marginRight: "10px" }}
            />
          );
        } else {
          return (
            <div
              key={id}
              onClick={() => {
                console.log("onClick");
                goBack(id);
              }}
            >
              /{id}
            </div>
          );
        }
      })}
    </div>
  );
};

export default BreadCrumbs;
