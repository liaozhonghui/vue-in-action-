export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: [
          { name: 'liao' },
          { name: 'luo' },
        ],
      };
    },
  },
  {
    url: '/org/tree',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: []
      };
    }
  }
];
