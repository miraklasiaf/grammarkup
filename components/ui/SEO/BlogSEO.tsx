import { NextSeo } from 'next-seo'
import siteConfig from '@/configs/site-config'

const BlogSEO = ({ title, description, slug }) => (
  <NextSeo
    title={title}
    description={description}
    canonical={`${siteConfig.seo.openGraph.url}/${slug}`}
    openGraph={{
      url: siteConfig.seo.openGraph.url,
      title: title,
      description: description,
      images: [{ url: `${siteConfig.seo.openGraph.url}/api/og?title=${title}` }],
      site_name: title
    }}
  />
)

export default BlogSEO
