(() => ({
  name: 'Custom Container',
  icon: 'DataContainer',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Custom Container',
      options: [
        {
          type: 'SIZE',
          label: 'Width',
          key: 'width',
          value: '100%',
          configuration: {
            as: 'UNIT',
          },
        },
        {
          type: 'SIZE',
          label: 'Height',
          key: 'height',
          value: '25%',
          configuration: {
            as: 'UNIT',
          },
        },
        {
          type: 'COLOR',
          label: 'Color',
          key: 'color',
          value: 'Transparent',
        },
      ],
      descendants: [],
    },
  ],
}))();
