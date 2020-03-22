import React from "react";
import { useHistory } from "react-router-dom";

import useGetDetailsBoat from "../hooks/useGetDetailsBoat";
import DisplayBoatDetails from "../components/boatDetails/DisplayBoatDetails";

const BoatDetails = props => {
  const history = useHistory();
  const { description, name } = useGetDetailsBoat(props, history);

  const goBack = () => {
    history.goBack();
  };

  return (
    <DisplayBoatDetails description={description} name={name} goBack={goBack} />
  );
};

export default BoatDetails;
