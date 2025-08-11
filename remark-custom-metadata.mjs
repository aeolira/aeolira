import { visit } from 'unist-util-visit';

function remarkCustomMetadata() {
  return (tree, file) => {
    // 初始化存储元数据的对象
    file.data.astro.frontmatter = file.data.astro.frontmatter || {};
    const { frontmatter } = file.data.astro;

    // 提取标题 (第一个 H1)
    let titleNode = null;
    visit(tree, 'heading', (node) => {
      if (node.depth === 1 && !titleNode) {
        titleNode = node;
        frontmatter.title = node.children[0].value;
      }
    });
    if (titleNode) {
      // 移除标题节点
      tree.children.splice(tree.children.indexOf(titleNode), 1);
    } else {
      frontmatter.title = '未命名';
    }

    // 提取博客标签和概述
    // 假设标签是H1后的第一个段落，以#开头
    // 假设概述是H1后的第一个引用块
    if (file.data.astro.collection === 'blog') {
      let descriptionNode = null;
      let tagsNode = null;

      visit(tree, 'blockquote', (node) => {
        if (!descriptionNode) {
          descriptionNode = node;
          frontmatter.description = node.children[0].children[0].value.trim();
        }
      });
      if (descriptionNode) {
        tree.children.splice(tree.children.indexOf(descriptionNode), 1);
      }

      visit(tree, 'paragraph', (node) => {
        if (node.children[0]?.type === 'text' && node.children[0].value.startsWith('#') && !tagsNode) {
          tagsNode = node;
          frontmatter.tags = node.children[0].value.split(/\s+/).map(tag => tag.substring(1));
        }
      });
      if (tagsNode) {
        tree.children.splice(tree.children.indexOf(tagsNode), 1);
      }
    }

    // 提取维基分类
    if (file.data.astro.collection === 'wiki') {
        let classificationNode = null;
        visit(tree, 'paragraph', (node) => {
            if (node.children[0]?.type === 'text' && node.children[0].value.startsWith('分类：') && !classificationNode) {
                classificationNode = node;
                frontmatter.classification = node.children[0].value
                    .replace('分类：', '')
                    .split('，')
                    .map(item => item.trim());
            }
        });
        if (classificationNode) {
          tree.children.splice(tree.children.indexOf(classificationNode), 1);
        }
    }
  };
}

export default remarkCustomMetadata;