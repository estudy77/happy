// Page컴포넌트는 PageLayout컴포넌트를 랜더링
<Page user={user} avatarSize={avatarSize} />

// PageLayout컴포넌트는 NavigationBar컴포넌트를 랜더링
<PageLayout user={user} avatarSize={avatarSize} />

//NavigationBar컴포넌트는 Link컴포넌트를 렌더링
<NavigationBar user={user} avatarSize={avatarSize} />

// Link컴포넌트는 Avatar컴포넌트를 렌더링
<Link href={user.profileUrl}>
  <Avatar user={user} size={avatarSize} />
</Link>
