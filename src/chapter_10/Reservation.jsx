import React from "react";

function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = React.useState(true);
  const [numberOfGuests, setNumberOfGuests] = React.useState(2);

  const handleSubmit = (event) => {
    alert("조식 포함: " + haveBreakfast + "\n인원 수: " + numberOfGuests);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식 포함:
        <input
          type="checkbox"
          checked={haveBreakfast}
          onChange={(e) => setHaveBreakfast(e.target.checked)}
        />
      </label>
      <label>
        인원 수:
        <input
          type="number"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </label>
      <button type="submit">예약하기</button>
    </form>
  );
}
export default Reservation;
