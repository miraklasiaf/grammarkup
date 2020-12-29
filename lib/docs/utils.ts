import { DirVariant } from '../mdx'

function getDataSlug(slug: string[]) {
  return slug?.length ? slug : ['getting-started']
}

export function getSlug(dir: DirVariant, params) {
  const slug = getDataSlug(params.slug)

  return { slug: `/${dir}/${slug.join('/')}` }
}

export function removeFromLast(path: any, key: string) {
  const i = path.lastIndexOf(key)
  return i === -1 ? path : path.substring(0, i)
}
