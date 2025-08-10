import { defineConfig } from 'astro/config';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';

export default defineConfig({
  integrations: [],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeMathjax, {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
        }
      }]
    ],
  },
  content: {
    collections: {
      blog: {
        type: 'content',
        schema: {
          title: { type: 'string' },
          pubDate: { type: 'date' },
          description: { type: 'string' },
          author: { type: 'string' },
        }
      },
      wiki: {
        type: 'content',
        schema: {
          title: { type: 'string' },
        }
      },
    }
  }
});