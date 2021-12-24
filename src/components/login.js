(() => ({
  name: 'Login',
  type: 'CONTENT_COMPONENT',
  icon: 'ContainerIcon',
  orientation: 'HORIZONTAL',
  allowedTypes: [],
  jsx: (() => {
    const { redirect, jwt, refresh } = options;
    const { env, useText, useEndpoint } = B;
    const isDev = env !== 'prod';

    const hasRedirect = redirect && redirect.id !== '';
    const redirectTo = !isDev && hasRedirect && useEndpoint(redirect);

    const refeshToken =
      useText(refresh) !== '' || useText(refresh) !== undefined
        ? useText(refresh)
        : '';
    const jwtToken =
      useText(jwt) !== '' || useText(jwt) !== undefined ? useText(jwt) : '';

    if (!isDev && hasRedirect && jwtToken !== '') {
      localStorage.setItem('TOKEN', jwtToken);
      localStorage.setItem('REFRESH_TOKEN', refeshToken);
      const history = useHistory();
      history.push(redirectTo);
    }

    return <p>Login</p>;
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      root: {},
    };
  },
}))();
