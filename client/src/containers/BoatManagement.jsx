import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import ModalBoat from "../components/modal/ModalBoat";
import BoatRow from "./BoatRow";
import getBoats from "../apiCalls/getBoats";
import GetBoatContext from "../context/getBoatContext";
import uniqid from "uniqid";
import { useHistory } from "react-router-dom";
import BoatHeaders from "../components/boat/BoatHeaders";

const BoatManagement = () => {
  const [boatData, setBoatData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function displayBoats() {
      getBoats(setBoatData, history);
    }
    displayBoats();
  }, []);

  return (
    <GetBoatContext.Provider value={{ setBoatData, boatData, history }}>
      <Row>
        <Col>
          <ModalBoat />
        </Col>
      </Row>
      <BoatHeaders />
      {boatData.map(({ id, name, description }) => (
        <BoatRow id={id} name={name} description={description} key={uniqid()} />
      ))}
    </GetBoatContext.Provider>
  );
};

export default BoatManagement;
