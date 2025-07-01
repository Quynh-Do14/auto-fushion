'use client';
import React, { useEffect, useState } from 'react';
import { Table, Input, Pagination, Space, Button } from 'antd';
import styles from '@/asset/css/admin-component.module.css';
import AdminLayout from '@/infrastructure/common/layout/admin/MainLayout';
import ButtonCommon from '@/infrastructure/common/button/ButtonCommon';
import userService from '@/infrastructure/repository/user/user.service';
import { useRouter } from 'next/router';
import Constants from '@/core/common/constants';
import { TitleTableCommon } from '@/infrastructure/common/text/title-table-common';
import { ActionCommon } from '@/infrastructure/common/action/action-common';
import { ROUTE_PATH } from '@/core/common/appRouter';

let timeout: any
const UserListPage = () => {
    const [listResponse, setListResponse] = useState<Array<any>>([])
    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchText, setSearchText] = useState<string>("");

    const [idSelected, setIdSelected] = useState<string>("");

    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const onGetListAsync = async ({ name = "", size = pageSize, page = currentPage }) => {
        const param = {
            page: page - 1,
            size: size,
            keyword: name,
        }
        try {
            await userService.GetUser(
                param,
                setLoading
            ).then((res) => {
                setListResponse(res.content)
                setTotal(res.page.totalElements)
            })
        }
        catch (error) {
            console.error(error)
        }
    }
    const onSearch = async (name = "", size = pageSize, page = 1) => {
        await onGetListAsync({ name: name, size: size, page: page });
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
        await onSearch(searchText, pageSize, value,).then(_ => { });
    };

    const onPageSizeChanged = async (value: any) => {
        setPageSize(value)
        setCurrentPage(1)
        await onSearch(searchText, value, 1,).then(_ => { });
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
            await userService.DeleteUser(
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
            breadcrumb={"Quản lý người dùng"}
            title={"Quản lý người dùng"}
            redirect={"/admin/user-management"}
        >
            <div className={styles.manage_container}>
                <h2>Quản lý người dùng</h2>
                <div className={styles.searchBar}>
                    <Input
                        className="form-control"
                        placeholder="Tìm kiếm theo tên hoặc email"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <ButtonCommon
                        onClick={() => { }}
                        title={'Thêm mới'}
                        width={150}
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
                                    title="Tên người dùng"
                                    width={'200px'}
                                />
                            }
                            key={"name"}
                            dataIndex={"name"}
                        />
                        <Table.Column
                            title={
                                <TitleTableCommon
                                    title="Tên đăng nhập"
                                    width={'200px'}
                                />
                            }
                            key={"username"}
                            dataIndex={"username"}
                        />
                        <Table.Column
                            title={
                                <TitleTableCommon
                                    title="Email"
                                    width={'100px'}
                                />
                            }
                            key={"email"}
                            dataIndex={"email"}
                        />
                        <Table.Column
                            title={
                                <TitleTableCommon
                                    title="Đường dẫn cá nhân"
                                    width={'300px'}
                                />
                            }
                            key={"pathName"}
                            dataIndex={"pathName"}
                            render={(val) => {
                                return (
                                    <div>{val ? `idai.vn/${val}` : ""} </div>
                                )
                            }}
                        />
                        <Table.Column
                            title={
                                <TitleTableCommon
                                    title="Khả dụng"
                                    width={'150px'}
                                />
                            }
                            key={"enabled"}
                            dataIndex={"enabled"}
                            render={(val) => {
                                if (val) {
                                    return (
                                        <div className='bg-[#0d9e6d] py-2 w-full h-full'>
                                            <div className='text-[#ffffff] font-semibold text-center'>
                                                Khả dụng
                                            </div>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className='bg-[#ff443d] py-2 w-full h-full'>
                                            <div className='text-[#ffffff] font-semibold text-center'>
                                                Không khả dụng
                                            </div>
                                        </div>
                                    )
                                }
                            }}
                        />
                        <Table.Column
                            title={
                                <TitleTableCommon
                                    title="Vai trò"
                                    width={'100px'}
                                />
                            }
                            key={"roles"}
                            dataIndex={"roles"}
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
                                    onClickDetail={() => router.push(`${ROUTE_PATH.USER_MANAGEMENT}/${record.id}`)}
                                    onClickDelete={() => onOpenModalDelete(record.id)}

                                />
                            )}
                        />
                    </Table>


                </div>
                <div className={styles.pagination}>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={total}
                        onChange={(page) => setCurrentPage(page)}
                        showSizeChanger={false}
                    />
                </div>
            </div>
        </AdminLayout>

    );
}
export default UserListPage;