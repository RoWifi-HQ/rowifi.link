import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RoWifi - The 2nd Gen Roblox-Discord Verification Bot</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
