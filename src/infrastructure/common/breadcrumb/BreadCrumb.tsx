import React from 'react';
import Link from 'next/link';
type Props = {
    breacrumb: any[],
    layout: 'fullwidth' | 'default'
}
const BreadCrumb = (props: Props) => {
    const { breacrumb, layout } = props;
    return (
        <div className="ps-breadcrumb">
            <div
                className={
                    layout === 'fullwidth' ? 'ps-container' : 'container'
                }>
                <ul className="breadcrumb">
                    {breacrumb.map((item, index) => {
                        if (!item.url) {
                            return <li key={index}>{item.text}</li>;
                        } else {
                            return (
                                <li key={item.text}>
                                    <Link href={item.url}>
                                        <a>{item.text}</a>
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BreadCrumb;
