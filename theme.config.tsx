import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'
import useTheme from 'components/logo.tsx';
import Logo from 'components/logo.tsx';



function MyApp({ Component, pageProps }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Component {...pageProps} />
    </div>
  );
}

const config: DocsThemeConfig = {
  logo: <div>
    <Logo />
  </div>,
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
