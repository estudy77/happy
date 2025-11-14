import React from "react";

const students = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "김철수" },
  { id: 3, name: "이영희" },
];

function AttendanceBook() {
  return (
    <div>
      <h3>출석부</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default AttendanceBook;
