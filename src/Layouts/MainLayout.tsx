import * as React from "react";
import styled from "styled-components";
import Blona from "../assets/Blona.png";

interface IProps {
  children: React.ReactNode;
}

// comp

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-image: url(${Blona});
  background-size: cover;
  background-repeat: no-repeat;
`;

const MainLayout: React.FC<IProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainLayout;
