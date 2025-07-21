import Head from 'next/head';
import MainLayoutComponent from './MainLayoutComponent';
import { configImageURL } from '@/infrastructure/helper/helper';

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
    const defaultTitle = 'TRUNG TÂM PHỤ KIỆN ĐỒ CHƠI XE HƠI CAO CẤP AUTOFUSION';
    const defaultDescription = "AutoFusion – nơi hội tụ đam mê công nghệ, sự tận tâm và cam kết bền vững dành cho khách hàng. Với triết lý “lấy khách hàng làm trọng tâm”, chúng tôi không ngừng nỗ lực nâng cao trải nghiệm dịch vụ, lấy uy tín làm cam kết và chất lượng làm niềm tin để xây dựng mối quan hệ bền vững với mỗi khách hàng.";
    const defaultImage = configImageURL('/uploads/thumbnail.png');
    const defaultUrl = process.env.NEXT_PUBLIC_PUBLIC_URL || 'https://autofusion.vn';

    const titleView = title ? title : defaultTitle;
    const descriptionView = description ? description : defaultDescription;
    const imageView = image ? image : defaultImage;
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
