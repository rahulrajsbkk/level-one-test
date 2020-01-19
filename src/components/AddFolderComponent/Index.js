import React, { useContext, useState } from "react";
import { FolderContext } from "../../contexts/FolderContextProvider";
import { Tooltip, Modal } from "reactstrap";
import warning from "../../static/images/info.svg";

const AddFolderComponent = () => {
  const { addFolder } = useContext(FolderContext); //Add Folder Function From FolderContext

  const [tooltipOpen, setTooltipOpen] = useState(false); //State to show and hide tooltip
  const toggle = () => setTooltipOpen(!tooltipOpen); //Function to toggle show and hide tooltip

  const [modal, setModal] = useState(false); //State to show and hide modal
  const toggleModal = () => setModal(!modal); //Function to toggle show and hide modal

  const [title, setTitle] = useState(""); //State To Store Form Input Folder Name

  const handleSubmit = e => {
    e.preventDefault(); //To prevent default form submit refresh page
    addFolder(title);
    toggleModal(); //Hide Modal on form submit
  };
  return (
    <>
      <div
        className="add-folder m-3"
        id="addFolder"
        onClick={toggleModal}
      ></div>
      <Tooltip
        placement="bottom"
        isOpen={tooltipOpen}
        target="addFolder"
        toggle={toggle}
      >
        Add Folder
      </Tooltip>
      {/* Tool Tip On Add Button */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <form onSubmit={handleSubmit} className="m-5 d-flex flex-column">
          <input
            ref={input => input && input.focus()}//Focus text input on open
            className="m-2"
            type="text"
            required
            maxLength="30"
            placeholder="Folder Name"
            onChange={e => setTitle(e.target.value)}
          />
          <input className="btn-primary m-2" type="submit" value="Add Folder" />
          <label className="mx-auto">
            <img
              src={warning}
              alt=""
              style={{ maxWidth: "20px", marginRight: "10px" }}
            />
            Folder Name Should Be Less Than 30 charectors
          </label>
        </form>
      </Modal>
      {/* Modal Containing Add Folder Form */}
    </>
  );
};

export default AddFolderComponent;
