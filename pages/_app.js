import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import Script from 'next/script';

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

  //every time there is a route change, the nprogress loading bar is called
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start()); 

    //subscribe to routeChangeComplete and finish nprogress animation
    router.events.on('routeChangeComplete', () => NProgress.done());

    //if there is an error, complete nprogress animation
    router.events.on('routeChangeError', () => NProgress.done()); 
  }, [router]);

  //necessary so Chakra UI can be used
  //Google Analytics Tracking Code
  //afterInteractive: For scripts that can fetch and execute after the page is interactive, such as tag managers and analytics.
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} strategy='afterInteractive' />
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
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
    </>
  )
}
