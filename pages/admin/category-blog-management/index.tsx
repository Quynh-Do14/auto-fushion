import React, { useEffect, useState } from 'react';
import { Table, Input, Pagination, Space, Button } from 'antd';
import styles from '@/asset/css/admin/admin-component.module.css';
import AdminLayout from '@/infrastructure/common/layout/admin/MainLayout';
import ButtonCommon from '@/infrastructure/common/button/ButtonCommon';
import userService from '@/infrastructure/repository/user/user.service';
import { useRouter } from 'next/router';
import Constants from '@/core/common/constants';
import { TitleTableCommon } from '@/infrastructure/common/text/title-table-common';
import { ActionCommon } from '@/infrastructure/common/action/action-common';
import { ROUTE_PATH } from '@/core/common/appRouter';
import ButtonHref from '@/infrastructure/common/button/ButtonHref';
import DialogConfirmCommon from '@/infrastructure/common/modal/dialogConfirm';
import { FullPageLoading } from '@/infrastructure/common/loader/loading';
import { PaginationCommon } from '@/infrastructure/common/pagination/PaginationPageSize';
import categoryProductService from '@/infrastructure/repository/category/categoryProduct.service';
import { configImageURL } from '@/infrastructure/helper/helper';
import Image from 'next/image';
import categoryBlogService from '@/infrastructure/repository/category/categoryBlog.service';

let timeout: any
const BlogCategoryListPage = () => {
    const [listResponse, setListResponse] = useState<Array<any>>([])
    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchText, setSearchText] = useState<string>("");

    const [idSelected, setIdSelected] = useState<string>("");

    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const onGetListAsync = async ({ search = "", size = pageSize, page = currentPage }) => {
        const param = {
            page: page,
            limit: size,
            search: search,
        }
        try {
            await categoryBlogService.GetBlogCategory(
                param,
                setLoading
            ).then((res) => {
                setListResponse(res.data)
                setTotal(res.total)
            })
        }
        catch (error) {
            console.error(error)
        }
    }
    const onSearch = async (search = "", size = pageSize, page = 1) => {
        await onGetListAsync({ search: search, size: size, page: page });
    };

    const onChangeSearchText = (e: any) => {
        setSearchText(e.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onSearch(e.target.value, pageSize, currentPage,).then((_) => { });
        }, Constants.DEBOUNCE_SEARCH);
    };

    useEffect(() => {
        onSearch().then(_ => { });
    }, []);

    const onChangePage = async (value: any) => {
        setCurrentPage(value)
        await onSearch(searchText, pageSize, value).then(_ => { });
    };

    const onPageSizeChanged = async (value: any) => {
        setPageSize(value)
        setCurrentPage(1)
        await onSearch(searchText, value, 1).then(_ => { });
    };
    // Xóa bài
    const onOpenModalDelete = (id: any) => {
        setIsDeleteModal(true);
        setIdSelected(id)
    };

    const onCloseModalDelete = () => {
        setIsDeleteModal(false);
    };

    const onDeleteAsync = async () => {
        try {
            await categoryBlogService.DeleteBlogCategoryAdmin(
                idSelected,
                setLoading
            ).then((res) => {
                if (res) {
                    setIsDeleteModal(false);
                    onSearch().then(() => { });
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    };
    return (
        <AdminLayout
            breadcrumb={"Quản lý danh mục tin tức"}
            title={"Quản lý danh mục tin tức"}
            redirect={ROUTE_PATH.CATEGORY_BLOG_MANAGEMENT}
        >
            <div className={styles.manage_container}>
                <h2>Quản lý danh mục tin tức</h2>
                <div className={styles.searchBar}>
                    <Input
                        className="form-control"
                        placeholder="Tìm kiếm theo tên"
                        value={searchText}
                        onChange={onChangeSearchText}
                    />
                    <ButtonHref
                        href={ROUTE_PATH.ADD_CATEGORY_BLOG_MANAGEMENT}
                        title={'Thêm mới'}
                        width={150}
                        variant={'ps-btn--fullwidth'}
                    />
                </div>
                <div className={styles.table_container}>
                    <Table
                        dataSource={listResponse}
                        loading={loading}
                        rowKey="id"
                        pagination={false}
                        className='table-common'
                    >
                        <Table.Column
                            title={"STT"}
                            dataIndex="stt"
                            key="stt"
                            width={"5%"}
                            render={(val, record, index) => (
                                <div style={{ textAlign: "center" }}>
                                    {index + 1 + pageSize * (currentPage - 1)}
                                </div>
                            )}
                        />
                        <Table.Column
                            title={
                                <TitleTableCommon
                                    title="Tên danh mục"
                                    width={'150px'}
                                />
                            }
                            key={"name"}
                            dataIndex={"name"}
                        />
                        <Table.Column
                            title={
                                <TitleTableCommon
                                    title="Thao tác"
                                    width={"60px"}
                                />
                            }
                            fixed="right"
                            align='center'
                            width={"60px"}
                            render={(action, record: any) => (
                                <ActionCommon
                                    onClickDetail={() => router.push(`${ROUTE_PATH.CATEGORY_BLOG_MANAGEMENT}/${record.id}`)}
                                    onClickDelete={() => onOpenModalDelete(record.id)}
                                />
                            )}
                        />
                    </Table>
                </div>
                <div className={styles.pagination}>
                    <PaginationCommon
                        currentPage={currentPage}
                        pageSize={pageSize}
                        total={total}
                        onChangePage={onChangePage}
                        onChangeSize={onPageSizeChanged}
                        disabled={false}
                    />
                </div>
                <DialogConfirmCommon
                    message={"Bạn có muốn xóa danh mục tin tức này ra khỏi hệ thống"}
                    titleCancel={"Bỏ qua"}
                    titleOk={"Xóa"}
                    visible={isDeleteModal}
                    handleCancel={onCloseModalDelete}
                    handleOk={onDeleteAsync}
                    title={"Xác nhận"}
                />
            </div>
            <FullPageLoading isLoading={loading} />
        </AdminLayout>

    );
}
export default BlogCategoryListPage;