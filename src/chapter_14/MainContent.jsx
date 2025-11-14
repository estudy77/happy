import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "#000" : "#fff",
        padding: "1.5rem",
        width: "100vw",
        height: "100vh",
      }}
    >
      <p>테마 변경이 가능한 웹사이트 입니다.</p>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;
