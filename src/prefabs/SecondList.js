(() => ({
  name: 'Second List Component',
  icon: 'IncludeIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Second List Component',
      options: [
        {
          type: 'NUMBER',
          label: 'Items to display (max 50)',
          key: 'displayNumber',
          value: 5,
        },
        {
          type: 'MODEL',
          label: 'Model',
          key: 'modelId',
          value: '',
        },
        {
          type: 'FILTER',
          label: 'Filter',
          key: 'filter',
          value: {},
          configuration: {
            dependsOn: 'modelId',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
