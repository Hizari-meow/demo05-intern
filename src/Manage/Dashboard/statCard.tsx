'use client'
import React from 'react';
import { Card } from 'antd';
import './StatCard.scss';

type DotColor = 'blue' | 'green' | 'red' | 'orange' | string;

interface DetailItem {
  label: string;
  color: DotColor;
}

interface StatCardProps {
  title: string;
  count: number | string;
  subtitle?: string;
  details: DetailItem[];
}

const StatCard: React.FC<StatCardProps> = ({ title, count, subtitle, details }) => {
  return (
    <Card className="stat-card">
      <div className="stat-card__content">
        <div className="stat-card__header">
          <h3 className="stat-card__title">{title}</h3>
          <div className="stat-card__count">{count}</div>
          {subtitle && <div className="stat-card__subtitle">{subtitle}</div>}
        </div>
        <ul className="stat-card__details">
          {details.map((detail, index) => (
            <li key={index} className="stat-card__detail-item">
              <span className={`stat-card__dot stat-card__dot--${detail.color}`}></span>
              <span className="stat-card__detail-text">{detail.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default StatCard;
