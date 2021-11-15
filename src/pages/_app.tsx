import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from "next/link";
import Script from "next/script";
import { MDXProvider } from '@mdx-js/react';
import NProgress from 'nprogress';

import { Layout as DocsLayout } from '../components/Docs';
import { Layout as LegalLayout } from '../components/Legal';

import '../../styles/globals.css';
import '../../styles/nprogress.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function MasterLayout({ children }) {
  const router = useRouter();
  const path = router.pathname.split("/");
  if (path[1] === "docs") {
    return (
      <DocsLayout>{children}</DocsLayout>
    );
  } else if (path[1] === "legal") {
    return (
      <LegalLayout>{children}</LegalLayout>
    );
  } else {
    return (
      <main>{children}</main>
    );
  }
}

const components = {
  wrapper: MasterLayout,
  img: Image,
  a: Link
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
        <meta property="og:url" content="https://rowifi.link" />
        <meta property="og:image" content="https://rowifi.link/rowifi_banner.jpg" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://rowifi.link" />
      </Head>
      <Script src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "b85b40cda50b4ec593611adfdef125c2"}' />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
export default MyApp;
