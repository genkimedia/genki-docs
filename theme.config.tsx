import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const lightTheme = {
  logo: {
    src: '/img/logo-dark.svg',
    alt: 'Genki light logo'
  },
  // other theme configuration options
}
const darkTheme = {
  logo: {
    src: '/img/logo-light.svg',
    alt: 'Genki ark logo'
  },
  // other theme configuration options
}
const config: DocsThemeConfig = {
  if (theme === 'light') {
    logo: lightTheme.logo,
  } else {
    logo: darkTheme.logo,
  },
  project: {
    link: 'https://github.com/genkimedia/',
  },
  chat: {
    link: 'https;//discord.com',
  },
  docsRepositoryBase: 'https://github.com/genkimedia/genki-docs/tree/main/',
  footer: {
    text: 'Genki © 2022',
  },
}

export default config
