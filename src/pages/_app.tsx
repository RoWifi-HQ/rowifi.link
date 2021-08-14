import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import { Layout } from '../components/Docs';

const components = {
  wrapper: Layout
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RoWifi - The 2nd Gen Roblox-Discord Verification Bot</title>
      </Head>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
export default MyApp;
