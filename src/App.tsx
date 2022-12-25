import React from "react";
import MemoSection from "./Components/Section/MemoSection";
import TodoSection from "./Components/Section/TodoSection";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <TodoSection>Todo</TodoSection>
      <MemoSection>memo</MemoSection>
    </MainLayout>
  );
}

export default App;
