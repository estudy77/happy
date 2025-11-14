function Page() {
  const user = props.user;

  const topBar = (
    <NavigationBar>
      <Link href={user.profileUrl}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  const content = <Feed user={user} />;

  // 하위 컴포넌트를 여러 개의 변수로 나눠서 전달
  return <PageLayout topBar={topBar} content={content} />;
}
