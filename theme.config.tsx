import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <Image
      src="/image/logo-light.svg"
      alt="Picture of the author"
      width={200}
    />,
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
