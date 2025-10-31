import React, { useState } from "react";
import Circle from "./Circle";

const userList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

function ChatUserSelector(props) {
  const [userId, setUserId] = useState(1);
  const isUserOnline = useUserStatus(userId);

  return (
    <>
      <Circle color={isUserOnline ? "green" : "red"} />
      <select
        value={userId}
        onChange={(event) => setUserId(Number(event.target.value))}
      >
        {userList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default ChatUserSelector;
