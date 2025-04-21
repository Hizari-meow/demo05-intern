'use client';
import React from 'react';
import styles from './AddButton.module.scss';

type Props = {
  label?: string;
  onClick?: () => void;
  className?: string;
};

const AddButton: React.FC<Props> = ({ label = 'Thêm công việc', onClick, className = '' }) => {
  return (
    <button className={`${styles.addButton} ${className}`} onClick={onClick}>
      <span className={styles.icon}>＋</span>
      {label}
    </button>
  );
};

export default AddButton;
