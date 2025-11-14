function Page(props) {
  const user = props.user;

  const userLink = {
    <Link href={user.profileUrl}>
      <Avatar user={user} size={props.avatarSize} />
    </Link> 
  };

  // Page 컴포넌트는 PageLayout컴포넌트를 렌더링
  // 이때 pops로 userLink를 함께 전달
  return <PageLayout userLink={userLink} />;
}

// PageLayout 컴포넌트는 NavigationBar컴포넌트를 렌더링
<PageLayout userLink={props.userLink} />

// NavigationBar 컴포넌트는 props로 전달받은 userLink element를 리턴
<NavigationBar userLink={props.userLink} />