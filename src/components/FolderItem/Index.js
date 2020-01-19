import { FolderContext } from "../../contexts/FolderContextProvider";
import React, { useContext } from "react";

const FolderItem = ({ folder }) => {
  const { changeFolder } = useContext(FolderContext); //Fuction to change folder from FolderContext
  const { id, title } = folder;
  return (
    <div
      className="folder-item d-flex m-3"
      onClick={() => changeFolder(id)}
    >
      {/* change folder on click */}
      <div className="m-auto">{title}</div>
    </div>
  );
};

export default FolderItem;
