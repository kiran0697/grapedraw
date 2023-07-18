import React from "react";
import {
  Button,
  Card,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { BsCheck } from "react-icons/bs";

import { bottomRightShadow, topLeftShadow } from "../../Utils";

const PayoutTransaction = ({ isPayoutTransaction, handalClose }) => {
  return (
    <>
      <Modal
        isOpen={isPayoutTransaction}
        toggle={handalClose}
        centered
        size="lg"
      >
        <div style={{ borderRadius: "7px", ...bottomRightShadow }}>
          <ModalHeader toggle={handalClose} style={{ borderBottom: "0" }}>
            <span className="fw-bold fs-4">Payout Transaction</span>
          </ModalHeader>
          <ModalBody>
            <Card
              className="border-black p-4 gap-3"
              style={topLeftShadow}
            >
              <Row className="fw-bold fs-5">
                <Col>Order #w15987h454578yuj_657</Col>
              </Row>
              <Row className="align-items-center">
                <Col>Time :</Col>
                <Col className="d-flex flex-column align-items-end">
                  <p className="fw-bold m-0">June 24, 2023</p>
                  <p className="m-0">at 9:59 AM UTC</p>
                </Col>
              </Row>
              <hr className="m-0 p-0" />
              <Row className="align-items-center">
                <Col>
                  <p className="fw-bold m-0">2.44 ETH</p>
                  <Button
                    className="m-0 p-0 text-decoration-none"
                    color="link"
                    style={{ fontSize: ".8rem" }}
                  >
                    0x5287b9736e648...
                  </Button>
                </Col>
                <Col className="d-flex justify-content-end">
                  <span className="d-flex align-items-center gap-1">
                    <BsCheck
                      className="rounded-circle"
                      color="white"
                      style={{ backgroundColor: "green" }}
                    />{" "}
                    Completed
                  </span>
                </Col>
              </Row>
              <hr className="m-0 p-0" />
              <Row className="align-items-center">
                <Col>
                  <p className="fw-bold m-0">1.33 ETH</p>
                  <Button
                    className="m-0 p-0 text-decoration-none"
                    color="link"
                    style={{ fontSize: ".8rem" }}
                  >
                    0xe3230077c765c...
                  </Button>
                </Col>
                <Col className="d-flex justify-content-end">
                  <span className="d-flex align-items-center gap-1">
                    <BsCheck
                      className="rounded-circle"
                      color="white"
                      style={{ backgroundColor: "green" }}
                    />{" "}
                    Completed
                  </span>
                </Col>
              </Row>
              <hr className="m-0 p-0" />
              <Row className="align-items-center">
                <Col>
                  <p className="fw-bold m-0">0.92 ETH</p>
                  <Button
                    className="m-0 p-0 text-decoration-none"
                    color="link"
                    style={{ fontSize: ".8rem" }}
                  >
                    0x813f68c6f7b4d...
                  </Button>
                </Col>
                <Col className="d-flex justify-content-end">
                  <span className="d-flex align-items-center gap-1">
                    <BsCheck
                      className="rounded-circle"
                      color="white"
                      style={{ backgroundColor: "green" }}
                    />{" "}
                    Completed
                  </span>
                </Col>
              </Row>
            </Card>
          </ModalBody>
        </div>
      </Modal>
    </>
  );
};

export default PayoutTransaction;
