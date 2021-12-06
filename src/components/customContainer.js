(() => ({
  name: 'Custom Container',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, Children } = B;
    const { color } = options;
    const isDev = env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && isDev;

    // eslint-disable-next-line no-unused-vars
    const [backgroundColorState, setBackgroungColorState] = useState(color);

    const handleOnclick = (event, value) => {
      options.color = value;
      // Using this state to make the component re-render.
      setBackgroungColorState(value);
    };

    return (
      <div className={[classes.root, isPristine && classes.pristine].join(' ')}>
        {isEmpty && 'Empty container, no children.'}
        <Children count={children.length} handleOnclick={handleOnclick}>
          {children}
        </Children>
      </div>
    );
  })(),
  styles: B => theme => {
    // eslint-disable-next-line no-unused-vars
    const style = new B.Styling(theme);
    return {
      root: {
        width: ({ options: { width } }) => width,
        height: ({ options: { height } }) => height,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        boxSizing: 'center',
        alignItems: 'center',
        backgroundColor: ({ options: { color } }) => style.getColor(color),
      },
      pristine: {
        backgroundColor: '#F0F1F5',
        borderColor: '#AFB5C8',
        borderWidth: '0.0625rem',
        justifyContent: 'center',
        borderStyle: 'dashed',
        minHeight: ({ options: { height } }) => (height ? 0 : '4rem'),
        height: '100%',
        fontSize: '0.75rem',
        color: '#262A3A',
        textTransform: 'uppercase',
      },
    };
  },
}))();
