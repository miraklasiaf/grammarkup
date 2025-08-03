import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from 'fumadocs-mdx/config';

export const docs = defineDocs({
  docs: {
    async: true,
    schema: frontmatterSchema
  },
  meta: {
    schema: metaSchema
  }
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {}
});
