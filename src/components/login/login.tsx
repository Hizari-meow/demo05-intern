'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import './login.scss';

export default function LoginPage() {
    const [form] = Form.useForm();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);

    const handlePrevSlide = () => {
        setCurrentSlide(curr => (curr > 0 ? curr - 1 : 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide(curr => (curr < 1 ? curr + 1 : 0));
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <div className="login-container">
            {/* Left section - Illustrations */}
            <div className="left-section">
                <div className="content">
                    <div className="illustrations">
                        <img
                            src="/images/Framelogin1.png"
                            alt="Login Illustration 1"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: currentSlide === 0 ? 'block' : 'none'
                            }}
                        />
                        <img
                            src="/images/Framelogin2.png"
                            alt="Login Illustration 2"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: currentSlide === 1 ? 'block' : 'none'
                            }}
                        />
                    </div>

                    <div className="text-content">
                        <h2>Tiện ích</h2>
                        <p>Chào mừng bạn trở lại! Hãy nhập thông tin tài khoản để tiếp tục.</p>
                    </div>
                    <div className="navigation">
                        <div className="dots">
                            <div className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)} />
                            <div className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)} />
                        </div>

                        <div className="arrows">
                            <button onClick={handlePrevSlide}>←</button>
                            <button className="next" onClick={handleNextSlide}>→</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right section - Login Form */}
            <div className="right-section">
                <div className="login-form-container">
                    <div className="form-header">
                        <img
                            src="/images/Erateq-Logo.png"
                            alt="Erateq Logo"
                            className="login-logo"
                            style={{ height: '40px', width: 'auto', marginBottom: '2rem' }}
                        />
                        <h1>Đăng nhập vào hệ thống</h1>
                        <p>Chào mừng bạn trở lại! Hãy nhập thông tin tài khoản để tiếp tục.</p>
                    </div>

                    <Form
                        form={form}
                        name="login"
                        onFinish={onFinish}
                        className="login-form"
                        layout="vertical"
                    >
                        <Form.Item
                            label="Tên đăng nhập"
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Placeholder"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Placeholder"
                                size="large"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" className="remember-password">
                            <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                block
                                size="large"
                                style={{ background: '#52c41a' }}
                                loading={loading}
                            >
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
