(() => ({
  name: 'Slider',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env } = B;
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
    } = options;

    const [sliderValue, setSliderValue] = useState(sliderStandard);

    const handleSliderChange = (event, newValue) => {
      setSliderValue(newValue);
    };

    const customSlider = () => (
      <Slider
        className={classes.slider}
        disabled={sliderDisabled || isDev}
        value={sliderValue}
        min={sliderMin}
        max={sliderMax}
        marks={sliderMarks}
        step={sliderStepping ? sliderSteppingValue : undefined}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
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
