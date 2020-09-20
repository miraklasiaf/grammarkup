const sidebar = {
  routes: [
    {
      title: 'Beginner Grammar',
      heading: true,
      routes: [
        {
          title: 'Nouns',
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
          open: true,
          routes: [
            {
              title: 'Subject Pronouns',
              path: '/beginner/pronouns/subject-pronouns'
            },
            {
              title: 'Object Pronouns',
              path: '/beginner/pronouns/object-pronouns'
            }
          ]
        },
        {
          title: 'Articles',
          open: true,
          routes: [
            {
              title: 'A - An - The',
              path: '/beginner/articles/a-an-the'
            }
          ]
        },
        {
          title: 'Demonstratives',
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
        },
        {
          title: 'Verb Conjugation',
          path: '/beginner/verb-conjugation'
        }
      ]
    }
  ]
}

export default sidebar
