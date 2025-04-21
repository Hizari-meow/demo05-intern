'use client';
import styles from './TaskTable.module.scss';
import ActionMenu from '../ActionButton/ActionMenu';
import { Task } from './TaskCard'; 
import React, { useState } from 'react';

type Props = {
  tasks: Task[];
  onEdit?: (id: number) => void;
  onDuplicate?: (id: number) => void;
  onDelete?: (id: number) => void;
  onToggleMenu?: (id: number) => void;
  activeTaskId?: number | null;
  customClass?: string;
};

const TaskTable: React.FC<Props> = ({
  tasks,
  onEdit,
  onDuplicate,
  onDelete,
  onToggleMenu,
  activeTaskId,
  customClass = '',
}) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Tạo mới': return styles['tao-moi'];
      case 'Đang làm': return styles['dang-lam'];
      case 'Hoàn thành': return styles['hoan-thanh'];
      case 'Quá hạn': return styles['qua-han'];
      default: return '';
    }
  };

  // Danh sách ID các task được chọn
  const [selectedTaskIds, setSelectedTaskIds] = useState<number[]>([]);

  // Chọn hoặc bỏ chọn tất cả
  const handleHeaderCheckboxChange = () => {
    if (selectedTaskIds.length === tasks.length) {
      setSelectedTaskIds([]);
    } else {
      setSelectedTaskIds(tasks.map((t) => t.id));
    }
  };

  // Chọn hoặc bỏ chọn 1 task
  const handleCheckboxChange = (taskId: number) => {
    setSelectedTaskIds((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  const isTaskChecked = (taskId: number) => selectedTaskIds.includes(taskId);
  const isAllChecked = selectedTaskIds.length === tasks.length;

  const getMenuPosition = (taskId: number) => {
    const row = document.getElementById(`task-row-${taskId}`);
    if (!row) return {};
    return {};
  };

  return (
    <div className={`${styles.wrapper} ${customClass}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isAllChecked}
                onChange={handleHeaderCheckboxChange}
              />
            </th>
            <th>Tên công việc</th>
            <th>Thời hạn</th>
            <th>Giao cho</th>
            <th>Bộ phận/Phòng ban</th>
            <th>Phân loại công việc</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              id={`task-row-${task.id}`}
              onClick={() => onToggleMenu?.(task.id)}
              className={styles.row}
            >
              <td>
                <input
                  type="checkbox"
                  checked={isTaskChecked(task.id)}
                  onChange={() => handleCheckboxChange(task.id)}
                  onClick={(e) => e.stopPropagation()}
                />
              </td>
              <td><strong>{task.title}</strong></td>
              <td>{task.date}</td>
              <td className={styles.assignee}>
                <img src="https://i.imgur.com/Mt8GRnF.png" alt="avatar" />
                {task.assignee}
              </td>
              <td>
                <span className={styles.department}>
                  Bộ phận: {task.department}
                </span> 
              </td>
              <td>
                <span className={styles.priority}>
                  {task.priority}
                </span>
              </td>
              <td>
                <span className={`${styles.status} ${getStatusClass(task.status)}`}>
                  {task.status || 'Chưa xác định'}
                </span>
              </td>
              <td className={styles.menu} onClick={(e) => e.stopPropagation()}>
                <button onClick={() => onToggleMenu?.(task.id)}>⋯</button>
                {activeTaskId === task.id && (
                  <div
                    className={styles.dropdown}
                    style={getMenuPosition(task.id)}
                  >
                    <ActionMenu
                      onEdit={() => onEdit?.(task.id)}
                      onDuplicate={() => onDuplicate?.(task.id)}
                      onDelete={() => onDelete?.(task.id)}
                    />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
