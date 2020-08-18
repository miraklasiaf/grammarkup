const sidebar = {
  routes: [
    {
      title: 'Learn Grammar',
      heading: true,
      routes: [
        {
          title: 'Getting Started',
          path: '/grammar/getting-started'
        },
        {
          title: 'Present Tenses',
          path: '/grammar/present-tenses',
          open: true,
          routes: [
            {
              title: 'To Be',
              path: '/grammar/present-tenses/to-be'
            },
            {
              title: 'Present Simple',
              path: '/grammar/present-tenses/present-simple'
            },
            {
              title: 'Present Continuous',
              path: '/grammar/present-tenses/present-continuous'
            },
            {
              title: 'Present Simple vs Continuous',
              path: '/grammar/present-tenses/simple-vs-continuous'
            },
            {
              title: 'Have Got',
              path: '/grammar/present-tenses/have-got'
            }
          ]
        }
      ]
    }
  ]
}

export default sidebar
