import { defineConfig } from 'astro/config';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import remarkCustomMetadata from './remark-custom-metadata.mjs'; // 导入自定义插件

export default defineConfig({
  integrations: [],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkCustomMetadata, // 添加自定义插件
    ],
    rehypePlugins: [
      rehypeSlug,
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
        // 移除 schema 以便我们能自由解析内容
      },
      wiki: {
        type: 'content',
        // 移除 schema
      },
    }
  }
});