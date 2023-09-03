/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

import {
  Container,
  Price,
  SmallText,
  SubTitle,
} from "../assets/styles/elementStyles";
import Option from "./children-components/Option";
import {
  BambooStandInfo,
  BlackStandInfo,
  MahoganyStandInfo,
  ProjectIntro,
  ProjectIntro2,
} from "./children-components/SmallComponents";

const SelectContainer = styled(Container)`
  margin: 0 auto 3rem;
  padding: 2rem 1.3rem 2.5rem;
  @media (min-width: 600px) {
    padding: 2rem 2rem 3rem;
  }
`;
const Item = styled.h5`
  color: black;
  font-size: 1rem;
`;
const Number = styled.p`
  font-size: 1.9rem;
  color: black;
  font-weight: 800;
`;
const LeftSign = styled(SmallText)`
  position: relative;
  left: 0.5rem;
  bottom: 0.3rem;
`;
const SelectRadio = styled.input`
  display: none;
`;
const SelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
  width: 9rem;
  height: 2.6rem;
  border-radius: 30px;
  border: none;
  background-color: var(--moderate-cyan);
  color: white;
  font-family: "Commissioner", sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  &:hover {
    background-color: var(--dark-cyan);
    cursor: pointer;
  }
`;
const DisabledButton = styled.button`
  height: 2.6rem;
  border-radius: 30px;
  border: none;
  color: white;
  background-color: var(--dark-gray);
  font-family: "Commissioner", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
  width: 9rem;
`;

const Selections = ({ handleModalDisplay, numberLeft }) => {
  const [selectReward, setSelectReward] = useState({
    reward: "",
  });
  const handleSelectReward = (e) =>
    setSelectReward({
      reward: e.target.value,
    });

  const handleSelectButton = () => {
    handleModalDisplay();
  };
  const options = [
    {
      id: "bamboo",
      content: (
        <>
          <Item>Bamboo Stand</Item>
          <Price>Pledge $25 or more</Price>
          <BambooStandInfo />
          <Number>
            {numberLeft.bamboo}
            <LeftSign as="span">left</LeftSign>
          </Number>
          {numberLeft.bamboo > 0 ? (
            <>
              <SelectRadio
                type="radio"
                id="bamboo-stand"
                name="reward"
                value="bamboo-stand"
                checked={selectReward.reward === "bamboo-stand"}
                onChange={handleSelectReward}
              />
              <SelectLabel htmlFor="bamboo-stand" onClick={handleSelectButton}>
                Select Reward
              </SelectLabel>
            </>
          ) : (
            <DisabledButton>Out of Stock</DisabledButton>
          )}
        </>
      ),
    },
    {
      id: "black",
      content: (
        <>
          <Item>Black Edition Stand</Item>
          <Price>Pledge $75 or more</Price>
          <BlackStandInfo />
          <Number>
            {numberLeft.black}
            <LeftSign as="span">left</LeftSign>
          </Number>
          {numberLeft.black > 0 ? (
            <>
              <SelectRadio
                type="radio"
                id="black-stand"
                name="reward"
                value="black-stand"
                checked={selectReward.reward === "black-stand"}
                onChange={handleSelectReward}
              />
              <SelectLabel htmlFor="black-stand" onClick={handleSelectButton}>
                Select Reward
              </SelectLabel>
            </>
          ) : (
            <DisabledButton>Out of Stock</DisabledButton>
          )}
        </>
      ),
    },
    {
      id: "mahogany",
      content: (
        <>
          <Item>Mahogany Special Edition</Item>
          <Price>Pledge $200 or more</Price>
          <MahoganyStandInfo />
          <Number>
            {numberLeft.mahogany}
            <LeftSign as="span">left</LeftSign>
          </Number>
          {numberLeft.mahogany > 0 ? (
            <>
              <SelectRadio
                type="radio"
                id="mahogany-stand"
                name="reward"
                value="mahogany-stand"
                checked={selectReward.reward === "mahogany-stand"}
                onChange={handleSelectReward}
              />
              <SelectLabel
                htmlFor="mahogany-stand"
                onClick={handleSelectButton}
              >
                Select Reward
              </SelectLabel>
            </>
          ) : (
            <DisabledButton>Out of Stock</DisabledButton>
          )}
        </>
      ),
    },
  ];
  return (
    <SelectContainer id="about">
      <SubTitle>About this project</SubTitle>
      <ProjectIntro />
      <ProjectIntro2 />
      <Option options={options} numberLeft={numberLeft} />
    </SelectContainer>
  );
};

export default Selections;
