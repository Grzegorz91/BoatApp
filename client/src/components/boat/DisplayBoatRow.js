import React, { Fragment } from "react";
import { Row, Col, Button, Input } from "antd";
import './boatRow.css'

const DisplayBoatRow = props => {
  const {
    editMode,
    name,
    description,
    handleChangeName,
    updateName,
    handleChangeDescription,
    updateDescription,
    endEditing,
    changeUrl,
    deleteRow,
    enterUpdateMode
  } = props;
  return (
    <Row type="flex" justify="center" align="middle">
      {editMode === false && (
        <Fragment>
          <Col span="6" className="row-border">
            {name}
          </Col>
          <Col span="6" className="row-border">
            {description}
          </Col>
        </Fragment>
      )}

      {editMode === true && (
        <Fragment>
          <Col span="6">
            <Input
              onChange={handleChangeName}
              value={updateName}
              placeholder="Name..."
              className="input-width"
            />
          </Col>
          <Col span="6">
            <Input
              onChange={handleChangeDescription}
              value={updateDescription}
              placeholder="Description..."
              className="input-width"
            />
          </Col>
        </Fragment>
      )}
      <Col span="6" className="row-border">
        {editMode === true && <Button onClick={endEditing}>End editing</Button>}
        {editMode === false && (
          <Button onClick={enterUpdateMode}>Edit</Button>
        )}
        <Button onClick={deleteRow}>Delete</Button>
        <Button onClick={changeUrl}>Details</Button>
      </Col>
    </Row>
  );
};

export default DisplayBoatRow;
