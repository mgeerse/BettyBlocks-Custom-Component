(() => ({
  name: 'Second List Component',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const value = 'Example';
    return <div className={classes.root}>{value}</div>;
  })(),
  styles: B => theme => {
    // eslint-disable-next-line no-unused-vars
    const style = new B.Styling(theme);
    return {
      root: {},
    };
  },
}))();
