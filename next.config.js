const withMdx = require('next-mdx-enhanced')
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const path = require('path')
const execa = require('execa')
const fromUnixTime = require('date-fns/fromUnixTime')
const format = require('date-fns/format')
const { getEditUrl, addLeadingSlash } = require('@docusaurus/utils')

const EDIT_URL = 'https://github.com/miraklasiaf/grammarkup/edit/master/pages'

async function getLastEdited(filePath) {
  try {
    const { stdout } = await execa('git', [
      'log',
      '-1',
      '--format=%ct, %an',
      '--follow',
      '--',
      filePath
    ])
    return getTimestampAndAuthor(stdout)
  } catch (error) {
    // console.error(error)
  }
}

const GIT_COMMIT_TIMESTAMP_AUTHOR_REGEX = /^(\d+), (.+)$/

function getTimestampAndAuthor(str) {
  if (!str) return null

  const temp = str.match(GIT_COMMIT_TIMESTAMP_AUTHOR_REGEX)

  if (!temp || temp.length < 3) return null

  const [_, timestamp, author] = temp
  const dateStr = fromUnixTime(+timestamp)

  return {
    date: format(dateStr, 'MMMM dd, yyyy'),
    author
  }
}

function fileToPath(str) {
  return addLeadingSlash(str.replace('.mdx', ''))
}

const defaultConfig = {
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return {
      ...config,
      externals: [...config.externals, 'sharp']
    }
  },
  experimental: {
    optimizeFonts: true,
    optimizeImages: true
  },
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}

const mdxConfig = {
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-emoji'),
    require('remark-images'),
    require('remark-slug'),
    require('remark-toc'),
    require('remark-unwrap-images')
  ],
  rehypePlugins: [],
  extendFrontMatter: {
    process: async (_, frontmatter) => {
      const { __resourcePath: mdxPath, author, tags } = frontmatter

      const filePath = path.join(process.cwd(), 'pages', mdxPath)
      const lastEdited = await getLastEdited(filePath)
      const editUrl = getEditUrl(path.join(mdxPath), EDIT_URL)
      const slug = fileToPath(mdxPath)
      const authorData = author ? 'Faisal Karim' : undefined

      return {
        slug,
        lastEdited,
        editUrl,
        author: authorData,
        tags
      }
    }
  }
}

module.exports = withPlugins(
  [withBundleAnalyzer, withOffline, withMdx(mdxConfig)],
  defaultConfig
)
