import React, { useEffect } from 'react'
import HeaderDefault from './Header';
import FooterWidgets from './Footer';
import HeaderMobile from './HeaderMobile';
import MasterLayout from './MasterLayout';
import PageLoader from '../loader/PageLoader';
import NavigationList from './NavigationList';
import categoryProductService from '@/infrastructure/repository/category/categoryProduct.service';
import { useRecoilState } from 'recoil';
import { CategoryProductState } from '@/core/atoms/category/categoryState';

type Props = {
    component: any
}

const MainLayoutComponent = (props: Props) => {
    const { component } = props;
    const [, setCategoryProductState] = useRecoilState(CategoryProductState);

    const onGetListCategoryAsync = async () => {
        const param = {
            page: 1,
            size: 8,
        }
        try {
            await categoryProductService.GetCategory(
                param,
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

    useEffect(() => {
        onGetListCategoryAsync().then(_ => { });
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