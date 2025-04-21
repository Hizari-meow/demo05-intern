'use client'
import React from 'react';
import styles from './ActionMenu.module.scss';

interface ActionMenuProps {
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ onEdit, onDuplicate, onDelete }) => {
  return (
    <div className={styles.overlayMenu}>
      <div className={`${styles.menuItem} ${styles.edit}`} onClick={onEdit}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
        Chỉnh sửa công việc
      </div>
      <div className={styles.menuItem} onClick={onDuplicate}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        Nhân đôi công việc
      </div>
      <div className={`${styles.menuItem} ${styles.delete}`} onClick={onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 6h18" />
          <path d="M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M10 11v6M14 11v6" />
          <path d="M5 6l1-2h12l1 2" />
        </svg>
        Xoá
      </div>
    </div>
  );
};

export default ActionMenu;
