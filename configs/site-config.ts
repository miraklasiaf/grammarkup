const baseUrl = 'https://github.com/miraklasiaf/grammarkup'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Grammarkup. All Rights Reserved.`,
  author: {
    name: 'Faisal Karim',
    github: 'https://github.com/miraklasiaf',
    twitter: 'https://twitter.com/miraklasiaf',
    linkedin: 'https://linkedin.com/in/miraklasiaf',
    email: 'faisalkarim96@gmail.com'
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop/website`,
    blobUrl: `${baseUrl}/blob/develop`
  },
  seo: {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://grammarkup.vercel.app',
      site_name: 'Grammarkup'
    },
    twitter: {
      handle: '@miraklasiaf',
      cardType: 'summary_large_image'
    }
  }
}

export default siteConfig
