import React, { useContext } from "react";
import addBoat from "../apiCalls/addBoat";
import GetBoatContext from "../context/getBoatContext";
import getBoats from "../apiCalls/getBoats";
import FormModal from "../components/modal/FormModal";

const AddBoatModal = ({ setVisible }) => {
  const { setBoatData, history } = useContext(GetBoatContext);

  const addBoatToList = async values => {
    const { name, description } = values;

    await addBoat(name, description, history);
    await getBoats(setBoatData, history);

    setVisible(false);
  };

  return <FormModal addBoatToList={addBoatToList} />;
};

export default AddBoatModal;
