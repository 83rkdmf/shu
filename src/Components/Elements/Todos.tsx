import * as React from "react";
import styled from "styled-components";
import ResetBtn from "./ResetBtn";
import Todo from "./Todo";

interface IProps {}
interface ITodoItem {
  id: string;
  text: string;
  checked: boolean;
}

// comp

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Todos: React.FC<IProps> = () => {
  const [todo, setTodo] = React.useState<Array<ITodoItem>>([
    {
      id: "1_sample1",
      text: "sample1",
      checked: false,
    },
    {
      id: "2_sample2",
      text: "sample2",
      checked: false,
    },
    {
      id: "3_sample3",
      text: "sample3",
      checked: false,
    },
  ]);

  const handleButtonClick = () => {
    const newTodo = todo.map((todo) => {
      return { ...todo, checked: false };
    });
    setTodo(newTodo);
  };

  const handleTodoClick = (event: any) => {
    const {
      target: { id: targetID },
    } = event;
    const newTodo = todo.map((todo) => {
      if (todo.id === targetID) {
        return { ...todo, checked: !todo.checked };
      }
      return { ...todo };
    });

    setTodo(newTodo);
  };

  return (
    <MainContainer>
      {todo.map((item) => {
        return (
          <Todo
            key={item.id}
            handleClick={handleTodoClick}
            id={item.id}
            text={item.text}
            checked={item.checked}
          />
        );
      })}
      <ResetBtn handleClick={handleButtonClick} />
    </MainContainer>
  );
};

export default Todos;
