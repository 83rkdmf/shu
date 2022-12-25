import * as React from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  text: string;
  checked: boolean;
  handleClick: (event: any) => void;
}

// comp

const MainContainer = styled.div<{ isChecked: boolean }>`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  width: 90%;
  text-decoration-line: ${(props) =>
    props.isChecked ? "line-through" : "none"};
  color: white;
`;

const CheckBox = styled.input``;
const TextContainer = styled.div``;
const TextContent = styled.span``;

const Todo: React.FC<IProps> = ({ id, text, checked, handleClick }) => {
  return (
    <MainContainer id={id} isChecked={checked} onClick={handleClick}>
      <CheckBox type="checkbox" checked={checked} />
      <TextContainer>
        <TextContent>{text}</TextContent>
      </TextContainer>
    </MainContainer>
  );
};

export default Todo;
