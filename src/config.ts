import type { DefaultTheme } from 'vitepress/theme'

export interface VPThemeConfig extends DefaultTheme.Config {
  myThemeOption?: boolean
}
