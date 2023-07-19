import React, { useState } from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { BsInfoCircle } from "react-icons/bs";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import {
  bottomRightShadow,
  coins,
  ethereum,
  topLeftShadow,
} from "../../../Utils";

const coinIcons = {
  ethereumIcon: ethereum,
};

const BatchCard = ({
  connectWallet,
  batchCarddetails: {
    batchNo = "",
    coinIcon = "",
    coinName = "",
    period = "",
    endsIn = "",
    grandPrizes = [],
    ticketPrice = {},
    soldTicket = "",
    item = "",
  },
}) => {
  const [itemQuantity, setItemQuantity] = useState(item);

  return (
    <Card className="border-black mt-4" style={bottomRightShadow}>
      <CardBody>
        <Row className="">
          <Col className="fw-bold fs-4">{`Batch #${batchNo}`}</Col>
          <Col className="d-flex justify-content-end gap-2">
            <p className="m-0 fw-bold">
              <span className="me-1">{coinIcons[coinIcon]}</span>
              {coinName}
            </p>
          </Col>
        </Row>
        <Row className="mx-0">
          <Col className="border border-start-0 ps-0 py-2">
            <Row>
              <Col>Period :</Col>
              <Col className="d-flex justify-content-end">{period}</Col>
            </Row>
          </Col>
          <Col className="border border-end-0 pe-0 py-2">
            <Row>
              <Col>Ends in :</Col>
              <Col className="d-flex justify-content-end">{endsIn}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-1">
          <span>
            Grand Prizes <BsInfoCircle />
          </span>
        </Row>
        <Row className="mt-2">
          {grandPrizes.map((prize, index) => (
            <Col key={index}>
              <Row className="align-items-center">
                <Col className="col-sm-auto">{coins[prize?.coin || ""]}</Col>
                <Col className="col-sm-auto">
                  <p className="m-0 fw-bold">{prize?.ETH_QTY || ""}</p>
                  <p className="m-0">{`$${prize?.balance}` || ""}</p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
        <hr />
        <Row className="align-items-center">
          <Col>Ticket Price :</Col>
          <Col className="d-flex flex-column align-items-end">
            <p className="m-0 fw-bold">{ticketPrice?.ETH_QTY || ""}</p>
            <p className="m-0">{ticketPrice?.balance || ""}</p>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center">
          <Col>Sold tickets :</Col>
          <Col className="d-flex flex-column align-items-end">
            <p className="m-0 fw-bold">{soldTicket}</p>
            <Button color="link" className="m-0 p-0 text-decoration-none">
              Transactions
            </Button>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="col-sm-auto">
            <Button
              className="fs-5 fw-bold bg-light text-dark align-items-center"
              style={topLeftShadow}
            >
              {" "}
              <TfiArrowCircleLeft
                style={{
                  fontSize: "1em",
                  marginRight: "12px",
                  marginLeft: "7px",
                }}
                onClick={() => {
                  itemQuantity && setItemQuantity(itemQuantity - 1);
                }}
              />
              {itemQuantity}
              <TfiArrowCircleRight
                style={{
                  fontSize: "1em",
                  marginLeft: "12px",
                  marginRight: "7px",
                }}
                onClick={() => setItemQuantity(itemQuantity + 1)}
              />
            </Button>
          </Col>
          <Col>
            <Button
              className="fs-5 fw-bold w-100"
              style={{
                backgroundColor: "#2fad23",
                borderColor: "#2fad23",
                boxShadow: "3px 3px black",
              }}
              onClick={connectWallet}
            >
              Buy 0.002 ETH 2 Ticket
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default BatchCard;
