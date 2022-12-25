import * as React from "react";
import styled from "styled-components";
import { DNF_MEMO_ID } from "../../Definition";
import Memo from "./Memo";
import MemoInput from "./MemoInput";

interface IProps {}

// comp

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 70vw;
`;

const Memos: React.FC<IProps> = ({}) => {
  const [dummy, setDummy] = React.useState<boolean>(false);
  const forceUpdate = () => {
    setDummy(!dummy);
  };
  const memoItem = JSON.parse(localStorage.getItem(DNF_MEMO_ID) || "[]");
  return (
    <MainContainer>
      {memoItem.map((item: any) => (
        <Memo forceUpdate={forceUpdate} item={item}></Memo>
      ))}
      <MemoInput forceUpdate={forceUpdate} />
    </MainContainer>
  );
};

export default Memos;
