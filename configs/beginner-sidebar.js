const sidebar = {
  routes: [
    {
      title: 'Beginner Grammar',
      heading: true,
      routes: [
        {
          title: 'Nouns',
          path: '/beginner/nouns',
          open: true,
          routes: [
            {
              title: 'Common Nouns',
              path: '/beginner/nouns/common-nouns'
            },
            {
              title: 'Proper Nouns',
              path: '/beginner/nouns/proper-nouns'
            }
          ]
        },
        {
          title: 'Pronouns',
          path: '/beginner/pronouns',
          open: true,
          routes: [
            {
              title: 'Subject Pronouns',
              path: '/beginner/pronouns/subject-nouns'
            },
            {
              title: 'Object Pronouns',
              path: '/beginner/pronouns/object-pronouns'
            }
          ]
        },
        {
          title: 'Articles',
          path: '/beginner/present-tenses',
          open: true,
          routes: [
            {
              title: 'A - An - The',
              path: '/beginner/present-tenses/to-be'
            }
          ]
        },
        {
          title: 'Demonstratives',
          path: '/beginner/demonstratives',
          open: true,
          routes: [
            {
              title: 'This - That - These - Those ',
              path: '/beginner/demonstratives/this-that-these-those'
            }
          ]
        },
        {
          title: 'Distributives',
          path: '/beginner/distributives',
          open: true,
          routes: [
            {
              title: 'All - Half',
              path: '/beginner/distributives/all-half'
            },
            {
              title: 'Each - Every',
              path: '/beginner/distributives/each-every'
            }
          ]
        }
      ]
    }
  ]
}

export default sidebar
