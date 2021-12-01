(() => ({
  name: 'Custom Text Component',
  type: 'BODY_COMPONENT',
  icon: 'TitleIcon',
  orientation: 'HORIZONTAL',
  allowedTypes: [],
  jsx: (() => {
    const { env, useText, Link } = B;
    const { externalPageTo, internalPageTo, linkType } = options;

    const hasLink = linkType !== 'noLink';
    const hasExternalLink = linkType === 'external';
    const isDev = env === 'dev';

    const Tag = {
      Title1: 'h1',
      Title2: 'h2',
      Title3: 'h3',
      Title4: 'h4',
      Title5: 'h5',
      Title6: 'h6',
      Body1: 'p',
      Body2: 'p',
    }[options.type || 'Title1'];

    function devEnv() {
      return (
        <div>
          <Tag className={classes.root}>
            {useText(options.content) === ''
              ? 'Empty content...'
              : useText(options.content)}
          </Tag>
        </div>
      );
    }

    function prodEnv() {
      return (
        <div>
          <Tag className={classes.root}>
            {useText(options.content)}
            <br />
            {hasLink && hasExternalLink ? (
              <a
                className={classes.root}
                href={externalPageTo}
                rel="noopener noreferrer"
                target="_blank"
              >
                Follow link
              </a>
            ) : (
              <Link
                className={classes.root}
                href={internalPageTo}
                endpoint={internalPageTo}
              >
                Follow link
              </Link>
            )}
          </Tag>
        </div>
      );
    }

    return isDev ? devEnv() : prodEnv();
  })(),
  styles: B => t => {
    const style = new B.Styling(t);

    const getPath = (path, data) =>
      path.reduce((acc, next) => {
        if (acc === undefined || acc[next] === undefined) {
          return undefined;
        }
        return acc[next];
      }, data);

    return {
      root: {
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        margin: 0,
        paddingTop: ({ options: { padding } }) =>
          style.getSpacing(padding[0], 'Desktop'),
        paddingRight: ({ options: { padding } }) =>
          style.getSpacing(padding[1], 'Desktop'),
        paddingBottom: ({ options: { padding } }) =>
          style.getSpacing(padding[2], 'Desktop'),
        paddingLeft: ({ options: { padding } }) =>
          style.getSpacing(padding[3], 'Desktop'),
        fontFamily: ({ options: { styles, fontType } }) =>
          styles
            ? style.getFontFamily(fontType)
            : getPath(['theme', 'typography', fontType, 'fontFamily'], style),
        fontSize: ({ options: { styles, fontType } }) =>
          styles ? style.getFontSize(fontType) : style.getFontSize('Title1'),
        fontStyle: ({ options: { fontItalic } }) =>
          fontItalic ? 'italic' : 'normal',
        textTransform: ({ options: { fontType } }) =>
          style.getTextTransform(fontType),
        letterSpacing: ({ options: { fontType } }) =>
          style.getLetterSpacing(fontType),
        fontWeight: ({ options: { styles, fontType, fontWeight } }) =>
          styles
            ? fontWeight
            : getPath(['theme', 'typography', fontType, 'fontWeight'], style),
        color: ({ options: { styles, fontType, fontColor } }) =>
          styles
            ? style.getColor(fontColor)
            : getPath(['theme', 'typography', fontType, 'color'], style),
        textAlign: ({ options: { align } }) => align,
      },
    };
  },
}))();
