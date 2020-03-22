import React, { Fragment } from "react";
import { Typography, Row, Col, Button } from "antd";
import "./boatDetails.css";

const { Text, Title } = Typography;

const DisplayBoatDetails = ({ description, name, goBack }) => {
  return (
    <Fragment>
      <Row type="flex" justify="center" align="middle">
        <Col span="6">
          <Title type="secondary" className="details-center">
            DETAILS OF BOAT
          </Title>
        </Col>
      </Row>

      <Row className="details-center">
        <Col>
          <Text type="secondary">name: {name}</Text>
        </Col>
        <Col>
          <Text type="warning">Description: {description}</Text>
        </Col>
        <Col>
          <Button onClick={goBack}>Back</Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DisplayBoatDetails;
