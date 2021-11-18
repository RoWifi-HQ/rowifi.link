// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (adsbygoogle = window.adsbygoogle || []).push({
                                    google_ad_client: "ca-pub-1197269638005739",
                                    enable_page_level_ads: true
                                });
                                    `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;