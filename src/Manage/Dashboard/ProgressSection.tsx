'use client'
import React from 'react';
import { Card, Progress, Avatar } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './ProgressSection.scss';

type ProgressColor = 'blue' | 'green' | 'red' | 'orange';

interface ProgressItem {
  label: string;
  description: string;
  percentage: number;
  total: string;
  color: ProgressColor;
}

interface UserProgress {
  name: string;
  position: string;
  stats: string;
  percentage: number;
}

interface ProgressSectionProps {
  section: {
    title: string;
    primaryProgress?: ProgressItem;
    secondaryProgress?: ProgressItem;
    userProgress?: UserProgress[];
    footer?: string;
  };
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ section }) => {
  const getColorCode = (color: ProgressColor): string => {
    const colors: Record<ProgressColor, string> = {
      blue: '#2D7BF4',
      green: '#30D158',
      red: '#FF453A',
      orange: '#FF9500',
    };
    return colors[color] || '#000';
  };

  const renderProgressItem = (progressData: ProgressItem, index: number) => (
    <div className="progress-section__progress-item" key={index}>
      <div className="progress-section__progress-header">
        <div className={`progress-section__progress-label progress-section__progress-label--${progressData.color}`}>
          {progressData.label}
        </div>
        <div className="progress-section__progress-description">
          {progressData.description}
        </div>
      </div>
      <Progress 
        percent={progressData.percentage} 
        showInfo={false}
        strokeColor={getColorCode(progressData.color)}
        className="progress-section__progress-bar"
      />
      <div className="progress-section__progress-total">
        {progressData.total}
      </div>
    </div>
  );

  const renderUserProgress = () => (
    section.userProgress?.map((user, index) => (
      <div className="progress-section__user-item" key={index}>
        <div className="progress-section__user-info">
          <Avatar className="progress-section__user-avatar" size={40}>
            {user.name.charAt(0)}
          </Avatar> 
          <div className="progress-section__user-details">
            <div className="progress-section__user-name">{user.name}</div>  
            <div className="progress-section__user-position">{user.position}</div>
            <div className="progress-section__user-stats">{user.stats}</div>
          </div>
        </div>
        <div className="progress-section__user-progress">
          <Progress 
            percent={user.percentage} 
            showInfo={false}
            strokeColor="#30D158"
            className="progress-section__user-progress-bar"
          />
          <span className="progress-section__user-percentage">{user.percentage.toFixed(1)}%</span>
        </div>
      </div>
    ))
  );

  return (
    <Card className="progress-section">
      <div className="progress-section__header">
        <h3 className="progress-section__title">{section.title}</h3>
      </div>
      <div className="progress-section__content">
        {section.primaryProgress && renderProgressItem(section.primaryProgress, 1)}
        {section.secondaryProgress && renderProgressItem(section.secondaryProgress, 2)}
        {section.userProgress && <div className="progress-section__users">{renderUserProgress()}</div>}
      </div>
      {section.footer && (
        <div className="progress-section__footer">
          <InfoCircleOutlined className="progress-section__info-icon" />
          <span className="progress-section__footer-text">{section.footer}</span>
        </div>
      )}
    </Card>
  );
};

export default ProgressSection;
