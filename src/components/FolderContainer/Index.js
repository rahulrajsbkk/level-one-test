import React, { useContext } from "react";
import FolderItem from "../FolderItem/Index";
import { FolderContext } from "../../contexts/FolderContextProvider";
import AddFolderComponent from "../AddFolderComponent/Index";

const FolderContainer = () => {
  const { currentFolder } = useContext(FolderContext); // State containing selected folder
  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {currentFolder
          ? currentFolder.map(folder => {
              return <FolderItem key={folder.id} folder={folder} />;
            })
          : null}
        {/* Handle If folder is undefined or null */}
        <AddFolderComponent />
        {/* Add Folder Button */}
      </div>
    </div>
  );
};

export default FolderContainer;
