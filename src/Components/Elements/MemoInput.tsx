import * as React from "react";
import styled from "styled-components";
import { DNF_MEMO_ID } from "../../Definition";

interface IProps {
  forceUpdate: () => void;
}

const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
`;

const Form = styled.form`
  width: 50%;
  height: 3rem;
`;

const MemoInput: React.FC<IProps> = ({ forceUpdate }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const input = inputRef.current;
    if (!input) {
      return;
    }
    const value = inputRef.current.value;
    const currentMemo = JSON.parse(localStorage.getItem(DNF_MEMO_ID) || "[]");
    currentMemo.push({ id: value, text: value });
    localStorage.setItem(DNF_MEMO_ID, JSON.stringify(currentMemo));
    inputRef.current.value = "";
    forceUpdate();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input ref={inputRef} placeholder="memo" />
    </Form>
  );
};

export default MemoInput;
