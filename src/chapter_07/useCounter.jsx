// import React, { useState } from "react";

//커스텀 훅: 상태와 함수 반환
/*function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => Math.max(count - 1, 0));

  return { count, increment, decrement };
}

// 이 컴포넌트에서 훅 호출 후 UI 렌더링
function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterComponent;*/
import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return { count, increaseCount, decreaseCount };
}
export default useCounter;
