function Button(props) {
  const className = props.color === "green" ? "bg-green" : "bg-red"; // 예시
  return (
    <button className={className}>
      <b>{props.children}</b>
    </button>
  );
}

function ConfirmDialog(props) {
  return (
    <div>
      <p>정말로 삭제하시겠습니까?</p>
      <Button color="green">삭제</Button>
    </div>
  );
}

export default ConfirmDialog;
