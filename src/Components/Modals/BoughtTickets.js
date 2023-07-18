import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { bottomRightShadow, ethereum, trustIcon } from "../../Utils";
import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";
import Searchbar from "../Comman/Searchbar/Searchbar.js";

const BoughtTickets = ({ isBoughtTickets, handalClose }) => {
  return (
    <>
      <Modal isOpen={isBoughtTickets} toggle={handalClose} centered size="md">
        <div style={{ borderRadius: "7px", ...bottomRightShadow }}>
          <ModalHeader toggle={handalClose}>
            <span className="fw-bold">Bought Tickets</span>
          </ModalHeader>
          <ModalBody>
            <Searchbar />

            <Card className="border-black mt-4" style={bottomRightShadow}>
              <CardBody>
                <Row>
                  <Col className="fw-bold">Batch #131</Col>
                </Row>
                <Row className="mt-1">
                  <Col>Bought Tickets :</Col>
                  <Col className="d-flex align-items-end col-sm-auto">1</Col>
                </Row>
                <hr />
                <Row className="mt-2">
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs1Circle
                          style={{
                            color: "black",
                            backgroundColor: "#eedb30",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">2.44 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs2Circle
                          style={{
                            color: "black",
                            backgroundColor: "#f4f2f5",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">1.33 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs3Circle
                          style={{
                            color: "black",
                            backgroundColor: "#e6a37d",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">0.92 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-1 align-items-center">
                  <Col className="col-sm-auto m-0">
                    {trustIcon}
                  </Col>
                  <Col className="col-sm-auto m-0 p-0">
                    <Button color="link" className="fs-5 m-0 p-0">
                      Pyment Transaction
                    </Button>
                  </Col>
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Row className="m-0 p-0">
                    <Col>Blockchain :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">
                        <span className="me-1">{ethereum}</span>
                        Ethereum
                      </p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Peropd :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">Weekly</p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Ticket Price:</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">0.0001 ETH</p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Sold TIckets :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">4,879</p>
                    </Col>
                  </Row>
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Col>Closing Date :</Col>
                  <Col className="d-flex flex-column align-items-end">
                    <p className="m-0 fw-bold">June 24, 2023</p>
                    <p className="fs-6 text-secondary">at 9:59 AM UTC</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="border-black mt-4" style={bottomRightShadow}>
              <CardBody>
                <Row>
                  <Col className="fw-bold">Batch #130</Col>
                </Row>
                <Row className="mt-1">
                  <Col>Bought Tickets :</Col>
                  <Col className="d-flex align-items-end col-sm-auto">1</Col>
                </Row>
                <hr />
                <Row className="mt-2">
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs1Circle
                          style={{
                            color: "black",
                            backgroundColor: "#eedb30",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">2.44 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs2Circle
                          style={{
                            color: "black",
                            backgroundColor: "#f4f2f5",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">1.33 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs3Circle
                          style={{
                            color: "black",
                            backgroundColor: "#e6a37d",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">0.92 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-1 align-items-center">
                  <Col className="col-sm-auto m-0">
                    {trustIcon}
                  </Col>
                  <Col className="col-sm-auto m-0 p-0">
                    <Button color="link" className="fs-5 m-0 p-0">
                      Pyment Transaction
                    </Button>
                  </Col>
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Row className="m-0 p-0">
                    <Col>Blockchain :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">
                        <span className="me-1">{ethereum}</span>
                        Ethereum
                      </p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Peropd :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">Weekly</p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Ticket Price:</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">0.0001 ETH</p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Sold TIckets :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">4,879</p>
                    </Col>
                  </Row>
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Col>Closing Date :</Col>
                  <Col className="d-flex flex-column align-items-end">
                    <p className="m-0 fw-bold">June 24, 2023</p>
                    <p className="fs-6 text-secondary">at 9:59 AM UTC</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="border-black mt-4" style={bottomRightShadow}>
              <CardBody>
                <Row>
                  <Col className="fw-bold">Batch #130</Col>
                </Row>
                <Row className="mt-1">
                  <Col>Bought Tickets :</Col>
                  <Col className="d-flex align-items-end col-sm-auto">1</Col>
                </Row>
                <hr />
                <Row className="mt-2">
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs1Circle
                          style={{
                            color: "black",
                            backgroundColor: "#eedb30",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">2.44 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs2Circle
                          style={{
                            color: "black",
                            backgroundColor: "#f4f2f5",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">1.33 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="align-items-center">
                      <Col className="col-sm-auto">
                        <Bs3Circle
                          style={{
                            color: "black",
                            backgroundColor: "#e6a37d",
                            fontSize: "3em",
                            borderRadius: "50px",
                            border: "2px solid black",
                            padding: "5px",
                          }}
                        />
                      </Col>
                      <Col className="col-sm-auto">
                        <p className="m-0 fw-bold">0.92 ETH</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-1 align-items-center">
                  <Col className="col-sm-auto m-0">
                    {trustIcon}
                  </Col>
                  <Col className="col-sm-auto m-0 p-0">
                    <Button color="link" className="fs-5 m-0 p-0">
                      Pyment Transaction
                    </Button>
                  </Col>
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Row className="m-0 p-0">
                    <Col>Blockchain :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">
                        <span className="me-1">{ethereum}</span>
                        Ethereum
                      </p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Peropd :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">Weekly</p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Ticket Price:</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">0.0001 ETH</p>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    <Col>Sold TIckets :</Col>
                    <Col className="d-flex flex-column align-items-end">
                      <p className="m-0 fw-bold">4,879</p>
                    </Col>
                  </Row>
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Col>Closing Date :</Col>
                  <Col className="d-flex flex-column align-items-end">
                    <p className="m-0 fw-bold">June 24, 2023</p>
                    <p className="fs-6 text-secondary">at 9:59 AM UTC</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Button
              className="w-100 mt-3 p-2 border-black bg-black fw-bold"
              style={{ borderRadius: "10px" }}
            >
              More Batches
            </Button>
          </ModalBody>
        </div>
      </Modal>
    </>
  );
};

export default BoughtTickets;
