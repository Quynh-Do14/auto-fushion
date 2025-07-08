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
import TextEditorCommon from '@/infrastructure/common/input/text-editor-common';
import { useRecoilValue } from 'recoil';
import { BrandState } from '@/core/atoms/brand/brandState';
import { CategoryProductState } from '@/core/atoms/category/categoryState';
import InputSelectCommon from '@/infrastructure/common/input/select-common';
import InputArrayTextCommon from '@/infrastructure/common/input/input-array/input-array-text-common';
import UploadListImage from '@/infrastructure/common/input/upload-list-image';
import InputNumberCommon from '@/infrastructure/common/input/input-number';
import productService from '@/infrastructure/repository/product/product.service';
import TextAreaCommon from '@/infrastructure/common/input/textarea-common';

const AddProductManagement = () => {
    const [figureList, setFigureList] = useState<any[]>([
        {
            index: 0,
            key: "",
            value: 0
        },
    ])
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
    const brandState = useRecoilValue(BrandState).data;
    const categoryProductState = useRecoilValue(CategoryProductState).data;

    const router = useRouter();
    const onBack = () => {
        router.push(ROUTE_PATH.PRODUCT_MANAGEMENT)
    }

    const onCreateAsync = async () => {
        await setSubmittedTime(Date.now());

        if (isValidData()) {
            const listImage: any[] = dataRequest.images;
            const formData = new FormData();

            // Append ảnh
            listImage?.forEach((file) => {
                formData.append('images', file.originFileObj);
            });

            // Append các trường đơn
            formData.append('image', dataRequest.image);
            formData.append('name', dataRequest.name);
            formData.append('category_id', dataRequest.category_id);
            formData.append('brand_id', dataRequest.brand_id);
            formData.append('price', dataRequest.price);
            formData.append('percent_sale', dataRequest.percent_sale);
            formData.append('warranty', dataRequest.warranty);
            formData.append('short_description', dataRequest.short_description);
            formData.append('more_infomation', dataRequest.more_infomation);
            formData.append('description', dataRequest.description);
            formData.append('productFigure', JSON.stringify(figureList));

            try {
                await productService.AddProductAdmin(formData, onBack, setLoading);
            } catch (error) {
                console.error(error);
            }
        } else {
            WarningMessage("Nhập thiếu thông tin", "Vui lòng nhập đầy đủ thông tin");
        }
    };

    const onAddFigure = () => {
        setFigureList([
            ...figureList,
            {
                index: Number(figureList.length - 1) + 1,
                key: "",
                value: ""
            },
        ])
    }
    const onDeleteOption = (index: number) => {
        if (index > 0) {
            const spliceOption = [...figureList];
            spliceOption.splice(index, 1)
            setFigureList(spliceOption)
        }
    }

    return (
        <AdminLayout
            breadcrumb={"Quản lý sản phẩm"}
            title={"Thêm sản phẩm"}
            redirect={ROUTE_PATH.PRODUCT_MANAGEMENT}
        >
            <div className={styles.manage_container}>
                <div className={styles.headerPage}>
                    <h2>Thêm sản phẩm</h2>
                    <div className={styles.btn_container}>
                        <ButtonHref
                            href={ROUTE_PATH.PRODUCT_MANAGEMENT}
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
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <InputSelectCommon
                                        label={"Danh mục"}
                                        attribute={"category_id"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.category_id}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                        listDataOfItem={categoryProductState}
                                    />
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <InputSelectCommon
                                        label={"Thương hiệu"}
                                        attribute={"brand_id"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.brand_id}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                        listDataOfItem={brandState}
                                    />
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <InputNumberCommon
                                        label={"Giá"}
                                        attribute={"price"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.price}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <InputNumberCommon
                                        label={"Giảm giá (%)"}
                                        attribute={"percent_sale"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.percent_sale}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                        max={100}
                                        min={0}
                                    />
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <InputTextCommon
                                        label={"Bảo hành"}
                                        attribute={"warranty"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.warranty}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <InputTextCommon
                                        label={"Năm bảo hành"}
                                        attribute={"year"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.year}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                                <Col span={24}>
                                    <UploadListImage
                                        label={"Hình ảnh"}
                                        attribute={"images"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.images}
                                        dataAttributeImageFiles={[]}
                                        setData={setDataRequest}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>

                                <Col span={24}>
                                    <div className={styles.figureContainer}>
                                        <div className={styles.figureHeader} onClick={onAddFigure}>
                                            <span>Thông số</span>
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        </div>

                                        {figureList.map((item, index) => (
                                            <div key={index} className={styles.figureBox}>
                                                <div className={styles.figureIndex}>
                                                    <span>Thông số {index + 1}</span>
                                                    <div onClick={() => onDeleteOption(index)}>
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <Row gutter={[16, 16]}>
                                                    <Col xs={24} sm={24} md={12}>
                                                        <InputArrayTextCommon
                                                            label={"Tên thông số"}
                                                            attribute={"key"}
                                                            isRequired={true}
                                                            dataAttribute={item.key}
                                                            setData={setFigureList}
                                                            disabled={false}
                                                            validate={validate}
                                                            setValidate={setValidate}
                                                            submittedTime={submittedTime}
                                                            index={index}
                                                            data={figureList}
                                                        />
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12}>
                                                        <InputArrayTextCommon
                                                            label={"Giá trị"}
                                                            attribute={"value"}
                                                            isRequired={true}
                                                            dataAttribute={item.value}
                                                            setData={setFigureList}
                                                            disabled={false}
                                                            validate={validate}
                                                            setValidate={setValidate}
                                                            submittedTime={submittedTime}
                                                            index={index}
                                                            data={figureList}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </div>
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
                                        label={"Thông tin thêm"}
                                        attribute={"more_infomation"}
                                        isRequired={true}
                                        dataAttribute={dataRequest.more_infomation}
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
            </div >
            <FullPageLoading isLoading={loading} />
        </AdminLayout >
    )
}

export default AddProductManagement