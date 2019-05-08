const apiConfig = {
  apis: [
    {
      path: '/login',
      name: 'login',
      auth: 'not',
    },
    {
      path: '/articles',
      name: 'article',
      auth: 'required',
    },
    {
      path: '/auth',
      name: 'auth',
      auth: 'not',
    },
  ]
}

export default apiConfig
