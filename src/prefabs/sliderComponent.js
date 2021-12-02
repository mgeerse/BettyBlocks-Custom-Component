(() => ({
  name: 'Slider',
  icon: 'NumberInputIcon',
  category: 'BODY',
  structure: [
    {
      name: 'Slider',
      options: [
        {
          type: 'COLOR',
          label: 'Color',
          key: 'sliderColor',
          value: 'Secondary',
        },
        {
          type: 'NUMBER',
          label: 'Minimum value',
          key: 'sliderMin',
          value: '0',
        },
        {
          type: 'NUMBER',
          label: 'Default value',
          key: 'sliderStandard',
          value: 50,
        },
        {
          type: 'NUMBER',
          label: 'Maximum value',
          key: 'sliderMax',
          value: 100,
        },
        {
          type: 'TOGGLE',
          label: 'Disable slider',
          key: 'sliderDisabled',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Show marks on slider',
          key: 'sliderMarks',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Enable stepping',
          key: 'sliderStepping',
          value: false,
        },
        {
          type: 'NUMBER',
          label: 'Step every...',
          key: 'sliderSteppingValue',
          value: 5,
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'sliderStepping',
              comparator: 'EQ',
              value: true,
            },
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
