import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";

import {
  accountIcon,
  bottomRightShadow,
  ethereum,
  ringLogo,
  topLeftShadow,
  trustIcon,
} from "../../Utils";
import ConnectWallet from "../../Components/Modals/ConnectWallet";
import BoughtTickets from "../../Components/Modals/BoughtTickets";
import PayoutTransaction from "../../Components/Modals/PayoutTransaction";
import StateCard from "../../Components/Comman/Cards/StateCard";
import BatchCard from "../../Components/Comman/Cards/BatchCard";

const maskedAccountNumber = (accountNumber) => {
  return `${accountNumber[0].slice(0, 6)}...${accountNumber[0].slice(
    accountNumber[0].length - 4,
    accountNumber[0].length
  )}`;
};

const stateCardData = [
  {
    title: "Active batches' Prize Fund",
    balance: "$367,980",
    ETH_QTY: "191.59 ETH",
    icon: "prizeFundIcon" 
  },
  {
    title: "Active batches' Sold Tickets",
    balance: "167,025 Tickets",
    icon: "soldTicketsIcon" 
  },
  {
    title: "Total Prize Fund",
    balance: "$1,847,099",
    ETH_QTY: "796,18 ETH",
    icon: "totalPrizeFundIcon" 
  },
];

const batchCardData = [
  {
    batchNo: 134,
    coinIcon: "ethereumIcon",
    coinName: "Ethereum",
    period: "Daily",
    endsIn: "00:03:58",
    grandPrizes: [
      {coin : "coinOne", ETH_QTY: "2.44 ETH", balance: 4687.92 },
      {coin : "coinTwo", ETH_QTY: "0.92 ETH", balance: 1767.68 },
      {coin : "coinThree", ETH_QTY: "1.33 ETH", balance: 2333.3 },
    ],
    ticketPrice: { ETH_QTY: "0.0001 ETH", balance: "$0.19" },
    soldTicket: "0.0001 ETH",
    item: 2,
  },
  {
    batchNo: 133,
    coinIcon: "ethereumIcon",
    coinName: "Ethereum",
    period: "Daily",
    endsIn: "00:03:58",
    grandPrizes: [
      {coin : "coinOne", ETH_QTY: "2.44 ETH", balance: 4687.92 },
      {coin : "coinTwo", ETH_QTY: "0.92 ETH", balance: 1767.68 },
      {coin : "coinThree", ETH_QTY: "1.33 ETH", balance: 2333.3 },
    ],
    ticketPrice: { ETH_QTY: "0.0001 ETH", balance: "$0.19" },
    soldTicket: "0.0001 ETH",
    item: 1,
  },
  {
    batchNo: 132,
    coinIcon: "ethereumIcon",
    coinName: "Ethereum",
    period: "Daily",
    endsIn: "00:03:58",
    grandPrizes: [
      {coin : "coinOne", ETH_QTY: "2.44 ETH", balance: 4687.92 },
      {coin : "coinTwo", ETH_QTY: "0.92 ETH", balance: 1767.68 },
      {coin : "coinThree", ETH_QTY: "1.33 ETH", balance: 2333.3 },
    ],
    ticketPrice: { ETH_QTY: "0.0001 ETH", balance: "$0.19" },
    soldTicket: "0.0001 ETH",
    item: 5,
  },
];

