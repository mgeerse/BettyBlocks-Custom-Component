(() => ({
  name: 'Custom List',
  icon: 'ButtonGroupIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Custom List',
      options: [
        {
          type: 'PROPERTY',
          label: 'Property',
          key: 'property',
          value: '',
          configuration: {
            dependsOn: 'model',
          },
        },
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
                name: 'Ordered',
                value: 'ordered',
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
