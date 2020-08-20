const sidebar = {
  routes: [
    {
      title: 'Foundations',
      heading: true,
      routes: [
        {
          title: 'Getting Started',
          path: '/grammar/getting-started'
        },
        {
          title: 'Nouns & Pronouns',
          path: '/grammar/nouns-and-pronouns',
          open: true,
          routes: [
            {
              title: 'Common Nouns',
              path: '/grammar/nouns-and-pronouns/common-nouns'
            },
            {
              title: 'Subject Pronouns',
              path: '/grammar/nouns-and-pronouns/subject-nouns'
            },
            {
              title: 'Object Pronouns',
              path: '/grammar/nouns-and-pronouns/object-nouns'
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
          title: 'Verbs: Simple Tense',
          path: '/grammar/present-tenses',
          open: true,
          routes: [
            {
              title: 'Present Simple Tense',
              path: '/grammar/present-tenses/to-be'
            },
            {
              title: 'Past Simple Tense',
              path: '/grammar/present-tenses/present-simple'
            }
          ]
        },

        {
          title: 'Auxilliary Verbs',
          path: '/grammar/present-tenses',
          open: true,
          routes: [
            {
              title: 'To Be',
              path: '/grammar/present-tenses/to-be'
            }
          ]
        }
      ]
    }
  ]
}

export default sidebar
