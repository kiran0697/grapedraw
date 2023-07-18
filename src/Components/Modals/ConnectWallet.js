import React from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { bottomRightShadow } from "../../Utils";
import Web3 from "web3";

const ConnectWallet = ({ isConnectWallet, handalClose, connectMetamask }) => {
  
  async function connect() {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        const balance = await web3.eth.getBalance(accounts[0]);
        toast.success("You’ve successfully connected Metamask Wallet.");
        handalClose();
        connectMetamask(accounts, balance);
      } else {
        toast.error("No wallet");
      }
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <>
      <Modal isOpen={isConnectWallet} toggle={handalClose} centered size="md">
        <div style={{ borderRadius: "7px", ...bottomRightShadow }}>
          <ModalHeader toggle={handalClose}>
            <span className="fw-bold">Connect Wallet</span>
          </ModalHeader>
          <ModalBody>
            <Button
              className="w-100 my-1 p-1 text-dark fw-bold"
              style={{
                backgroundColor: "#cdcded",
                boxShadow: "-3px -3px black",
                borderRadius: "10px",
              }}
            >
              Metamask
            </Button>
            <Button
              className="w-100 my-1 p-1 bg-black fw-bold"
              style={{ borderRadius: "10px" }}
              onClick={() => {
                connect();
                // handalClose()
                // connectMetamask()
              }}
            >
              Connect Metamask
            </Button>
            <div
              className="d-flex flex-column align-items-center"
              style={{ fontSize: "0.7rem" }}
            >
              <p className="m-0 mt-2">
                By clicking Connect Metamask, you are accepting
              </p>
              <p className="mb-1">the Terms of Use and Privacy Policy.</p>
            </div>
          </ModalBody>
        </div>
      </Modal>
    </>
  );
};

export default ConnectWallet;
