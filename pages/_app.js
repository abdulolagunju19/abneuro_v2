import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import customTheme from '../styles/theme';

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  //if color mode is light, use the prism light theme, otherwise use dark theme
  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </>
  )
}

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start()); 
    router.events.on('routeChangeComplete', () => NProgress.done()); 
    router.events.on('routeChangeError', () => NProgress.done()); 
  }, [router])

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  )
}
