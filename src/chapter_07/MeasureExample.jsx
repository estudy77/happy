import React from "react";

function MeasureExample(props) {
  const [width, setWidth] = React.useState(0);

  const measuredRef = React.useCallback((node) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div>
      <h1 ref={measuredRef}>안녕하세요!</h1>
      <p>위 헤더의 너비는 {Math.round(width)} 픽셀입니다.</p>
    </div>
  );
}

export default MeasureExample;
