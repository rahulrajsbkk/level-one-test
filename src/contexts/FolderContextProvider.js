import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const FolderContext = createContext();

const FolderContextProvider = props => {
  const [title, setTitle] = useState("Folder"); //State To Show Title Of Current Folder
  const [folder, setFolder] = useState([
    { title: "folder2", id: 1, child: "" },
    { title: "folder3", id: 2, child: "" },
    { title: "folder1", id: 3, child: "" }
  ]); //State containing selected folder and sub folders

  const addFolder = title => {
    setFolder([...folder, { title, id: uuid(), child: "" }]);
  }; //Add folder to selected folder

  const changeFolder = id => {
    const index = folder.findIndex(x => x.id === id); //Find Index Of Clicked Folder to Acces Value From Array
    setFolder(folder[index].child); //Change to inner folder
    setTitle(folder[index].title); //Change Title
  };
  return (
    <FolderContext.Provider
      value={{
        title,
        folder,
        addFolder,
        changeFolder
      }}
    >
      {props.children}
    </FolderContext.Provider>
  );
};
export default FolderContextProvider;
