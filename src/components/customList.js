(() => ({
  name: 'Custom List',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, GetAll, Property } = B;
    const { listType, model, filter, property: selectedProperty } = options;
    const Tag = listType === 'ordered' ? 'ol' : 'ul';
    const isDev = env === 'dev';

    return (
      <div>
        <GetAll modelId={model} filter={filter} skip={0} take={15}>
          {({ loading, error, data }) => {
            if (error) {
              return <span>Error: {error.message}</span>;
            }
            if (loading) {
              return <span>Loading....</span>;
            }

            const { results } = data;

            if (isDev) {
              return (
                <div className={classes.root}>
                  Here komes a lijst!
                  <Tag className={classes.list}>
                    <li>
                      <Property id={selectedProperty} />
                    </li>
                  </Tag>
                </div>
              );
            }
            const { name: propertyName } = B.getProperty(selectedProperty);
            return (
              <Tag className={[classes.root, classes.list].join(' ')}>
                {results.map(result => (
                  <li key={result.id}>{result[propertyName]}</li>
                ))}
              </Tag>
            );
          }}
        </GetAll>
      </div>
    );
  })(),
  styles: B => theme => {
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
        listStylePosition: 'inside',
      },
      list: {},
    };
  },
}))();
