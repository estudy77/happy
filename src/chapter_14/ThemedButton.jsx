import React from "react";

// 컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해줍니다.
// 여기에서는 현재 테마를 위한 컨텍스트를 생성하며, 기본값은 'light'입니다.
const ThemeContext = React.createContext("light");

// Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달합니다.
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 같이 있는지에 관계없이 데이터를 읽을 수 있습니다.
// 여기에서는 현재 테마값으로 'dark'를 전달합니다.
function App(props) {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 이제 중간에
function Toolbar(props) {
  return <ThemedButton />;
}

function ThemedButton(props) {
  // 리엑트는 가장 가까운 상위 테마 Provider를 찾아 그 값을 사용합니다.
  // 만약 해당되는 Provider가 없으면 기본값인 'light'를 사용합니다.
  // 여기에서는 상위 Provider가 있기 때문에 테마의 값은 'dark'가 됩니다.
  return (
    <ThemeContext.Consumer>
      {(value) => <button className={value}>버튼</button>}
    </ThemeContext.Consumer>
  );
}
