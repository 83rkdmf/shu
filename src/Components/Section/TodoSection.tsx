import * as React from "react";
import styled from "styled-components";
import Todos from "../Elements/Todos";

interface IProps {}

// comp

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 30vw;
  border-right: 1px solid white;
`;

const TitleContainer = styled.div``;

const Title = styled.span`
  color: white;
`;

const TodoSection: React.FC<IProps> = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Todo</Title>
      </TitleContainer>
      <Todos />
    </MainContainer>
  );
};

export default TodoSection;
