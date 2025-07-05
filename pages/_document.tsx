// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

import React from 'react';

export default function Document() {
    const titleView = 'Auto Fusion';
    const descriptionView = 'Welcome to Auto Fusion';
    const imageView = '/static/images/og-image.jpg';
    const urlView = 'https://example.com';
    return (
        <Html>
            <Head>
                <title>{titleView}</title>
                <meta name="description" content={descriptionView} />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={urlView} />
                <meta property="og:title" content={titleView} />
                <meta property="og:description" content={descriptionView} />
                <meta property="og:image" content={imageView} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={urlView} />
                <meta name="twitter:title" content={titleView} />
                <meta name="twitter:description" content={descriptionView} />
                <meta name="twitter:image" content={imageView} />

                <link rel="shortcut icon" href={'/static/img/favi.png'} />
                <link rel="icon" href={'/static/img/favi.png'} sizes="32x32" />
                <link
                    rel="icon"
                    href={'/static/img/favi.png'}
                    sizes="192x192"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    href={'/static/img/favi.png'}
                />

                <link
                    href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
