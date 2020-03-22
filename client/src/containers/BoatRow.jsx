import React, { useContext, useState } from "react";
import deleteBoat from "../apiCalls/deleteBoat";
import getBoats from "../apiCalls/getBoats";
import GetBoatContext from "../context/getBoatContext";
import findElementToEdit from "../utils/findElementToEdit";
import updateRow from "../apiCalls/updateRow";
import { useHistory } from "react-router-dom";
import DisplayBoatRow from "../components/boat/DisplayBoatRow";

const BoatRow = ({ id, name, description }) => {
  const [editMode, setEditMode] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  const { setBoatData, boatData } = useContext(GetBoatContext);

  let history = useHistory();

  const deleteRow = async () => {
    await deleteBoat(id, history);
    await getBoats(setBoatData, history);
  };

  const enterUpdateMode = () => {
    const editMode = findElementToEdit(boatData, id);

    if (editMode === true) setEditMode(true);
  };

  const endEditing = () => {
    const editMode = findElementToEdit(boatData, id);

    if (editMode === true)
      updateRow(
        updateName,
        updateDescription,
        setEditMode,
        id,
        setBoatData,
        history
      );
  };

  const handleChangeName = e => {
    setUpdateName(e.target.value);
  };

  const handleChangeDescription = e => {
    setUpdateDescription(e.target.value);
  };

  const changeUrl = () => {
    history.push(`boat/${id}`);
  };

  return (
    <DisplayBoatRow
      editMode={editMode}
      name={name}
      description={description}
      handleChangeDescription={handleChangeDescription}
      handleChangeName={handleChangeName}
      enterUpdateMode={enterUpdateMode}
      deleteRow={deleteRow}
      endEditing={endEditing}
      changeUrl={changeUrl}
    />
  );
};

export default BoatRow;
