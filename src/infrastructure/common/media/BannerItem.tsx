import React from 'react';
import Link from 'next/link';
type Props = {
    source: string;
};
const BannerItem = (props: Props) => {
    const { source } = props
    if (source) {
        return (
            <Link href="/shop">
                <div>
                    <img src={``} alt="martfury" />
                </div>
            </Link>
        );
    } else {
        return (
            <Link href="/shop">
                <div>
                    <div className="ps-collection">
                        <img src="/static/img/not-found.jpg" alt="martfury" />
                    </div>
                </div>
            </Link>
        );
    }
};

export default BannerItem;
