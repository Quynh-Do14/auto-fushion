import { ROUTE_PATH } from '@/core/common/appRouter'
import AdminLayout from '@/infrastructure/common/layout/admin/MainLayout'
import React, { useEffect, useState } from 'react'
import styles from '@/asset/css/admin/admin-component.module.css';
import ButtonCommon from '@/infrastructure/common/button/ButtonCommon';
import { Col, Row } from 'antd';
import InputTextCommon from '@/infrastructure/common/input/input-text-common';
import InputSelectCommon from '@/infrastructure/common/input/select-common';
import ButtonHref from '@/infrastructure/common/button/ButtonHref';
import { useRouter } from 'next/router';
import { WarningMessage } from '@/infrastructure/common/toast/message';
import { FullPageLoading } from '@/infrastructure/common/loader/loading';
import TextAreaCommon from '@/infrastructure/common/input/textarea-common';
import UploadAvatar from '@/infrastructure/common/input/upload-image';
import { configImageURL } from '@/infrastructure/helper/helper';
import TextEditorCommon from '@/infrastructure/common/input/text-editor-common';
import { useRecoilValue } from 'recoil';
import { CategoryBlogState } from '@/core/atoms/category/categoryState';
import blogService from '@/infrastructure/repository/blog/blog.service';

const SlugBlogManagement = () => {
    const [detail, setDetail] = useState<any>({});
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [validate, setValidate] = useState<any>({});
    const [submittedTime, setSubmittedTime] = useState<any>();
    const [_data, _setData] = useState<any>({});
    const dataRequest = _data;

    const setDataRequest = (data: any) => {
        Object.assign(dataRequest, { ...data });
        _setData({ ...dataRequest });
    };

    const isValidData = () => {
        let allRequestOK = true;

        setValidate({ ...validate });

        Object.values(validate).forEach((it: any) => {
            if (it.isError === true) {
                allRequestOK = false;
            }
        });
        return allRequestOK;
    };
    const categoryBlog = useRecoilValue(CategoryBlogState).data;
    const router = useRouter();
    const { query } = router;
    const onBack = () => {
        router.push(ROUTE_PATH.BLOG_MANAGEMENT)
    }

    const onGetByIdAsync = async () => {
        if (query.slug) {
            try {
                await blogService.GetBlogById(
                    String(query.slug),
                    setLoading
                ).then((res) => {
                    setDetail(res)
                })
            }
            catch (error) {
                console.error(error)
            }
        }

    }
    useEffect(() => {
        onGetByIdAsync().then(() => { })
    }, [query.slug])

    useEffect(() => {
        if (detail) {
            const fullImage = configImageURL(detail.image);
            setOriginalImage(fullImage);
            setDataRequest({
                image: configImageURL(detail.image),
                title: detail.title,
                short_description: detail.short_description,
                blog_category_id: detail.blog_category_id,
                description: detail.description,

            });
        };
    }, [detail]);

    const onUpdateAsync = async () => {
        await setSubmittedTime(Date.now());

        if (isValidData()) {
            try {
                const payload: any = {
                    title: dataRequest.title,
                    short_description: dataRequest.short_description,
                    blog_category_id: dataRequest.blog_category_id,
                    description: dataRequest.description,
                };

                if (dataRequest.image !== originalImage) {
                    payload.image = dataRequest.image;
                }

                await blogService.UpdateBlogAdmin(
                    String(query.slug),
                    payload,
                    onBack,
                    setLoading
                );
            } catch (error) {
                console.error(error);
            }
        } else {
            WarningMessage("Nhập thiếu thông tin", "Vui lòng nhập đầy đủ thông tin");
        }
    };

    return (
        <AdminLayout
            breadcrumb={"Quản lý tin tức"}
            title={"Thêm tin tức"}
            redirect={ROUTE_PATH.BLOG_MANAGEMENT}
        >
            <div className={styles.manage_container}>
                <div className={styles.headerPage}>
                    <h2>Cập nhật tin tức</h2>
                    <div className={styles.btn_container}>
                        <ButtonHref
                            href={ROUTE_PATH.BLOG_MANAGEMENT}
                            title={'Quay lại'}
                            width={150}
                            variant={'ps-btn--gray'}
                        />
                        <ButtonCommon
                            onClick={onUpdateAsync}
                            title={'Cập nhật'}
                            width={150}
                            variant={'ps-btn--fullwidth'}
                        />
                    </div>
                </div>
                <div className={styles.table_container}>
                    <Row align="top">
                        <Col xs={24} sm={24} md={10} lg={8} xl={6} xxl={5} className={styles.form_container}>
                            <UploadAvatar
                                dataAttribute={dataRequest.image}
                                setData={setDataRequest}
                                attribute={'image'}
                                label={'Ảnh'}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={14} lg={16} xl={18} xxl={19} className={styles.form_container}>
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <InputTextCommon
                                        label={"Tên danh mục"}
                                        attribute={"title"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.title}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                                <Col span={24}>
                                    <InputSelectCommon
                                        label={"Mô tả ngắn"}
                                        attribute={"blog_category_id"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.blog_category_id}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                        listDataOfItem={categoryBlog}
                                    />
                                </Col>
                                <Col span={24}>
                                    <TextAreaCommon
                                        label={"Mô tả ngắn"}
                                        attribute={"short_description"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.short_description}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                                <Col span={24}>
                                    <TextEditorCommon
                                        label={"Mô tả"}
                                        attribute={"description"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.description}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <FullPageLoading isLoading={loading} />
        </AdminLayout >
    )
}

export default SlugBlogManagement