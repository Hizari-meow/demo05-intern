'use client';
import React, { useState } from 'react';
import TaskTable from '../../components/Task/TaskTable';
import type { Task } from '../../components/Task/TaskCard';
export const mytask = [
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
    assignee: 'Đào Xuân Hoà',
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
    assignee: 'Đào Xuân Hoà',
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
    assignee: 'Đào Xuân Hoà',
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
    assignee: 'Đào Xuân Hoà',
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
    assignee: 'Đào Xuân Hoà',
    department: 'Giặt là',
    priority: 'Ưu tiên trung bình',
  },
  {
    id: 7,
    title: 'Giặt ủi',
    status: 'Quá hạn',
    tags: [],
    createdBy: 'Đào Xuân Hoà',
    date: '20/04/2025 - 21/04/2025',
    assignee: 'Đào Xuân Hoà',
    department: 'Giặt là',
    priority: 'Ưu tiên thấp',
  },
];

const MyTaskListTable: React.FC = () => {
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);

  return (
    <TaskTable
      tasks={mytask}
      onEdit={(id) => console.log('Sửa', id)}
      onDelete={(id) => console.log('Xoá', id)}
      onDuplicate={(id) => console.log('Nhân đôi', id)}
      onToggleMenu={(id) => setActiveTaskId(prev => prev === id ? null : id)}
      activeTaskId={activeTaskId}
      customClass="my-special-table"
    />
  );
};

export default MyTaskListTable;
