import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import vuetify from './vuetify'

import './styles/global.scss'
import './styles/markdown.scss'
import './styles/containers.scss'

export interface BsBlogThemeConfig {
  avatar: string
  walineUrl: string
  defaultHeaderImage?: string
  defaultPostCover?: string
  navLinks?: NavLink[]
  socialLinks?: SocialLink[]
}

export interface NavLink {
  href: string
  title: string
  icon: string
}

export interface SocialLink {
  href: string
  icon: string
  desc: string
}

const theme: Theme = {
  Layout,

  enhanceApp({ app }) {
    app.use(vuetify)
  },
}

export default theme
