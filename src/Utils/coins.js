import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";

const coins = {
    coinOne : <Bs1Circle
      style={{
        color: "black",
        backgroundColor: "#eedb30",
        fontSize: "4em",
        borderRadius: "50px",
        border: "2px solid black",
        padding: "5px",
        boxShadow: "3px 3px black"
      }}
    />,
    coinTwo : <Bs2Circle
      style={{
        color: "black",
        backgroundColor: "#f4f2f5",
        fontSize: "4em",
        borderRadius: "50px",
        border: "2px solid black",
        padding: "5px",
        boxShadow: "3px 3px black"
      }}
    />,
    coinThree : <Bs3Circle
      style={{
        color: "black",
        backgroundColor: "#e6a37d",
        fontSize: "4em",
        borderRadius: "50px",
        border: "2px solid black",
        padding: "5px",
        boxShadow: "3px 3px black"
      }}
    />
  }

  export default coins