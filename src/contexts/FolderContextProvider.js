import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const FolderContext = createContext();

const FolderContextProvider = props => {
  const [parent, setParent] = useState([""]);
  const [folder, setFolder] = useState([
    { title: "folder2", id: "1", parent: [""] },
    { title: "folder3", id: "2", parent: [""] },
    { title: "folder1", id: "3", parent: [""] }
  ]); //State containing selected folder and sub folders
  const [currentFolder, setCurrentFolder] = useState(folder);

  const addFolder = title => {
    const obj = { title, id: uuid(), parent: parent };
    setFolder([...folder, obj]);
  }; //Add ffolderolder to selected folder

  const changeFolder = id => {
    if (parent[parent.length - 1] !== id) {
      setParent([...parent, id]);
    }
    setCurrentFolder(
      folder.filter(folder => folder.parent[folder.parent.length - 1] === id)
    );
  };

  const goBack = id =>{

    var tmp = parent;
    console.log(id)

    for(;;){
      if(tmp[tmp.length-1]===id){
        console.log("true")
        setParent(tmp);
        break;
      }else{
        tmp.pop();
      }
    }
    setCurrentFolder(
      folder.filter(folder => folder.parent[folder.parent.length - 1] === id)
    );
  }

  useEffect(() => {
    const id = parent[parent.length - 1];
    changeFolder(id);
  }, [folder]);

  return (
    <FolderContext.Provider
      value={{
        parent,
        currentFolder,
        addFolder,
        changeFolder,
        goBack,
        folder
      }}
    >
      {props.children}
    </FolderContext.Provider>
  );
};
export default FolderContextProvider;
