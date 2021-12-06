(() => ({
  name: 'Custom List',
  icon: 'ButtonGroupIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Custom List',
      options: [
        {
          type: 'FILTER',
          label: 'Filter',
          key: 'filter',
          value: {},
          configuration: {
            dependsOn: 'model',
          },
        },
        {
          type: 'MODEL',
          label: 'Model',
          key: 'model',
          value: '',
        },
        {
          type: 'CUSTOM',
          label: 'List type',
          key: 'listType',
          value: 'numbered',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Numbered',
                value: 'numbered',
              },
              {
                name: 'Unordered',
                value: 'unordered',
              },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
