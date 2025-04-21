"use client";

import React from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import styles from './EmployeeList.module.scss';

interface EmployeeItem {
    name: string;
    title: string;
    Icon: React.ComponentType;
    color: string;
}

const employeeData: EmployeeItem[] = [
    {
        name: 'Nguyễn Minh Hùng',
        title: 'Lễ tân',
        Icon: UserOutlined,
        color: 'red',
    },
    {
        name: 'Nguyễn Khánh Linh',
        title: 'Lễ tân',
        Icon: UserOutlined,
        color: 'red',
    },
    {
        name: 'Đàm Đức Duy',
        title: 'Lễ tân',
        Icon: TeamOutlined,
        color: 'blue',
    },
    {
        name: 'Đào Xuân Hòa',
        title: 'Lễ tân',
        Icon: TeamOutlined,
        color: 'blue',
    },
    {
        name: 'Trần Đình Tuấn',
        title: 'Lễ tân',
        Icon: UsergroupAddOutlined,
        color: 'orange',
    },
];

const EmployeeList: React.FC<{ employees: EmployeeItem[] }> = ({ employees }) => {
    return (
        <List
            className={styles['employee-list']}
            itemLayout="horizontal"
            dataSource={employees}
            renderItem={(item) => (
                <List.Item className={styles['employee-list__item']}>
                    <List.Item.Meta
                        avatar={
                            <Avatar className={styles['employee-list__avatar']} style={{ backgroundColor: item.color }}>
                                <item.Icon />
                            </Avatar>
                        }
                        title={item.name}
                        description={item.title}
                    />
                </List.Item>
            )}
        />
    );
};

// Usage example
const MyEmployeeList = () => <EmployeeList employees={employeeData} />;

export default MyEmployeeList;