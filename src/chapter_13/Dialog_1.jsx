function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
}

function WelcomeDialog(props) {
  return (
    <Dialog
      title="환영합니다."
      message="우리 사이트를 방문해 주셔서 감사합니다."
    />
  );
}
