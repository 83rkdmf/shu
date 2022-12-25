import * as React from "react";
import styled from "styled-components";
import { DNF_MEMO_ID } from "../../Definition";

interface IMemo {
  id: string;
  text: string;
}

interface IProps {
  item: IMemo;
  forceUpdate: () => void;
}

// comp

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem;
  border: 1px solid white;
  border-radius: 1rem;
  width: 30%;
  height: 2rem;
  border: 1px solid white;
  color: white;
`;

const DeleteButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
`;

const Memo: React.FC<IProps> = ({ item, forceUpdate }) => {
  const handleDelete = (event: any) => {
    const {
      target: { id: targetID },
    } = event;
    const currentMemo = JSON.parse(localStorage.getItem(DNF_MEMO_ID) || "[]");
    const newMemo = currentMemo.filter((memo: IMemo) => memo.id !== targetID);
    localStorage.setItem(DNF_MEMO_ID, JSON.stringify(newMemo));
    forceUpdate();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
      }}
    >
      <MainContainer>{item.text}</MainContainer>
      <DeleteButton id={item.id} onClick={handleDelete}>
        x
      </DeleteButton>
    </div>
  );
};

export default Memo;
