'use client'
import React from 'react';
import { Row, Col, Card, DatePicker, Button, Input, Progress, Avatar } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { Pie } from '@ant-design/charts';
import './Dashboard.scss';
import WorkReport from '../WorkReport/WorkReport';
import ChartSection from '../ChartSection/ChartSection';

const { RangePicker } = DatePicker;

interface CardItem {
  color: string;
  text: string;
}

interface StatCard {
  title: string;
  number: string;
  subtitle: string;
  items: CardItem[];
}

interface TaskData {
  type: string;
  value: number;
  color: string;
}

interface ChartConfig {
  angleField: string;
  colorField: string;
  radius: number;
  innerRadius: number;
  label: boolean;
  legend: boolean;
  animation: boolean;
  statistic: null;
  width: number;
  height: number;
  data?: { type: string; value: number; color: string }[];
}

interface Employee {
  name: string;
  avatar: string;
  completed: string;
  progress: number;
}

const DashBoard: React.FC = () => {
  const cards: StatCard[] = [
    {
      title: 'Bộ phận',
      number: '6',
      subtitle: 'BỘ PHẬN',
      items: [
        { color: 'blue', text: '6 dự án nội bộ' },
        { color: 'purple', text: '0 dự án bên ngoài' },
      ],
    },
    {
      title: 'Phòng ban',
      number: '3',
      subtitle: 'PHÒNG BAN',
      items: [
        { color: 'blue', text: '3 phòng ban nội bộ' },
        { color: 'purple', text: '0 phòng ban bên ngoài' },
      ],
    },
    {
      title: 'Công việc',
      number: '96',
      subtitle: 'CÔNG VIỆC',
      items: [
        { color: 'blue', text: '75 đang thực hiện' },
        { color: 'green', text: '16 đã hoàn thành' },
      ],
    },
    {
      title: 'Nhân viên',
      number: '30',
      subtitle: 'NHÂN VIÊN',
      items: [
        { color: 'green', text: '30 tài khoản nhân viên hoạt động' },
        { color: 'red', text: '0 tài khoản nhân viên khoá' },
      ],
    },
  ];

  const taskStatusData: TaskData[] = [
    { type: 'đang thực hiện', value: 75, color: '#2D7BF4' },
    { type: 'đã hoàn thành', value: 16, color: '#30D158' },
    { type: 'tạo mới', value: 4, color: '#FF453A' },
    { type: 'quá hạn', value: 1, color: '#FF9500' },
    { type: 'chờ kiểm tra', value: 0, color: '#FFCC00' },
  ];

  const baseChartConfig: ChartConfig = {
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.75,
    label: false,
    legend: false,
    animation: false,
    statistic: null,
    width: 171.6559295654297,
    height: 171.6559295654297,
  };

  const inProgressConfig: ChartConfig = {
    ...baseChartConfig,
    data: [
      { type: 'progress', value: 75, color: '#2D7BF4' },
      { type: 'remaining', value: 25, color: '#FF9500' },
    ],
  };

  const overdueConfig: ChartConfig = {
    ...baseChartConfig,
    data: [
      { type: 'overdue', value: 75, color: '#FF453A' },
      { type: 'remaining', value: 25, color: '#FF9500' },
    ],
  };

  const employees: Employee[] = [
    { name: 'Nguyễn Quốc Việt', avatar: '/avatars/1.png', completed: '13/67 công việc đã hoàn thành', progress: 19.4 },
    { name: 'Võ Hoàng Tuấn', avatar: '/avatars/2.png', completed: '13/67 công việc đã hoàn thành', progress: 19.4 },
    { name: 'Kim Văn Hoàn', avatar: '/avatars/3.png', completed: '13/67 công việc đã hoàn thành', progress: 19.4 },
    { name: 'Nguyễn Minh Phúc', avatar: '/avatars/4.png', completed: '13/67 công việc đã hoàn thành', progress: 19.4 },
    { name: 'Lê Văn Đạt', avatar: '/avatars/5.png', completed: '13/67 công việc đã hoàn thành', progress: 19.4 },
    { name: 'Nguyễn Văn Nam', avatar: '/avatars/6.png', completed: '13/67 công việc đã hoàn thành', progress: 19.4 },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <Row gutter={[16, 0]} align="middle">
          <Col>
            <RangePicker placeholder={['__/__/____', '__/__/____']} />
          </Col>
          <Col>
            <Button className="filter-button">
              <FilterOutlined />
              Tất cả bộ phận
            </Button>
          </Col>
          <Col>
            <Button className="filter-button">
              <FilterOutlined />
              Tất cả trạng thái công việc
            </Button>
          </Col>
          <Col flex="auto">
            <Input
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
              className="search-input"
            />
          </Col>
        </Row>
      </div>

      <Row style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        {cards.map((card, index) => (
          <Card className="stat-card" key={index}>
            <div className="stat-card__header">
              <h2>{card.title}</h2>
            </div>
            <div className="stat-card__main">
              <div className="number">{card.number}</div>
              <div className="subtitle-container">
                <div className="subtitle">{card.subtitle}</div>
                <div className="stat-card__items">
                  {card.items.map((item, idx) => (
                    <div key={idx} className="item">
                      <span className={`dot dot--${item.color}`} />
                      <span className="text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Row>

      <Row style={{ display: 'flex', gap: '20px' }}>
        <Card title="Trạng thái công việc" className="detail-card">
          <div className="chart-container">
            <div className="chart">
              <div className="chart-wrapper">
                <Pie {...baseChartConfig} data={taskStatusData} />
                <div className="chart-center">
                  <div className="value">96</div>
                  <div className="label">Công việc</div>
                </div>
              </div>
            </div>
            <div className="legend">
              {taskStatusData.map((item, index) => (
                <div className="legend-item" key={index}>
                  <span className="dot" style={{ backgroundColor: item.color }} />
                  <span className="value">{item.value}</span>
                  <span className="label">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card title="Công việc đang thực hiện" className="detail-card">
          <div className="chart-container">
            <div className="chart-content">
              <div className="chart">
                <div className="chart-wrapper">
                  <Pie {...inProgressConfig} />
                </div>
              </div>
              <div className="chart-info">
                <div className="info-row">
                  <div className="info-item">
                    <div className="info-dot" style={{ backgroundColor: '#1890FF' }}></div>
                    <div className="info-content">
                      <div className="info-numbers">
                        <span className="number">75</span>
                        <span className="text">CÔNG VIỆC ĐANG THỰC HIỆN</span>
                      </div>
                      <div className="info-total">TRÊN 96 CÔNG VIỆC</div>
                    </div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-item">
                    <div className="info-dot" style={{ backgroundColor: '#FFA940' }}></div>
                    <div className="info-content">
                      <div className="info-numbers">
                        <span className="number">5</span>
                        <span className="text">CÔNG VIỆC ĐANG CHỜ KIỂM TRA</span>
                      </div>
                      <div className="info-total">TRÊN 15 CÔNG VIỆC ĐÃ HOÀN THÀNH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart-footer">
              4/11 bộ phận và phòng ban cho phép kiểm tra lại công việc
            </div>
          </div>
        </Card>

        <Card title="Công việc không đúng hạn" className="detail-card">
          <div className="chart-container">
            <div className="chart-content">
              <div className="chart">
                <div className="chart-wrapper">
                  <Pie {...overdueConfig} />
                </div>
              </div>
              <div className="chart-info">
                <div className="info-row">
                  <div className="info-item">
                    <div className="info-dot" style={{ backgroundColor: '#FF4D4F' }}></div>
                    <div className="info-content">
                      <div className="info-numbers">
                        <span className="number">64</span>
                        <span className="text">CÔNG VIỆC QUÁ HẠN</span>
                      </div>
                      <div className="info-total">TRÊN 74 CÔNG VIỆC ĐANG THỰC HIỆN</div>
                    </div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-item">
                    <div className="info-dot" style={{ backgroundColor: '#FFA940' }}></div>
                    <div className="info-content">
                      <div className="info-numbers">
                        <span className="number">5</span>
                        <span className="text">CÔNG VIỆC HOÀN THÀNH MUỘN</span>
                      </div>
                      <div className="info-total">TRÊN 16 CÔNG VIỆC ĐÃ HOÀN THÀNH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart-footer">
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#8C8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 5.5V8.5" stroke="#8C8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 11.5C8.41421 11.5 8.75 11.1642 8.75 10.75C8.75 10.3358 8.41421 10 8 10C7.58579 10 7.25 10.3358 7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5Z" fill="#8C8C8C" />
                </svg>
                11 Công việc đã tạo không có thời hạn
              </span>
            </div>
          </div>
        </Card>

        <Card title="Tiến độ hoàn thành" className="detail-card">
          <div className="progress-list">
            {employees.map((employee, index) => (
              <div key={index} className="progress-item">
                <div className="info">
                  <Avatar src={employee.avatar} />
                  <div className="details">
                    <div className="name">{employee.name}</div>
                    <div className="completed">{employee.completed}</div>
                  </div>
                </div>
                <Progress percent={employee.progress} strokeColor="#30D158" showInfo={false} />
              </div>
            ))}
          </div>
        </Card>
      </Row>

      <ChartSection />

      <WorkReport />
    </div>
  );
};

export default DashBoard;
