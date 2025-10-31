import React, { useState, useEffect } from "react";

function UserStatusWithCount(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `총  ${count}번 클릭했습니다.`;
  });

  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  if (isOnline === null) {
    return "대기 중...";
  }

  return isOnline ? "온라인" : "오프라인";
}

export default UserStatus;

// 결과 안나옴
