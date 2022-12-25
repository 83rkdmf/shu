import * as React from "react";
import styled from "styled-components";
import Memos from "../Elements/Memos";
import Ecliar from "../../assets/Eclair.png";
import MemoInput from "../Elements/MemoInput";

interface IProps {
  children: React.ReactNode;
}

// comp

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70vw;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Title = styled.span`
  color: white;
`;

const MemoSection: React.FC<IProps> = ({ children }) => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Memo</Title>
      </TitleContainer>
      <Memos />
    </MainContainer>
  );
};

export default MemoSection;
