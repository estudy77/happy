import React, { useState, useEffect, useCallback } from "react";

function NumericDataSharing() {
  // 숫자 상태를 useState로 관리
  const [number, setNumber] = useState(0);

  // 숫자를 1씩 증가시키는 함수를 useCallback으로 메모이제이션
  const increment = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, []);

  // number 상태가 바뀔 때마다 동작하는 useEffect
  useEffect(() => {
    console.log("number가 변경되었습니다:", number);
  }, [number]);

  return (
    <div>
      <p>현재 숫자: {number}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}

export default NumericDataSharing;
