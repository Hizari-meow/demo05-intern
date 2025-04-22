'use client'
import React from 'react';
import { Card } from 'antd';
import { Line, Column, LineConfig, ColumnConfig } from '@ant-design/charts';
import './ChartSection.scss';

const ChartSection: React.FC = () => {
      // Configuration for daily progress chart
  const dailyProgressConfig: LineConfig = {
    data: [
      // Tất cả
      { date: '26/03', type: 'Tất cả', value: 15 },
      { date: '27/03', type: 'Tất cả', value: 20 },
      { date: '28/03', type: 'Tất cả', value: 18 },
      { date: '29/03', type: 'Tất cả', value: 25 },
      { date: '30/03', type: 'Tất cả', value: 28 },
      { date: '31/03', type: 'Tất cả', value: 22 },
      { date: '01/04', type: 'Tất cả', value: 24 },
      // Đang thực hiện
      { date: '26/03', type: 'Đang thực hiện', value: 14 },
      { date: '27/03', type: 'Đang thực hiện', value: 15 },
      { date: '28/03', type: 'Đang thực hiện', value: 20 },
      { date: '29/03', type: 'Đang thực hiện', value: 12 },
      { date: '30/03', type: 'Đang thực hiện', value: 10 },
      { date: '31/03', type: 'Đang thực hiện', value: 15 },
      { date: '01/04', type: 'Đang thực hiện', value: 18 },
      // Đã hoàn thành
      { date: '26/03', type: 'Đã hoàn thành', value: 8 },
      { date: '27/03', type: 'Đã hoàn thành', value: 10 },
      { date: '28/03', type: 'Đã hoàn thành', value: 12 },
      { date: '29/03', type: 'Đã hoàn thành', value: 8 },
      { date: '30/03', type: 'Đã hoàn thành', value: 10 },
      { date: '31/03', type: 'Đã hoàn thành', value: 20 },
      { date: '01/04', type: 'Đã hoàn thành', value: 22 }
    ],
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    color: ['#8C8C8C', '#1890FF', '#52C41A'],
    height: 300,
    xAxis: {
      type: 'cat',
      label: {
        style: {
          fill: '#8C8C8C',
          fontSize: 12
        },
        autoRotate: false,
        autoHide: false
      },
      line: {
        style: {
          stroke: '#E8E8E8'
        }
      },
      grid: {
        line: {
          style: {
            stroke: '#F0F0F0',
            lineDash: [4, 4]
          }
        }
      },
      tickLine: null
    },
    yAxis: {
      min: 0,
      max: 30,
      tickCount: 4,
      label: {
        formatter: (v: string) => `${v}K`,
        style: {
          fill: '#8C8C8C',
          fontSize: 12
        }
      },
      grid: {
        line: {
          style: {
            stroke: '#F0F0F0',
            lineDash: [4, 4]
          }
        }
      }
    },
    smooth: true,
    animation: false,
    legend: false
  };

  // Configuration for weekly summary chart
  const weeklySummaryConfig: ColumnConfig = {
    data: [
      { week: 'Tuần 1', type: 'Tất cả', value: 42 },
      { week: 'Tuần 1', type: 'Đang thực hiện', value: 28 },
      { week: 'Tuần 1', type: 'Đã hoàn thành', value: 15 },
      { week: 'Tuần 1', type: 'Quá hạn', value: 4 },
      { week: 'Tuần 2', type: 'Tất cả', value: 25 },
      { week: 'Tuần 2', type: 'Đang thực hiện', value: 18 },
      { week: 'Tuần 2', type: 'Đã hoàn thành', value: 8 },
      { week: 'Tuần 2', type: 'Quá hạn', value: 2 },
      { week: 'Tuần 3', type: 'Tất cả', value: 30 },
      { week: 'Tuần 3', type: 'Đang thực hiện', value: 10 },
      { week: 'Tuần 3', type: 'Đã hoàn thành', value: 22 },
      { week: 'Tuần 3', type: 'Quá hạn', value: 3 },
      { week: 'Tuần 4', type: 'Tất cả', value: 38 },
      { week: 'Tuần 4', type: 'Đang thực hiện', value: 22 },
      { week: 'Tuần 4', type: 'Đã hoàn thành', value: 20 },
      { week: 'Tuần 4', type: 'Quá hạn', value: 5 },
      { week: 'Tuần 5', type: 'Tất cả', value: 25 },
      { week: 'Tuần 5', type: 'Đang thực hiện', value: 5 },
      { week: 'Tuần 5', type: 'Đã hoàn thành', value: 8 },
      { week: 'Tuần 5', type: 'Quá hạn', value: 1 },
      { week: 'Tuần 6', type: 'Tất cả', value: 30 },
      { week: 'Tuần 6', type: 'Đang thực hiện', value: 18 },
      { week: 'Tuần 6', type: 'Đã hoàn thành', value: 8 },
      { week: 'Tuần 6', type: 'Quá hạn', value: 4 }
    ],
    xField: 'week',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    color: ['#8C8C8C', '#1890FF', '#52C41A', '#FF4D4F'],
    columnStyle: {
      radius: [4, 4, 0, 0]
    },
    height: 300,
    xAxis: {
      label: {
        style: {
          fill: '#8C8C8C',
          fontSize: 12
        },
        autoRotate: false,
        autoHide: false
      },
      line: {
        style: {
          stroke: '#E8E8E8'
        }
      },
      grid: {
        line: {
          style: {
            stroke: '#F0F0F0',
            lineDash: [4, 4]
          }
        }
      },
      tickLine: null
    },
    yAxis: {
      min: 0,
      max: 50,
      tickCount: 6,
      label: {
        style: {
          fill: '#8C8C8C',
          fontSize: 12
        }
      },
      grid: {
        line: {
          style: {
            stroke: '#F0F0F0',
            lineDash: [4, 4]
          }
        }
      }
    },
    legend: false,
    animation: false,
    columnWidthRatio: 0.6,
    dodgePadding: 4,
    intervalPadding: 20
  };

  return (
    <div className="chart-row">
      <Card className="chart-card" title="Quá trình hoàn thành theo ngày">
        <div className="chart-container">
          <div className="chart-header">
            <div className="chart-title">Số lượng công việc</div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="dot" style={{ background: '#8C8C8C' }} />
                <span>Tất cả</span>
              </div>
              <div className="legend-item">
                <div className="dot" style={{ background: '#1890FF' }} />
                <span>Đang thực hiện</span>
              </div>
              <div className="legend-item">
                <div className="dot" style={{ background: '#52C41A' }} />
                <span>Đã hoàn thành</span>
              </div>
            </div>
          </div>
          <Line {...dailyProgressConfig} />
        </div>
      </Card>

      <Card className="chart-card" title="Tổng hợp theo tuần">
        <div className="chart-container">
          <div className="chart-header">
            <div className="chart-legend">
              <div className="legend-item">
                <div className="dot" style={{ background: '#8C8C8C' }} />
                <span>Tất cả</span>
              </div>
              <div className="legend-item">
                <div className="dot" style={{ background: '#1890FF' }} />
                <span>Đang thực hiện</span>
              </div>
              <div className="legend-item">
                <div className="dot" style={{ background: '#52C41A' }} />
                <span>Đã hoàn thành</span>
              </div>
              <div className="legend-item">
                <div className="dot" style={{ background: '#FF4D4F' }} />
                <span>Quá hạn</span>
              </div>
            </div>
          </div>
          <Column {...weeklySummaryConfig} />
        </div>
      </Card>
    </div>
  );
};

export default ChartSection;
