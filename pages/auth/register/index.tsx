import React, { useState } from 'react'
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import { Form, Input } from 'antd';
import router from 'next/router';
import Link from 'next/link';
import { FullPageLoading } from '@/infrastructure/common/loader/loading';
import { ROUTE_PATH } from '@/core/common/appRouter';
import authService from '@/infrastructure/repository/auth/auth.service';

const RegisterPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Đăng kí',
        },
    ];
    const [loading, setLoading] = useState<boolean>(false)
    const handleLoginSubmit = async (values: any) => {
        try {
            const response = await authService.register(
                {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                },
                setLoading
            );

            if (response) {
                router.push(ROUTE_PATH.HOMEPAGE);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };


    return (
        <MainLayoutPublic>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} layout={'fullwidth'} />
                <div className="ps-my-account">
                    <div className="container">
                        <Form
                            className="ps-form--account"
                            onFinish={handleLoginSubmit}>
                            <ul className="ps-tab-list">
                                <li>
                                    <Link href="/auth/login">
                                        <a>Đăng nhập</a>
                                    </Link>
                                </li>
                                <li className="active">
                                    <Link href="/auth/register">
                                        <a>Đăng kí</a>
                                    </Link>
                                </li>
                            </ul>
                            <div className="ps-tab active" id="sign-in">
                                <div className="ps-form__content">
                                    <h5>Đăng kí tài khoản</h5>
                                    <div className="form-group">
                                        <Form.Item
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập tên!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="Tên"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group">
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập Eamil!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group form-forgot">
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập mật khẩu!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="password"
                                                placeholder="Mật khẩu..."
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group submit">
                                        <button
                                            type="submit"
                                            className="ps-btn ps-btn--fullwidth">
                                            Đăng kí
                                        </button>
                                    </div>
                                    <div className="ps-form__footer"></div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <FullPageLoading isLoading={loading} />
        </MainLayoutPublic>
    )
}

export default RegisterPage