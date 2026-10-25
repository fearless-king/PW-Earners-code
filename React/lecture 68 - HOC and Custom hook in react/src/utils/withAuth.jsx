function withAuth(Component) {
  return function (props) {
    let isLoggedIn = true;
    if (isLoggedIn) {
      return <Component {...props} />;
    }
    return <p>Please login</p>;
  };
}

export default withAuth;