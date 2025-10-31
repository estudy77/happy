function TextInputWithFocusButton(props) {
  const inputRef = useRef(null);

  const handleClick = () => {
    //current 는 마운트된 input 엘리먼트를 가리킴
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
