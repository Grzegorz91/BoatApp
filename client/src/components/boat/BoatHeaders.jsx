import React from "react";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const BoatHeaders = () => {
  return (
    <Row type="flex" justify="center" align="middle" className="header-row">
      <Col span="6" className="header-border">
        <Title level={4} className="header-boat">
          Name
        </Title>
      </Col>
      <Col span="6" className="header-border">
        <Title level={4} className="header-boat">
          Description
        </Title>
      </Col>
      <Col span="6" className="header-border">
        <Title level={4} className="header-boat">
          Boat Management
        </Title>
      </Col>
    </Row>
  );
};

export default BoatHeaders;
