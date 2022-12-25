import * as React from "react";
import styled from "styled-components";

interface IProps {
  handleClick: () => void;
}

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 2rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  color: white;
  margin-top: 5rem;
`;

const ResetBtn: React.FC<IProps> = ({ handleClick }) => {
  return <Button onClick={handleClick}>눌러라</Button>;
};

export default ResetBtn;
