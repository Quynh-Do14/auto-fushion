import { ROUTE_PATH } from '@/core/common/appRouter'
import AdminLayout from '@/infrastructure/common/layout/admin/MainLayout'
import React, { useState } from 'react'
import styles from '@/asset/css/admin/admin-component.module.css';
import ButtonCommon from '@/infrastructure/common/button/ButtonCommon';
import { Col, Row } from 'antd';
import InputTextCommon from '@/infrastructure/common/input/input-text-common';
import ButtonHref from '@/infrastructure/common/button/ButtonHref';
import { useRouter } from 'next/router';
import { FullPageLoading } from '@/infrastructure/common/loader/loading';
import { WarningMessage } from '@/infrastructure/common/toast/message';
import UploadAvatar from '@/infrastructure/common/input/upload-image';
import InputSelectCommon from '@/infrastructure/common/input/select-common';
import Constants from '@/core/common/constants';
import bannerService from '@/infrastructure/repository/banner/banner.service';

const AddBannerManagement = () => {
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
    const onBack = () => {
        router.push(ROUTE_PATH.BANNER_MANAGEMENT)
    }
    const onCreateAsync = async () => {
        await setSubmittedTime(Date.now());
        if (isValidData()) {
            try {
                await bannerService.AddBannerAdmin({
                    image: dataRequest.image,
                    name: dataRequest.name,
                    type: dataRequest.type,
                },
                    onBack,
                    setLoading
                )
            }
            catch (error) {
                console.error(error)
            }
        }
        else {
            WarningMessage("Nhập thiếu thông tin", "Vui lòng nhập đầy đủ thông tin")
        };

    };

    return (
        <AdminLayout
            breadcrumb={"Quản lý banner"}
            title={"Thêm banner"}
            redirect={ROUTE_PATH.BANNER_MANAGEMENT}
        >
            <div className={styles.manage_container}>
                <div className={styles.headerPage}>
                    <h2>Thêm banner</h2>
                    <div className={styles.btn_container}>
                        <ButtonHref
                            href={ROUTE_PATH.BANNER_MANAGEMENT}
                            title={'Quay lại'}
                            width={150}
                            variant={'ps-btn--gray'}
                        />
                        <ButtonCommon
                            onClick={onCreateAsync}
                            title={'Thêm mới'}
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
                                    label={"Tên ảnh"}
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
                            <Col span={24}>
                                <InputSelectCommon
                                    label={"Loại ảnh"}
                                    attribute={"type"}
                                    isRequired={true}
                                    dataAttribute={dataRequest.type}
                                    setData={setDataRequest}
                                    disabled={false}
                                    validate={validate}
                                    setValidate={setValidate}
                                    submittedTime={submittedTime}
                                    listDataOfItem={Constants.BannerType.List}
                                    labelName='label'
                                    valueName='value'
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <FullPageLoading isLoading={loading} />
        </AdminLayout>
    )
}

export default AddBannerManagement