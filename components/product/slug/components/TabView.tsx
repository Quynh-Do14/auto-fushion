import React from 'react';

import { Tabs } from 'antd';
import TabDescription from './tabPane/TabDescription';
import TabSpecification from './tabPane/TabSpecification';

const { TabPane } = Tabs;
type Props = {
    product: any
}
const TabView = (props: Props) => {
    const { product } = props;
    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Mô tả" key="1">
                    <TabDescription product={product} />
                </TabPane>
                <TabPane tab="Thông số" key="2">
                    <TabSpecification product={product} />
                </TabPane>
                {/* <TabPane tab="Specification" key="2">
                    <PartialSpecification />
                </TabPane>
                <TabPane tab="Vendor" key="3">
                    <PartialVendor />
                </TabPane>
                <TabPane tab="Reviews (1)" key="4">
                    <PartialReview />
                </TabPane>
                <TabPane tab="Questions and Answers" key="5">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="More Offers" key="6">
                    <PartialOffer />
                </TabPane> */}
            </Tabs>
        </div>
    );
};

export default TabView;
