'use client';
// TaskList.tsx
import React, { useState } from 'react';
import TaskCard, { initialTasks, Task } from '../../components/Task/TaskCard';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const AccordionSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-2 py-2 bg-gray-100 hover:bg-gray-200 rounded-md font-semibold text-gray-800"
      >
        <span>{title}</span>
        {open ? <FaChevronDown /> : <FaChevronRight />}
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const statuses: Task['status'][] = ['Tạo mới', 'Đang làm', 'Hoàn thành', 'Quá hạn'];

  const handleStatusChange = (id: number, newStatus: string) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, status: newStatus } : task)
    );
  };  

  const handleFavoriteToggle = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {statuses.map((status) => (
        <AccordionSection key={status} title={status}>
          {tasks.filter((task) => task.status === status).map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </AccordionSection>
      ))}
    </div>
  );
};

export default TaskList;
