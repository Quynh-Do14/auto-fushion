import React, { useState } from 'react';
import { Slider, Checkbox } from 'antd';
import { useRouter } from 'next/router';

type Props = {
    min: number
    setMin: Function
    max: number
    setMax: Function
    handleChangeRange: (value: any[]) => {}

}
const WidgetProductFilterByPriceRange = (props: Props) => {
    const {
        min,
        setMin,
        max,
        setMax,
        handleChangeRange
    } = props;
    const Router = useRouter();

    return (
        <aside className="widget widget_shop">
            <figure>
                <h4 className="widget-title">By Price</h4>
                <Slider
                    range
                    defaultValue={[0, 200000000]}
                    max={200000000}
                    min={0}
                    step={1000}
                    onAfterChange={handleChangeRange}
                />
                <p>
                    Price: {min}đ -  {max}đ
                </p>
            </figure>
        </aside>
    );
};

export default WidgetProductFilterByPriceRange;
