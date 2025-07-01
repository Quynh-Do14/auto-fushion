import React, { useState } from 'react'
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import { Form, Input } from 'antd';
import router from 'next/router';
import Link from 'next/link';
import authService from '@/infrastructure/repository/auth/auth.service';
import { ROUTE_PATH } from '@/core/common/appRouter';

const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Tràng chủ',
            url: '/',
        },
        {
            text: 'Đăng nhập',
        },
    ];
    const [loading, setLoading] = useState<boolean>(false)

    const handleLoginSubmit = async (values: any) => {
        console.log("values", values);

        try {
            const response = await authService.login(
                {
                    email: values.email,
                    password: values.password,
                },
                () => { },
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
                                <li className="active">
                                    <Link href="/auth/login">
                                        <a>Đăng nhập</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/auth/register">
                                        <a>Đăng kí</a>
                                    </Link>
                                </li>
                            </ul>
                            <div className="ps-tab active" id="sign-in">
                                <div className="ps-form__content">
                                    <h5>Đăng nhập vào hệ thống</h5>
                                    <div className="form-group">
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="email"
                                                placeholder="Username or email address"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group form-forgot">
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="password"
                                                placeholder="Password..."
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group submit">
                                        <button
                                            type="submit"
                                            className="ps-btn ps-btn--fullwidth">
                                            Đăng nhập
                                        </button>
                                    </div>
                                    <div className="ps-form__footer"></div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </MainLayoutPublic>
    )
}

export default LoginPage