import React, { useEffect } from 'react'
import HeaderDefault from './Header';
import FooterWidgets from './Footer';
import HeaderMobile from './HeaderMobile';
import MasterLayout from './MasterLayout';
import categoryProductService from '@/infrastructure/repository/category/categoryProduct.service';
import { useRecoilState } from 'recoil';
import { CategoryBlogState, CategoryProductState } from '@/core/atoms/category/categoryState';
import categoryBlogService from '@/infrastructure/repository/category/categoryBlog.service';

type Props = {
    component: any
}

const MainLayoutComponent = (props: Props) => {
    const { component } = props;
    const [, setCategoryProductState] = useRecoilState(CategoryProductState);
    const [, setCategoryBlogState] = useRecoilState(CategoryBlogState);

    const onGetListCategoryAsync = async () => {
        try {
            await categoryProductService.GetCategory(
                {},
                () => { }
            ).then((res) => {
                setCategoryProductState({
                    data: res.data
                })
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    const onGetListBlogCategoryAsync = async () => {
        try {
            await categoryBlogService.GetBlogCategory(
                {},
                () => { }
            ).then((res) => {
                setCategoryBlogState({
                    data: res.data
                })
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        onGetListCategoryAsync().then(_ => { });
        onGetListBlogCategoryAsync().then(_ => { });
    }, []);
    return (
        <>
            <MasterLayout>
                <HeaderDefault />
                <HeaderMobile />
                {component.children}
                <FooterWidgets />
            </MasterLayout>
        </>
    )
}

export default MainLayoutComponent