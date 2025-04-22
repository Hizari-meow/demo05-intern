'use client'
import React from 'react';
import { Menu, Layout, Badge, Avatar, Dropdown } from 'antd';
import {
    AppstoreOutlined,
    UserOutlined,
    TeamOutlined,
    SettingOutlined,
    BellOutlined,
    GlobalOutlined,
    FolderOpenOutlined,
    DownOutlined,
} from '@ant-design/icons';
import './Sidebar.module.scss';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
    const languageMenu = (
        <Menu>
            <Menu.Item key="vi">Tiếng Việt</Menu.Item>
            <Menu.Item key="en">English</Menu.Item>
        </Menu>
    );

    const userMenu = (
        <Menu>
            <Menu.Item key="logout">Đăng xuất</Menu.Item>
        </Menu>
    );

    return (
        <Sider className="sidebar">
            <div className="sidebar__logo">
                <img src="/logo.svg" alt="ERATEQ Logo" />
                <span className="sidebar__company">Công Ty Cổ Phần ERATEQ</span>
            </div>
            <Menu mode="inline" className="sidebar__menu" defaultSelectedKeys={['cong-viec']}>
                <Menu.Item key="quan-ly" icon={<AppstoreOutlined />}>
                    Quản lý
                </Menu.Item>
                <Menu.Item key="cong-viec" icon={<FolderOpenOutlined />} className="sidebar__menu--active">
                    Công việc
                </Menu.Item>
                <Menu.Item key="nhan-vien-cua-toi" icon={<UserOutlined />}>
                    Nhân viên của tôi
                </Menu.Item>
                <Menu.Item key="bo-phan" icon={<TeamOutlined />}>
                    Bộ phận & phòng ban
                </Menu.Item>
                <Menu.SubMenu key="cau-hinh" icon={<SettingOutlined />} title="Cấu hình hệ thống">
                    <Menu.Item key="cau-hinh-nhan-vien">Cấu hình nhân viên</Menu.Item>
                    <Menu.Item key="cau-hinh-phan-quyen">Cấu hình phân quyền</Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <div className="sidebar__footer">
                <div className="sidebar__notifications">
                    <Badge count={12}>
                        <BellOutlined />
                    </Badge>
                </div>
                <div className="sidebar__language">
                    <Dropdown overlay={languageMenu} trigger={['click']}>
                        <div>
                            <GlobalOutlined /> Tiếng Việt <DownOutlined />
                        </div>
                    </Dropdown>
                </div>
                <div className="sidebar__user">
                    <Dropdown overlay={userMenu} trigger={['click']}>
                        <div className="sidebar__user-info">
                            <Avatar className="sidebar__avatar">NG</Avatar>
                            <div>
                                <div className="sidebar__username">Nguyễn Mạnh Hùng</div>
                                <div className="sidebar__email">manhhung@simmons.com</div>
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Sider>
    );
};

export default Sidebar;
