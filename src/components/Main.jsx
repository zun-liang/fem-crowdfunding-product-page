/* eslint-disable react/prop-types */
import { useState } from "react";

import Completed from "./Completed";
import Introduction from "./Introduction";
import Modal from "./Modal";
import Selections from "./Selections";
import Summary from "./Summary";

const Main = ({
  screenWidth,
  modalDisplay,
  handleModalDisplay,
  completeDisplay,
  handleCompleteDisplay,
}) => {
  const [selectPledge, setSelectPledge] = useState({
    pledge: "",
  });
  const handleSelectPledge = (e) =>
    setSelectPledge({
      pledge: e.target.value,
    });

  const [moneyBacked, setMoneyBacked] = useState({
    noreward: "",
    bamboo: "",
    black: "",
    mahogany: "",
  });
  const handleMoneyBacked = (e) => {
    const { name, value } = e.target;
    setMoneyBacked((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [money, setMoney] = useState(89914);
  const handleMoney = () => {
    if (selectPledge.pledge === "noreward") {
      setMoney((prev) => prev + Number(moneyBacked.noreward));
    } else if (selectPledge.pledge === "bamboo") {
      setMoney((prev) => prev + Number(moneyBacked.bamboo));
    } else if (selectPledge.pledge === "black") {
      setMoney((prev) => prev + Number(moneyBacked.black));
    } else if (selectPledge.pledge === "mahogany") {
      setMoney((prev) => prev + Number(moneyBacked.mahogany));
    }
  };

  const [backer, setBacker] = useState(5007);
  const handleBacker = () => setBacker((prev) => prev + 1);

  const [numberLeft, setNumberLeft] = useState({
    noreward: 999,
    bamboo: 101,
    black: 64,
    mahogany: 0,
  });
  const handleNumberLeft = () => {
    if (selectPledge.pledge === "bamboo") {
      setNumberLeft((prev) => {
        return {
          ...prev,
          bamboo: numberLeft.bamboo - moneyBacked.bamboo / 25,
        };
      });
    } else if (selectPledge.pledge === "black") {
      setNumberLeft((prev) => {
        return {
          ...prev,
          black: numberLeft.black - moneyBacked.black / 75,
        };
      });
    } else if (selectPledge.pledge === "mahogany") {
      setNumberLeft((prev) => {
        return {
          ...prev,
          mahogany: numberLeft.mahogany - (moneyBacked.mahogany / 200) * 2,
        };
      });
    }
  };

  return (
    <main>
      <Introduction
        screenWidth={screenWidth}
        handleModalDisplay={handleModalDisplay}
      />
      <Summary backer={backer} money={money} />
      <Selections
        handleModalDisplay={handleModalDisplay}
        numberLeft={numberLeft}
      />
      {modalDisplay && (
        <Modal
          handleModalDisplay={handleModalDisplay}
          handleCompleteDisplay={handleCompleteDisplay}
          selectPledge={selectPledge}
          setSelectPledge={setSelectPledge}
          handleSelectPledge={handleSelectPledge}
          handleBacker={handleBacker}
          moneyBacked={moneyBacked}
          setMoneyBacked={setMoneyBacked}
          handleMoneyBacked={handleMoneyBacked}
          handleMoney={handleMoney}
          numberLeft={numberLeft}
          handleNumberLeft={handleNumberLeft}
        />
      )}
      {completeDisplay && (
        <Completed handleCompleteDisplay={handleCompleteDisplay} />
      )}
    </main>
  );
};

export default Main;
