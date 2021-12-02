(() => ({
  name: 'Slider',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, getCustomModelAttribute } = B;
    const { Slider } = window.MaterialUI.Core;
    const isDev = env === 'dev';

    const {
      sliderStandard,
      sliderMax,
      sliderMin,
      sliderDisabled,
      sliderStepping,
      sliderSteppingValue,
      sliderMarks,
      sliderCustomModelAttribute: sliderCustomModelAttributeObj,
    } = options;

    const [sliderValue, setSliderValue] = useState(sliderStandard);

    const handleSliderChange = (event, newValue) => {
      setSliderValue(newValue);
    };

    const {
      id: sliderCustomModelAttributeObjId,
    } = sliderCustomModelAttributeObj;
    const sliderCustomModelAttribute = getCustomModelAttribute(
      sliderCustomModelAttributeObjId,
    );
    const { name: sliderCustomModelAttributeName } =
      sliderCustomModelAttribute || {};

    const customSlider = () => (
      <Slider
        className={classes.slider}
        disabled={sliderDisabled || isDev}
        value={sliderValue}
        // eslint-disable-next-line radix
        min={parseInt(sliderMin) || 0}
        // eslint-disable-next-line radix
        max={parseInt(sliderMax) || 1}
        marks={sliderMarks}
        name={!isDev && sliderCustomModelAttributeName}
        step={(sliderStepping && sliderSteppingValue) || 1}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        data-component={!isDev && sliderValue}
      />
    );

    return <div>{customSlider()}</div>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      slider: {
        color: ({ options: { sliderColor } }) => [
          style.getColor(sliderColor),
          '!important',
        ],
      },
    };
  },
}))();
