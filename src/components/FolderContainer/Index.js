import React, { useContext } from "react";
import FolderItem from "../FolderItem/Index";
import { FolderContext } from "../../contexts/FolderContextProvider";
import AddFolderButton from "../AddFolderComponent/Index";

const FolderContainer = () => {
  const { folder, title } = useContext(FolderContext); // State containing selected folder
  return (
    <div className="container">
      <div className="mt-3">{title}</div>
      <div className="d-flex flex-wrap">
        {folder
          ? folder.map(folder => {
              return <FolderItem key={folder.id} folder={folder} />;
            })
          : null}
        {/* Handle If folder is undefined or null */}
        <AddFolderButton />
        {/* Add Folder Button */}
      </div>
    </div>
  );
};

export default FolderContainer;
