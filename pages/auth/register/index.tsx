import React from 'react'
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import { Form, Input } from 'antd';
import Router from 'next/router';
import Link from 'next/link';

const RegisterPage = () => {
    const breadCrumb = [
        {
            text: 'Tràng chủ',
            url: '/',
        },
        {
            text: 'Đăng kí',
        },
    ];
    const handleLoginSubmit = () => {
        Router.push('/');
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
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="text"
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
        </MainLayoutPublic>
    )
}

export default RegisterPage