const Dashboard = () => {
  const [accountDetails, setAccountDetails] = useState(null);
  const [isConnectWallet, setIsConnectWallet] = useState(false);
  const [isBoughtTickets, setIsBoughtTickets] = useState(false);
  const [isPayoutTransaction, setIsPayoutTransaction] = useState(false);

  return (
    <>
      {isConnectWallet && (
        <ConnectWallet
          isConnectWallet={isConnectWallet}
          handalClose={() => setIsConnectWallet(false)}
          connectMetamask={(accountNo, balance) =>
            setAccountDetails({ accountNo: accountNo, balance: balance })
          }
        />
      )}

      {isBoughtTickets && (
        <BoughtTickets
          isBoughtTickets={isBoughtTickets}
          handalClose={() => setIsBoughtTickets(false)}
        />
      )}

      {isPayoutTransaction && (
        <PayoutTransaction
          isPayoutTransaction={isPayoutTransaction}
          handalClose={() => setIsPayoutTransaction(false)}
        />
      )}

      <Card className="border-0">
        <CardBody>
          <Row>
            <Col>
              <Button
                className="bg-light text-dark m-0 py-0 ps-0"
                style={topLeftShadow}
              >
                {ringLogo} GRAPEDRAW
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              {accountDetails ? (
                <>
                  {accountIcon}
                  {maskedAccountNumber(accountDetails.accountNo)}
                </>
              ) : (
                <Button
                  className="bg-dark"
                  onClick={() => setIsConnectWallet(true)}
                >
                  Connect
                </Button>
              )}
            </Col>
          </Row>
          <hr />

          <Row className="d-flex justify-content-center h5 m-0 p-0 fw-bold">
            Get access to daily prize
          </Row>
          <Row className="d-flex justify-content-center h5 mb-3 fw-bold">
            pools with as little as $1
          </Row>
          <Row className="d-flex justify-content-center">
            95% of all funds are divided
          </Row>
          <Row className="d-flex justify-content-center">
            among the winners.
          </Row>

          <Row lg={12} className="my-4">
            {stateCardData.map((stateCard , index) => (
              <Col key={index} lg={4} className="mb-3">
                <StateCard stateCard={stateCard} />
              </Col>
            ))}
          </Row>

          {!accountDetails && (
            <Row>
              <Col lg={12}>
                <Card
                  className="border-2 border-black"
                  style={{ backgroundColor: "#cdcded", ...bottomRightShadow }}
                >
                  <CardBody>
                    <CardTitle className="fw-bold">
                      You haven't connected a wallet.
                    </CardTitle>
                    <Button
                      className="bg-dark"
                      onClick={() => setIsConnectWallet(true)}
                    >
                      Connect Wallet
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}

          <Row className="mt-4">
            <Col lg={8}>
              <hr className="border border-black mb-1" />
              Active batchas
              {batchCardData.map((batchCarddetails) => (
                <BatchCard
                key={batchCarddetails.batchNo}
                  batchCarddetails={batchCarddetails}
                  connectWallet={() => setIsConnectWallet(true)}
                />
              ))}
            </Col>

            <Col lg={4}>
              {accountDetails && (
                <Card className="border-black mt-4" style={bottomRightShadow}>
                  <CardBody>
                    <Row>
                      <Col className="fw-bold">My Tickets</Col>
                      <Col className="d-flex align-items-end col-sm-auto">
                        <Button
                          color="link"
                          className="text-decoration-none fw-bold p-0 m-0"
                          onClick={() => setIsBoughtTickets(true)}
                        >
                          {`${accountDetails.balance} Tickets`}
                        </Button>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col>Wallet Address :</Col>
                      <Col className="d-flex flex-column align-items-end">
                        <p className="m-0 fw-bold">
                          {accountIcon}
                          {maskedAccountNumber(accountDetails.accountNo)}
                        </p>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              )}

              <Card className="border-black mt-4" style={bottomRightShadow}>
                <CardBody>
                  <Row className="fs-4">
                    <Col className="fw-bold">Stats</Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col className="fw-bold">Batch #131</Col>
                  </Row>
                  <Row className="mt-1">
                    <Col>Bought Tickets :</Col>
                    <Col className="d-flex align-items-end col-sm-auto">0</Col>
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
                              fontSize: "4em",
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
                              fontSize: "4em",
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
                              fontSize: "4em",
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
                    <Col className="col-auto m-0">
                      {trustIcon}
                    </Col>
                    <Col className="col-auto m-0 p-0">
                      <Button
                        color="link"
                        className="fs-5 m-0 p-0"
                        onClick={() =>
                          accountDetails && setIsPayoutTransaction(true)
                        }
                      >
                        Payout Transaction
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
                  <Row className="mt-2">
                    <Button className="rounded-pill fs-5 fw-bold w-100 bg-black text-white">
                      All Reward History
                    </Button>
                  </Row>
                </CardBody>
              </Card>

            </Col>
          </Row>
          <Row className="my-4">
            <Col lg={12}>
              <Card
                className="border-2 border-black"
                style={{ backgroundColor: "#cdcded", ...bottomRightShadow }}
              >
                <CardBody>
                  <CardTitle className="fw-bold">
                    Subscribe to our channels to keep up with the next batches
                  </CardTitle>
                  <Button className="bg-dark rounded-pill me-1">TW</Button>
                  <Button className="bg-dark rounded-pill me-1">DISCORD</Button>
                  <Button className="bg-dark rounded-pill">TG</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Dashboard;
