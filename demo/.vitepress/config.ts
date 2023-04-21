import path from 'node:path'
import { defineConfigWithTheme } from 'vitepress'
import type { VPThemeConfig } from 'starter-vitepress-theme'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPThemeConfig>({
  vite: {
    build: {
      minify: false,
    },
    resolve: {
      alias: {
        'starter-vitepress-theme': path.join(__dirname, '../../src'),
      },
    },
  },

  title: 'Template Starter Demo',
  description: 'A VitePress Theme Starter Project',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Theme Test', link: '/theme-test' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/jcamp-code/vitepress-theme-starter',
      },
    ],
  },
})
