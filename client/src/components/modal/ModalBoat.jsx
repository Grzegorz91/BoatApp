import React, { useState } from "react";
import { Modal, Button, Row, Col } from "antd";
import FormModal from "../../containers/AddBoatModal";

const ModalBoat = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col span="1">
          <Button type="primary" onClick={showModal}>
            Add Boat
          </Button>
        </Col>
      </Row>

      <Modal
        title="Add boat"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormModal setVisible={setVisible} />
      </Modal>
    </div>
  );
};

export default ModalBoat;
