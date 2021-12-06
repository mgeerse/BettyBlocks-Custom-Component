(() => ({
  name: 'Custom Child',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    // const { env, useText } = B;
    // const isDev = env === 'dev';
    const { handleOnclick } = parent;
    function handleOnClickComponent(event) {
      handleOnclick(event, options.color);
    }

    const content = `Parent children count ${parent.count} \n Click me!`;

    return (
      <div
        className={[classes.root]}
        role="none"
        onClick={handleOnClickComponent}
      >
        {content}
      </div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        boxSizing: 'center',
        alignItems: 'center',
        minHeight: ({ options: { height } }) => (height ? 0 : '1rem'),
        backgroundColor: ({ options: { color } }) => style.getColor(color),
      },
    };
  },
}))();
