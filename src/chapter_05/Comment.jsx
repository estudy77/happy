import React from "react";

const style = {
  nameText: { fontSize: "24px", fontWeight: "bold", color: "blue" },
};

function Comment(props) {
  return (
    <div>
      <h1 style={style.nameText}>
        {props.name} {props.comment}책에 대한 코멘트입니다.
      </h1>
    </div>
  );
}

export default Comment;
