const baseUrl = "https://github.com/miraklasiaf/grammarkup"

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Faisal Karim. All Rights Reserved.`,
  author: {
    name: "Faisal Karim",
    github: "https://github.com/miraklasiaf",
    twitter: "https://twitter.com/miraklasiaf",
    linkedin: "https://linkedin.com/in/miraklasiaf",
    email: "faisalkarim96@gmail.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop/website`,
    blobUrl: `${baseUrl}/blob/develop`,
  },
  seo: {
    title: "Grammarkup",
    titleTemplate: "%s · Grammarkup",
    description: "Web for learning grammar",
    siteUrl: "https://chakra-ui.com",
    twitter: {
      handle: "@miraklasiaf",
      site: "@miraklasiaf",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://chakra-ui.com",
      title: "Grammarkup",
      description: "Web for learning grammar",
      site_name: "Grammarkup: Web for learning grammar",
      images: [
        {
          url: "/og-image.png",
          width: 1240,
          height: 480,
          alt: "Grammarkup: Web for learning grammar",
        },
        {
          url: "/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt: "Grammarkup: Web for learning grammar",
        },
      ],
    },
  },
}

export default siteConfig
