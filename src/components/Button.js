(() => ({
  name: 'Button',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env } = B;
    const { Button } = window.MaterialUI.Core;
    const { label } = options;
    const isDev = env === 'dev';

    const [buttonText, setButtonText] = useState(label);

    B.defineFunction('steal text', e => {
      setButtonText(e === '' ? options.label : e);
    });

    return (
      <Button disabled={isDev} className={classes.root}>
        {buttonText}
      </Button>
    );
  })(),
  styles: B => theme => {
    // eslint-disable-next-line no-unused-vars
    const style = new B.Styling(theme);
    return {
      root: {
        boxSizing: 'border-box',
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
  },
}))();
