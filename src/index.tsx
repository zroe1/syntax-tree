import React from "react";
import ReactDOM from "react-dom";
import KonvaCurve from "./components/test";
import SidebarContainer from "./sidebar/sidebarContainer";
import * as S from "./styled";
import "./index.css";

const App: React.FC = () => {
  return (
    <S.StyledDiv>
      <SidebarContainer />
      <KonvaCurve />
    </S.StyledDiv>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
