import type { EnhanceAppContext } from 'vitepress/client'
import { VPTheme } from 'starter-vitepress-theme'
import './style.css'

export default {
  ...VPTheme,
  // if you need to add more here, this is how to ensure the base theme's components are installed
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // call the base themes enhanceApp
    VPTheme.enhanceApp({ app, router, siteData })
  },
}
