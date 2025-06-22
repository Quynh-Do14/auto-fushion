import Head from 'next/head';
import MainLayoutComponent from './MainLayoutComponent';

interface MainLayoutPublicProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    children?: React.ReactNode;
    [key: string]: any;
}

const MainLayoutPublic = ({
    title = '',
    description = '',
    image,
    url,
    ...props
}: MainLayoutPublicProps) => {
    const defaultTitle = process.env.title || 'My Website';
    const defaultDescription = process.env.titleDescription || 'Welcome to our website';
    const defaultImage = process.env.defaultImage || '/static/images/og-image.jpg';
    const defaultUrl = process.env.defaultUrl || 'https://example.com';

    const titleView = title ? `${defaultTitle} | ${title}` : `${defaultTitle} | ${defaultDescription}`;
    const descriptionView = description || defaultDescription;
    const imageView = image || defaultImage;
    const urlView = url || defaultUrl;

    return (
        <>
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

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainLayoutComponent
                component={props}
            />
        </>
    );
};

export default MainLayoutPublic;
