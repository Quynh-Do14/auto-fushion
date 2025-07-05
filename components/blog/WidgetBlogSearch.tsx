import React, { useState } from 'react';
import router from 'next/router';
import ButtonCommon from '@/infrastructure/common/button/ButtonCommon';
type Props = {
    onSearchText: () => void;
    searchText: string;
    setSearchText: (keyword: string) => void;
}
const WidgetBlogSearch = (props: Props) => {
    const { onSearchText, searchText, setSearchText } = props;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };


    return (
        <aside className="widget widget--blog widget--search">
            <div
                className="ps-form--widget-search">
                <input
                    value={searchText}
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                    onChange={onChange}
                />
                <button>
                    <i className="icon-magnifier"></i>
                </button>

            </div>
            <ButtonCommon
                onClick={onSearchText}
                title={'Tìm kiếm'}
                variant={'ps-btn--fullwidth'}
            />
        </aside>
    );
};

export default WidgetBlogSearch;
