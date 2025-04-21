'use client';

import React from 'react';
import { FaUser, FaEdit, FaTrash, FaStar, FaCopy } from 'react-icons/fa';
import styles from './TaskCard.module.scss';

export type Task = {
  id: number;
  title: string;
  status: 'Tạo mới' | 'Đang làm' | 'Hoàn thành' | 'Quá hạn';
  tags: string[];
  createdBy: string;
  date: string;
  assignee: string;
  isFavorite?: boolean;
  department: string;
  priority: 'Ưu tiên thấp' | 'Ưu tiên trung bình' | 'Ưu tiên cao';
};

export const initialTasks: Task[] = [  // Thêm export ở đây
  {
    id: 1,
    title: 'Dọn phòng 203',
    status: 'Tạo mới',
    tags: [],
    createdBy: 'Văn Dũng',
    date: '20/04/2025 - 21/04/2025',
    assignee: 'Đào Xuân Hoà',
    department: 'HK',
    priority: 'Ưu tiên thấp',
  },
  {
    id: 2,
    title: 'Dọn phòng 201',
    status: 'Đang làm',
    tags: [],
    createdBy: 'Văn Dũng',
    date: '20/04/2025 - 21/04/2025',
    assignee: 'Nguyễn Khánh Linh',
    department: 'HK',
    priority: 'Ưu tiên cao',
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Dọn phòng 202',
    status: 'Đang làm',
    tags: [],
    createdBy: 'Văn Dũng',
    date: '20/04/2025 - 21/04/2025',
    assignee: 'Đàm Đức Duy',
    department: 'HK',
    priority: 'Ưu tiên trung bình',
  },
  {
    id: 4,
    title: 'Dọn phòng 301',
    status: 'Hoàn thành',
    tags: [],
    createdBy: 'Văn Dũng',
    date: '20/04/2025 - 22/04/2025',
    assignee: 'Nguyễn Khánh Linh',
    department: 'IT',
    priority: 'Ưu tiên thấp',
  },
  {
    id: 5,
    title: 'Fill đồ tại các phòng',
    status: 'Hoàn thành',
    tags: [],
    createdBy: 'Đàm Đức Duy',
    date: '20/04/2025 - 21/04/2025',
    assignee: 'Đàm Đức Duy',
    department: 'HK',
    priority: 'Ưu tiên cao',
  },
  {
    id: 6,
    title: 'Giặt ủi',
    status: 'Hoàn thành',
    tags: [],
    createdBy: 'Văn Dũng',
    date: '20/04/2025 - 21/04/2025',
    assignee: 'Văn Dũng',
    department: 'Giặt là',
    priority: 'Ưu tiên trung bình',
  },
  {
    id: 7,
    title: 'Giặt ủi',
    status: 'Quá hạn',
    tags: [],
    createdBy: 'Đàm Đức Duy',
    date: '20/04/2025 - 21/04/2025',
    assignee: '',
    department: 'Giặt là',
    priority: 'Ưu tiên thấp',
  },
];

type Props = {
  task: Task;
  onStatusChange: (id: number, newStatus: Task['status']) => void;
  onFavoriteToggle: (id: number) => void;
};

const TaskCard: React.FC<Props> = ({ task, onStatusChange, onFavoriteToggle }) => {
  const { id, title, status, createdBy, date, assignee, isFavorite = false } = task;

  const handleStatusClick = () => {
    let newStatus: Task['status']; // Đảm bảo kiểu dữ liệu phù hợp
    switch (status) {
      case 'Tạo mới':
        newStatus = 'Đang làm';
        break;
      case 'Đang làm':
        newStatus = 'Hoàn thành';
        break;
      case 'Hoàn thành':
        newStatus = 'Tạo mới';
        break;
      case 'Quá hạn':
        newStatus = 'Tạo mới'; // Hoặc có thể thay đổi tuỳ vào yêu cầu của bạn
        break;
      default:
        newStatus = status; // Giữ nguyên trạng thái nếu không khớp với bất kỳ trường hợp nào
    }

    // Gọi onStatusChange với newStatus có kiểu dữ liệu đúng
    onStatusChange(id, newStatus);
  };

  const handleFavoriteClick = () => {
    onFavoriteToggle(id);
  };

  return (
    <div className={styles['task-card']}>
      {/* Hàng trên cùng */}
      <div className={styles['top-row']}>
        <div className={styles['left-section']}>
          <div
            className={`${styles.avatar} ${status === 'Hoàn thành' ? styles.completed : ''}`}
            onClick={handleStatusClick}
          >
            {status === 'Hoàn thành' && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {status === 'Quá hạn' && (
              <svg
                className="w-3 h-3 text-white bg-red-500 p-1 rounded-full"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <div className={styles.title}>{title}</div>
        </div>

        <div className={styles.date}>{date}</div>

        <div className={styles.assignee}>
          <FaUser className={styles['assignee-icon']} />
          <span>{assignee}</span>
        </div>
      </div>

      {/* Hàng dưới: tag + action */}
      <div className={styles['bottom-row']}>
        <div className={styles['tag-group']}>
          <span
            className={`${styles.tag} ${
              status === 'Tạo mới'
                ? styles.new
                : status === 'Đang làm'
                ? styles.inProgress
                : status === 'Hoàn thành'
                ? styles.completed
                : status === 'Quá hạn'
                ? styles.overdue
                : ''
            }`}
            onClick={handleStatusClick}
          >
            {status}
          </span>
          <span className={`${styles.tag} ${styles['priority-tag']}`}>Ưu tiên cao</span>
          <span className={styles['created-by']}>- Tạo bởi: {createdBy}</span>
        </div>

        <div className={styles.actions}>
          {status === 'Tạo mới' && (
            <>
              <FaEdit />
              <FaCopy />
              <FaTrash />
            </>
          )}
          <FaStar
            className={`${styles['favorite-icon']} ${isFavorite ? styles.active : ''}`}
            onClick={handleFavoriteClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
