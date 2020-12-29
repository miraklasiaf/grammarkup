import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import renderToString from 'next-mdx-remote/render-to-string'
import { MDX } from '@/components/common'

export type DirVariant = 'grammar' | 'blog'

const dataDirectory = join(process.cwd(), 'data')

export async function fetchDataManifest(dir: DirVariant) {
  const manifestPath = join(dataDirectory, dir, 'manifest.json')
  const res = fs.readFileSync(manifestPath, 'utf-8')

  return JSON.parse(res)
}

export async function getPostBySlug(slug) {
  const fullPath = join(dataDirectory, slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const realSlug = slug.replace(/\.mdx$/, '')

  const { data, content } = matter(fileContents)

  const mdxSource = await renderToString(content, {
    components: MDX,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-emoji'),
        require('remark-images'),
        require('remark-slug'),
        require('remark-toc'),
        require('remark-unwrap-images')
      ],
      rehypePlugins: []
    }
  })

  data.author = 'Faisal Karim'

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: realSlug || null,
      ...data
    }
  }
}
