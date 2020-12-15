const withOffline = require('next-offline')
const withMdx = require('next-mdx-enhanced')
const withPlugins = require('next-compose-plugins')
const { addLeadingSlash } = require('@docusaurus/utils')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

function fileToPath(str) {
  return addLeadingSlash(str.replace('.mdx', ''))
}

const defaultConfig = {
  target: 'serverless',
  images: {
    domains: ['d33wubrfki0l68.cloudfront.net'] // Kofi
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
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
      const slug = fileToPath(mdxPath)
      const authorData = author ? 'Faisal Karim' : undefined

      return {
        slug,
        author: authorData,
        tags
      }
    }
  }
}

module.exports = withPlugins([withBundleAnalyzer, withOffline, withMdx(mdxConfig)], defaultConfig)
