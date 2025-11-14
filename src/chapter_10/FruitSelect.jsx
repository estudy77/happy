function FruitSelect(props) {
  const [value setValue] = React.useState("banana");

  const handleChange = (event) => {
    setValue(event.target.value);
  };  

  const handleSubmit = (event) => {
    alert("선택한 과일: " + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일 선택:
        <select value={value} onChange={handleChange}>    
          <option value="banana">바나나</option>
          <option value="apple">사과</option>
          <option value="orange">오렌지</option>  
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}   
export default FruitSelect;