'use client'
import React, { useState } from 'react';
import TaskTable from '../../components/Task/TaskTable';
import { initialTasks } from '../../components/Task/TaskCard';

const TaskListTable: React.FC = () => {
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);

  return (
    <TaskTable
      tasks={initialTasks}
      onEdit={(id) => console.log('Sửa', id)}
      onDelete={(id) => console.log('Xoá', id)}
      onDuplicate={(id) => console.log('Nhân đôi', id)}
      onToggleMenu={(id) => setActiveTaskId(prev => prev === id ? null : id)}
      activeTaskId={activeTaskId}
      customClass="my-own-style"
    />
  );
};

export default TaskListTable;
