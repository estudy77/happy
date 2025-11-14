function LoginButton(props) {
	return (
		<button onClick = {props.onClick}
			로그인
		</button>
	);
}


function LogoutButton(props) {
	return (
		<button onClick = {props.onClick}
			로그아웃
		</button>
	);
}

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    button = <LoginButton onClick={handleLogin} />;
  }


  return (
    <div>
       <Greeting isLoggedIn={isLoggedIn} />)}
       {button} 
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <h1>
      {isLoggedIn ? "환영합니다!" : "로그인 해주세요."}
    </h1>
  );
} 

export default LoginControl;