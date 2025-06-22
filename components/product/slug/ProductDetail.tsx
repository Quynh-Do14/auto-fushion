import React from 'react';
import ThumbnailDefault from './components/Thumbnail';
import TopInformation from './components/TopInformation';
import DetailDescription from './components/DetailDescription';
import DetailSpecification from './components/DetailSpecification';
import DetailSharing from './components/DetailSharing';
import TabView from './components/TabView';

type Props = {
    product: any
}
const ProductDetail = (props: Props) => {
    const { product } = props
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailDefault product={product} vertical={false} />
                <div className="ps-product__info">
                    <TopInformation product={product} />
                    <DetailDescription product={product} />
                    <DetailSpecification product={product}/>
                    <DetailSharing />
                </div>
            </div>
            <TabView product={product}/>
        </div>
    );
};

export default ProductDetail;
