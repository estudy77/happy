function SignDialog(props) {
  const [nickname, setNickname] = React.useState("");

  const handleChange = (e) => {
    setNickname(e.target.value);
  };
  const handleSignUp = () => {
    alert(`어서오세요, ${nickname}님!`);
  };
  return (
    <Dialog title="가입을 환영합니다!" message="닉네임을 입력해주세요.">
      <input value={nickname} onChange={handleChange} />
      <button onClick={handleSignUp}>가입하기</button>
    </Dialog>
  );
}
export default SignDialog;
