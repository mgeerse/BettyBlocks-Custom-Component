(() => ({
  name: 'Custom Single Betty Record',
  icon: 'AutoCompleteIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Custom Single Betty Record',
      options: [
        {
          type: 'FILTER',
          label: 'filter',
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
          type: 'PROPERTY',
          label: 'Property',
          key: 'property',
          value: '',
          configuration: {
            dependsOn: 'model',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
