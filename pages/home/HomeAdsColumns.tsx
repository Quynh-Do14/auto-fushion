import Promotion from '@/infrastructure/common/media/Promotion';
import React, { useEffect, useState } from 'react';


const HomeAdsColumns = () => {
    return (
        <div className="ps-home-ads">
            <div className="ps-container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={""}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={""}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAdsColumns;
