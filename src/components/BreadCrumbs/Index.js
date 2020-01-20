import React, { useContext } from "react";
import { FolderContext } from "../../contexts/FolderContextProvider";
import home from "../../static/images/home.svg";

const BreadCrumbs = () => {
  const { parent, goBack, folder } = useContext(FolderContext);

  return (
    <div className="container d-flex my-3">
      {parent.map(id => {
        if (id === "") {
          return (
            <img
              key={id}
              onClick={() => {
                goBack("");
              }}
              src={home}
              alt="home"
              style={{ maxWidth: "20px", marginRight: "10px" }}
            />
          );
        } else {
          var index = folder.findIndex(x => x.id === id);
          var name = folder[index].title;
          return (
            <div
              key={id}
              onClick={() => {
                goBack(id);
              }}
            >
              /{name}
            </div>
          );
        }
      })}
    </div>
  );
};

export default BreadCrumbs;
