/* eslint-disable react/prop-types */
import styled from "styled-components";

import IconCheck from "../assets/images/icon-check.svg";
import { Button, Container, SmallText, SubTitle, ViewportContainer } from "../assets/styles/elementStyles";

const CompletedContainer = styled(Container)`
  max-width: 500px;
  padding: 2rem 1.5rem;
  text-align: center;
  position: fixed;
  top: 8.5rem;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 600px) {
    top: 15rem;
  }
`;
const CompletedTitle = styled(SubTitle)`
  align-self: center;
`;
const StyledButton = styled(Button)`
  margin: 0.8rem 0;
  width: 6rem;
`;

const Completed = ({ handleCompleteDisplay }) => {
  return (
    <ViewportContainer>
      <CompletedContainer>
        <img src={IconCheck} alt="icon check" />
        <CompletedTitle>Thanks for your support!</CompletedTitle>
        <SmallText>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </SmallText>
        <StyledButton onClick={handleCompleteDisplay}>Got it!</StyledButton>
      </CompletedContainer>
    </ViewportContainer>
  );
};

export default Completed;
