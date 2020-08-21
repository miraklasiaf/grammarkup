const sidebar = {
  routes: [
    {
      title: 'Beginner',
      heading: true,
      routes: [
        {
          title: 'Nouns',
          path: '/grammar/nouns',
          open: true,
          routes: [
            {
              title: 'Common Nouns',
              path: '/grammar/nouns/common-nouns'
            },
            {
              title: 'Proper Nouns',
              path: '/grammar/nouns/proper-nouns'
            }
          ]
        },
        {
          title: 'Pronouns',
          path: '/grammar/pronouns',
          open: true,
          routes: [
            {
              title: 'Subject Pronouns',
              path: '/grammar/pronouns/subject-nouns'
            },
            {
              title: 'Object Pronouns',
              path: '/grammar/pronouns/object-pronouns'
            }
          ]
        },
        {
          title: 'Articles',
          path: '/grammar/present-tenses',
          open: true,
          routes: [
            {
              title: 'A - An - The',
              path: '/grammar/present-tenses/to-be'
            }
          ]
        },
        {
          title: 'Demonstratives',
          path: '/grammar/demonstratives',
          open: true,
          routes: [
            {
              title: 'This - That - These - Those ',
              path: '/grammar/demonstratives/this-that-these-those'
            }
          ]
        },
        {
          title: 'Distributives',
          path: '/grammar/distributives',
          open: true,
          routes: [
            {
              title: 'All - Half',
              path: '/grammar/distributives/all-half'
            },
            {
              title: 'Each - Every',
              path: '/grammar/distributives/each-every'
            }
          ]
        }
      ]
    }
  ]
}

export default sidebar
