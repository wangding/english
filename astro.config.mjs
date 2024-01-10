import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  server: { port: 8080, host: '192.168.14.128' },
  integrations: [
    starlight({
      title: '英语学习笔记',
      customCss: [
        './src/styles/custom.css',
      ],
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: {
        github: 'https://github.com/wangding/english',
      },
      sidebar: [
        {
          label: '名词短语',
          autogenerate: { directory: 'noun-phrase' },
        },
        {
          label: '句子层次',
          autogenerate: { directory: 'sentence-level' },
        },
        {
          label: '字源大挪移',
          autogenerate: { directory: 'way-with-words' },
        },
      ],
    }),
  ],
});
