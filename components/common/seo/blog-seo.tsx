import { NextSeo } from 'next-seo'
import siteConfig from '@/configs/site-config'

function getCategory(slug: string) {
  const category = slug.startsWith('/beginner')
    ? `Beginner Grammar`
    : slug.startsWith('/intermediate')
    ? `Intermediate Grammar`
    : `Advanced Grammar`

  return category
}

const BlogSEO = ({ title, description, slug }) => {
  const category = getCategory(slug)
  const [, , section] = slug.split('/')

  return (
    <NextSeo
      title={`${title} – Grammarkup`}
      description={description}
      canonical={`${siteConfig.seo.openGraph.url}/${slug}`}
      openGraph={{
        url: siteConfig.seo.openGraph.url,
        title: title,
        description: description,
        images: [
          {
            url: `${siteConfig.seo.openGraph.url}/api/og?category=${category}&section=${section}&title=${title}`
          }
        ],
        site_name: title
      }}
    />
  )
}

export default BlogSEO
