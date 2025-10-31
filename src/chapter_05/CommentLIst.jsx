import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "리액트 입문",
    comment: "컴포넌트만들기",
  },
  {
    name: "리액트 입문2",
    comment: "컴포넌트만들기2",
  },
  {
    name: "리액트 입문3",
    comment: "컴포넌트만들기3",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.name}
            name={comment.name}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
