(() => ({
  name: 'Login',
  icon: 'ContainerIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Login',
      options: [
        {
          type: 'VARIABLE',
          label: 'Jwt',
          key: 'jwt',
          value: [''],
        },
        {
          type: 'VARIABLE',
          label: 'Refresh',
          key: 'refresh',
          value: [''],
        },
        {
          value: '',
          label: 'Redirect endpoint',
          key: 'redirect',
          type: 'ENDPOINT',
        },
      ],
      descendants: [],
    },
  ],
}))();
