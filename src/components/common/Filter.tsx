// Filter.tsx
import React from 'react';
import styles from './Filter.module.scss'; // Import module SCSS

const Filter: React.FC = () => {
  return (
    <div className={styles['filter-btn']}>
      {/* icon lọc (phễu) */}
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
        />
      </svg>
      Nhóm theo: Trạng thái
      {/* Mũi tên xuống */}
      <svg className={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default Filter;
