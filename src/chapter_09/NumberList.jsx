import React from "react";
import Number from "./Number";

function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <Number key={number.toString()} number={number} />
  ));
  return <ul>{listItems}</ul>;
}

export default NumberList;
