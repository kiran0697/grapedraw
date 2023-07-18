import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { bottomRightShadow } from "../../../Utils";

const StateCard = ({ stateCard: { title, balance, ETH_QTY } }) => {
  return (
      <Card className="bg-white border-black" style={bottomRightShadow}>
        <CardBody>
          <CardTitle className="d-flex justify-content-center">
            {title || ""}
          </CardTitle>
          <hr />
          <Row className="mx-1">
            <Col>{balance || ""}</Col>
            <Col className="d-flex justify-content-end">{ETH_QTY || ""}</Col>
          </Row>
        </CardBody>
      </Card>
  );
};

export default StateCard;
