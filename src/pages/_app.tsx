import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MDXProvider } from '@mdx-js/react';
import NProgress from 'nprogress';

import { Layout } from '../components/Docs';

import '../../styles/globals.css';
import '../../styles/nprogress.css';

const components = {
  wrapper: Layout,
  img: Image,
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>RoWifi - The 2nd Gen Roblox-Discord Verification Bot</title>
        <meta name="description" content="RoWifi is a Roblox-Discord Verification Bot offering a seamless integration between your Roblox group and your Discord server." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RoWifi" />
        <meta property="og:description" content="RoWifi is a Roblox-Discord Verification Bot offering a seamless integration between your Roblox group and your Discord server." />
        <meta property="og:url" content="https://rowifi.netlify.app" />
        <meta property="og:image" content="https://rowifi.netlify.app/rowifi_banner.jpg" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://rowifi.netlify.app" />
      </Head>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
export default MyApp;
