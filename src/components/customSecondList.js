(() => ({
  name: 'Second List Component',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, GetAll, Children, ModelProvider } = B;
    const { List, ListItem } = window.MaterialUI.Core;
    const { modelId, filter, displayNumber } = options;
    const isEmpty = children.length === 0;
    const isDev = env === 'dev';

    if (isDev) {
      if (!modelId) {
        return (
          <div className={classes.root}>
            No model selected - component won&apos;t be rendered.
          </div>
        );
      }
      if (isEmpty) {
        return (
          <List className={classes.root}>
            Start dragging components into me to show data.
          </List>
        );
      }
      return (
        <List className={classes.root}>
          <ListItem>{children}</ListItem>
        </List>
      );
    }

    return (
      <div>
        <GetAll modelId={modelId} filter={filter} take={displayNumber}>
          {({ loading, error, data }) => {
            if (loading) {
              return <span>Loading...</span>;
            }
            if (error) {
              return <span>Error! {error.message}</span>;
            }

            const { results } = data;

            return (
              <List className={classes.root}>
                {results.map(result => (
                  <ModelProvider value={result} id={modelId}>
                    <ListItem>
                      <Children>{children}</Children>
                    </ListItem>
                  </ModelProvider>
                ))}
              </List>
            );
          }}
        </GetAll>
      </div>
    );
  })(),
  styles: B => theme => {
    // eslint-disable-next-line no-unused-vars
    const style = new B.Styling(theme);
    return {
      root: {
        backgroundColor: '#F0F1F5',
        borderColor: '#AFB5C8',
        borderWidth: '0.0625rem',
        justifyContent: 'center',
        borderStyle: 'dashed',
        height: '100px',
        fontSize: '1rem',
        color: '#262A3A',
        textTransform: 'uppercase',
        textAlign: 'center',
        boxSizing: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        listStylePosition: 'inside',
      },
    };
  },
}))();
