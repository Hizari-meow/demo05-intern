'use client'
import React from 'react';
import { Table, Button, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DownloadOutlined } from '@ant-design/icons';
import './WorkReport.scss';

interface EmployeeReport {
  key: string;
  name: string;
  completionRate: number;
  assigned: number;
  received: number;
  inProgress: number;
  pending: number;
  completed: number;
  overdue: number;
}

const WorkReport: React.FC = () => {
  const columns: ColumnsType<EmployeeReport> = [
    {
      title: 'Nhân viên',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Tỷ lệ hoàn thành',
      dataIndex: 'completionRate',
      key: 'completionRate',
      width: 150,
      render: (value) => (
        <div className="completion-rate">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${value}%` }} />
          </div>
          <span>{value}%</span>
        </div>
      ),
    },
    {
      title: 'Giao',
      dataIndex: 'assigned',
      key: 'assigned',
      width: 100,
    },
    {
      title: 'Được giao',
      dataIndex: 'received',
      key: 'received',
      width: 100,
    },
    {
      title: 'Đang thực hiện',
      dataIndex: 'inProgress',
      key: 'inProgress',
      width: 120,
      render: (value) => <span style={{ color: '#1890FF' }}>{value}</span>,
    },
    {
      title: 'Chờ kiểm tra',
      dataIndex: 'pending',
      key: 'pending',
      width: 120,
      render: (value) => <span style={{ color: '#FAAD14' }}>{value}</span>,
    },
    {
      title: 'Đã hoàn thành',
      dataIndex: 'completed',
      key: 'completed',
      width: 120,
      render: (value) => <span style={{ color: '#52C41A' }}>{value}</span>,
    },
    {
      title: 'Quá hạn',
      dataIndex: 'overdue',
      key: 'overdue',
      width: 100,
      render: (value) => <span style={{ color: '#FF4D4F' }}>{value}</span>,
    },
  ];

  const data: EmployeeReport[] = [
    {
      key: '1',
      name: 'Đào Xuân Hòa',
      completionRate: 19.4,
      assigned: 15,
      received: 50,
      inProgress: 20,
      pending: 5,
      completed: 10,
      overdue: 1,
    },
    {
      key: '2',
      name: 'Nguyễn Mạnh Hùng',
      completionRate: 19.4,
      assigned: 13,
      received: 50,
      inProgress: 20,
      pending: 5,
      completed: 10,
      overdue: 1,
    },
    {
      key: '3',
      name: 'Đàm Đức Duy',
      completionRate: 19.4,
      assigned: 13,
      received: 50,
      inProgress: 20,
      pending: 5,
      completed: 10,
      overdue: 1,
    },
    {
      key: '4',
      name: 'Trần Đình Tuấn',
      completionRate: 19.4,
      assigned: 13,
      received: 50,
      inProgress: 20,
      pending: 5,
      completed: 10,
      overdue: 1,
    },
    {
      key: '5',
      name: 'Nguyễn Khánh Linh',
      completionRate: 19.4,
      assigned: 13,
      received: 50,
      inProgress: 20,
      pending: 5,
      completed: 10,
      overdue: 1,
    },
  ];

  const itemRender = (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement: React.ReactNode) => {
    return originalElement;
  };

  return (
    <div className="work-report">
      <div className="report-header">
        <div className="title">
          <h2>Báo cáo công việc được giao theo nhân viên</h2>
          <p>Xem chi tiết về tỷ lệ hoàn thành công việc, số lượng công việc được giao & đã giao của nhân viên, thống kê số liệu về trạng thái công việc</p>
        </div>
        <Button icon={<DownloadOutlined />}>Xuất tệp</Button>
      </div>
      <Table 
        columns={columns} 
        dataSource={data}
        pagination={false}
      />
      <div className="custom-pagination">
        <div className="pagination-controls">
          <button className="pagination-prev">&lt;</button>
          <button className="pagination-item active">1</button>
          <button className="pagination-item">2</button>
          <button className="pagination-next">&gt;</button>
        </div>
        <div className="pagination-info">
          <span className="total-text">1 - 8 trong tổng số 40 mục</span>
          <div className="size-changer">
            8
            <span className="dropdown-icon">▼</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkReport;
