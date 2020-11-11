import { NextSeo } from 'next-seo'
import siteConfig from '@/configs/site-config'

const SEO = ({ title, description }) => (
  <NextSeo
    title={`${title} - ${description}`}
    description={description}
    canonical={siteConfig.seo.openGraph.url}
    openGraph={{
      url: siteConfig.seo.openGraph.url,
      title: title,
      description: description,
      images: [
        {
          url: `${siteConfig.seo.openGraph.url}/api/og?title=${title}&category=${description}`
        }
      ],
      site_name: title
    }}
  />
)

export default SEO
