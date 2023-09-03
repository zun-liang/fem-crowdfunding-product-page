/* eslint-disable react/prop-types */
import styled from "styled-components";

import { SmallContainer } from "../../assets/styles/elementStyles";

const ModalOptionContainer = styled(SmallContainer)`
  opacity: ${({ numberLeft }) => (numberLeft > 0 ? 1 : 0.5)};
  border: ${({ selectPledge }) =>
    selectPledge
      ? "2px solid var(--moderate-cyan)"
      : "1px solid var(--light-gray)"};
`;

const ModalOption = ({ modals, numberLeft, selectPledge }) => {
  return (
    <>
      {modals.map((modal) => (
        <ModalOptionContainer
          key={modal.id}
          numberLeft={numberLeft[modal.id]}
          selectPledge={selectPledge === modal.id}
        >
          {modal.content}
        </ModalOptionContainer>
      ))}
    </>
  );
};

export default ModalOption;
