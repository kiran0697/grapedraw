import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import "./styles.scss"

import {
  prizeFundIcon,
  bottomRightShadow,
  soldTicketsIcon,
  totalPrizeFundIcon,
} from "../../../Utils";

const icons = {
  prizeFundIcon: prizeFundIcon,
  soldTicketsIcon: soldTicketsIcon,
  totalPrizeFundIcon: totalPrizeFundIcon,
};

const StateCard = ({ stateCard: { title, balance, ETH_QTY, icon } }) => {

  return (
    <Card
      className="bg-white border-black state-card"
      style={{ ...bottomRightShadow, borderRadius: "13px" }}
    >
      <CardBody>
        <CardTitle className=" fs-5 fw-bold">
          {icons?.[icon]}
          <p>{title || ""}</p>
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
