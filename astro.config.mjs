import { defineConfig } from 'astro/config';


export default defineConfig({
  integrations: [],
  markdown: {
    // 在此处添加 Markdown 相关的配置，例如数学公式渲染
  },
  // Astro 内容集合配置
  content: {
    collections: {
      blog: {
        type: 'content',
        schema: {
          // 你可以为博客文章定义数据类型，例如标题、发布日期等
          title: { type: 'string' },
          pubDate: { type: 'date' },
          description: { type: 'string' },
          author: { type: 'string' },
        }
      },
      wiki: {
        type: 'content',
        schema: {
          // 为维基页面定义数据类型
          title: { type: 'string' },
        }
      },
    }
  }
});