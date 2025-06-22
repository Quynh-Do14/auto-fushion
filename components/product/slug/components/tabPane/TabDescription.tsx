import React from 'react';
type Props = {
    product: any
}
const TabDescription = (props: Props) => {
    const { product } = props;
    return (
        <div className="ps-document">
            <div
                dangerouslySetInnerHTML={{ __html: product.description }}
            />
        </div>
    );
}

export default TabDescription;
