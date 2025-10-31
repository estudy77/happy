import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="리액트 입문" numOfPage={300} />
      <Book name="자바스크립트 완전 정복" numOfPage={500} />
      <Book name="웹 개발의 기초" numOfPage={250} />
    </div>
  );
}

export default Library;
