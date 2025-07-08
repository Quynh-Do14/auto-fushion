import React, { useEffect } from 'react'
import HeaderDefault from './Header';
import FooterWidgets from './Footer';
import HeaderMobile from './HeaderMobile';
import MasterLayout from './MasterLayout';
import categoryProductService from '@/infrastructure/repository/category/categoryProduct.service';
import { useRecoilState } from 'recoil';
import { CategoryBlogState, CategoryProductState } from '@/core/atoms/category/categoryState';
import categoryBlogService from '@/infrastructure/repository/category/categoryBlog.service';
import { BrandState } from '@/core/atoms/brand/brandState';
import brandService from '@/infrastructure/repository/brand/brand.service';
import { ProfileState } from '@/core/atoms/profile/profileState';
import { isTokenStoraged } from '@/infrastructure/utilities/storage';
import authService from '@/infrastructure/repository/auth/auth.service';

type Props = {
    component: any
}

const MainLayoutComponent = (props: Props) => {
    const { component } = props;
    const [, setCategoryProductState] = useRecoilState(CategoryProductState);
    const [, setCategoryBlogState] = useRecoilState(CategoryBlogState);
    const [, setBrandState] = useRecoilState(BrandState);
    const [, setProfileState] = useRecoilState(ProfileState);
    const token = isTokenStoraged();
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
    const onGetListBrandAsync = async () => {
        try {
            await brandService.GetBrand(
                {},
                () => { }
            ).then((res) => {
                setBrandState({
                    data: res.data
                })
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    const onGetProfileAsync = async () => {
        if (token) {
        } try {
            await authService.profile(
                () => { }
            ).then((res) => {
                setProfileState({
                    data: res
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
        onGetListBrandAsync().then(_ => { });
    }, []);

    useEffect(() => {
        if (token) {
            onGetProfileAsync().then(_ => { });
        }
    }, [token]);
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