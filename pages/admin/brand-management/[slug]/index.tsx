import { ROUTE_PATH } from '@/core/common/appRouter'
import AdminLayout from '@/infrastructure/common/layout/admin/MainLayout'
import React, { useEffect, useState } from 'react'
import styles from '@/asset/css/admin/admin-component.module.css';
import ButtonCommon from '@/infrastructure/common/button/ButtonCommon';
import { Col, Row } from 'antd';
import InputTextCommon from '@/infrastructure/common/input/input-text-common';
import ButtonHref from '@/infrastructure/common/button/ButtonHref';
import { useRouter } from 'next/router';
import { WarningMessage } from '@/infrastructure/common/toast/message';
import { FullPageLoading } from '@/infrastructure/common/loader/loading';
import UploadAvatar from '@/infrastructure/common/input/upload-image';
import { configImageURL } from '@/infrastructure/helper/helper';
import brandService from '@/infrastructure/repository/brand/brand.service';

const SlugBrandManagement = () => {
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
    const router = useRouter();
    const { query } = router;
    const onBack = () => {
        router.push(ROUTE_PATH.BRAND_MANAGEMENT)
    }

    const onGetByIdAsync = async () => {
        if (query.slug) {
            try {
                await brandService.GetBrandById(
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
                name: detail.name,

            });
        };
    }, [detail]);

    const onUpdateAsync = async () => {
        await setSubmittedTime(Date.now());

        if (isValidData()) {
            try {
                const payload: any = {
                    name: dataRequest.name,
                };

                if (dataRequest.image !== originalImage) {
                    payload.image = dataRequest.image;
                }

                await brandService.UpdateBrandAdmin(
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
            breadcrumb={"Quản lý thương hiệu"}
            title={"Thêm thương hiệu"}
            redirect={ROUTE_PATH.BRAND_MANAGEMENT}
        >
            <div className={styles.manage_container}>
                <div className={styles.headerPage}>
                    <h2>Cập nhật thương hiệu</h2>
                    <div className={styles.btn_container}>
                        <ButtonHref
                            href={ROUTE_PATH.BRAND_MANAGEMENT}
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
                                    attribute={"name"}
                                    isRequired={true}
                                    dataAttribute={dataRequest.name}
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
            <FullPageLoading isLoading={loading} />
        </AdminLayout >
    )
}

export default SlugBrandManagement