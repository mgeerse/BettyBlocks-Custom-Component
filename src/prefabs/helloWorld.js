(() => ({
  name: 'HelloWorld',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'HelloWorld',
      options: [
        {
          type: 'CUSTOM',
          label: 'link',
          key: 'linkType',
          value: 'none',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'External',
                value: 'external',
              },
              {
                name: 'Internal',
                value: 'internal',
              },
              {
                name: 'None',
                value: 'noLink',
              },
            ],
          },
        },
        {
          type: 'ENDPOINT',
          label: 'Page',
          key: 'internalPageTo',
          value: '',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'internal',
            },
          },
        },
        {
          type: 'TEXT',
          label: 'External Page URL',
          key: 'externalPageTo',
          value: '',
          configuration: {
            placeholder: 'Starts with https:// or http://',
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'external',
            },
          },
        },
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: [],
          configuration: {
            as: 'MULTILINE',
          },
        },
        {
          type: 'CUSTOM',
          label: 'Align',
          key: 'align',
          value: 'center',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'left' },
              { name: 'Center', value: 'center' },
              { name: 'Right', value: 'right' },
            ],
          },
        },
        {
          type: 'SIZES',
          label: 'Padding',
          key: 'padding',
          value: ['S', 'S', 'S', 'S'],
        },
        {
          type: 'TOGGLE',
          label: 'Styles',
          key: 'styles',
          value: false,
        },
        {
          type: 'FONT',
          label: 'Type',
          key: 'fontType',
          value: 'Title1',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'styles',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'COLOR',
          label: 'Color',
          key: 'fontColor',
          value: 'Black',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'styles',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'Font weight',
          key: 'fontWeight',
          value: '400',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: '100', value: '100' },
              { name: '200', value: '200' },
              { name: '300', value: '300' },
              { name: '400', value: '400' },
              { name: '500', value: '500' },
              { name: '600', value: '600' },
              { name: '700', value: '700' },
              { name: '800', value: '800' },
              { name: '900', value: '900' },
            ],
            condition: {
              type: 'SHOW',
              option: 'styles',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'TOGGLE',
          label: 'Italic',
          key: 'fontItalic',
          value: false,
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'styles',
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
