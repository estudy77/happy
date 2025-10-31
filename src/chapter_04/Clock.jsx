import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>이책의 이름은 </h1>
      <h1>이 책은 총 {new Date().toLocaleTimeString}입니다.</h1>
    </div>
  );
}

export default Clock;
