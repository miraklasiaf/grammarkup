const sidebar = {
  routes: [
    {
      title: 'Advanced Grammar',
      heading: true,
      routes: [
        {
          title: 'Getting Started',
          path: '/advanced/getting-started'
        },
        {
          title: 'Verbs Perfect Tense',
          rootPath: '/advanced/verbs-perfect-tense',
          open: true,
          routes: [
            {
              title: 'Present Perfect and Present Perfect Continuous',
              path:
                '/advanced/verbs-perfect-tense/present-perfect-and-present-perfect-continuous'
            },
            {
              title: 'Past Perfect and Past Perfect Continuous',
              path:
                '/advanced/verbs-perfect-tense/past-perfect-and-past-perfect-continuous'
            },
            {
              title: 'Future Perfect and Future Perfect Continuous',
              path:
                '/advanced/verbs-perfect-tense/future-perfect-and-future-perfect-continuous'
            }
          ]
        },
        {
          title: 'Past Participle',
          path: '/advanced/past-participle'
        },
        {
          title: 'Phrasal Verbs',
          rootPath: '/advanced/phrasal-verbs',
          open: true,
          routes: [
            {
              title: 'Give up - Turn Out',
              path: '/advanced/phrasal-verbs/give-up-turn-out'
            },
            {
              title: 'Carry On - Put off',
              path: '/advanced/phrasal-verbs/carry-on-put-off'
            },
            {
              title: 'Turn down - Break Up',
              path: '/advanced/phrasal-verbs/turn-down-break-up'
            }
          ]
        },
        {
          title: 'Pre-determiners',
          rootPath: '/advanced/pre-determiners',
          open: true,
          routes: [
            {
              title: 'Such - What - Rather - Quite',
              path: '/advanced/pre-determiners/such-what-rather-quite'
            }
          ]
        },
        {
          title: 'Orders of Adverbs',
          path: '/advanced/orders-of-adverbs'
        },
        {
          title: 'Pseudo Conjunctions',
          path: '/advanced/pseudo-conjunctions'
        },
        {
          title: 'Passive vs Active Voice',
          path: '/advanced/passive-vs-active-voice'
        },
        {
          title: 'Conditionals',
          rootPath: '/advanced/conditionals',
          open: true,
          routes: [
            {
              title: 'Conditionals Type 0',
              path: '/advanced/conditionals/conditionals-type-0'
            },
            {
              title: 'Conditionals Type 1',
              path: '/advanced/conditionals/conditionals-type-1'
            },
            {
              title: 'Conditionals Type 2',
              path: '/advanced/conditionals/conditionals-type-2'
            },
            {
              title: 'Conditionals Type 3',
              path: '/advanced/conditionals/conditionals-type-3'
            },
            {
              title: 'Conditionals Mixed Type',
              path: '/advanced/conditionals/conditionals-mixed-type'
            }
          ]
        },
        {
          title: 'Clauses',
          rootPath: '/advanced/clauses',
          open: true,
          routes: [
            {
              title: 'Sentence Clause',
              path: '/advanced/clauses/sentence-clause'
            },
            {
              title: 'Independent Clause',
              path: '/advanced/clauses/independent-clause'
            },
            {
              title: 'Dependent Clause',
              path: '/advanced/clauses/dependent-clause'
            },
            {
              title: 'Noun Clause',
              path: '/advanced/clauses/noun-clause'
            },
            {
              title: 'Adjective Clause',
              path: '/advanced/clauses/adjective-clause'
            },
            {
              title: 'Adverb Clause',
              path: '/advanced/clauses/adverb-clause'
            }
          ]
        },
        {
          title: 'Reported Speech',
          path: '/advanced/reported-speech'
        }
      ]
    }
  ]
}

export default sidebar
