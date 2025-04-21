"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import { addMonths, subMonths, addWeeks, subWeeks } from "date-fns";

import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import SchedulerPage from "./SchedulerPage"; // Giao diện theo tuần
import CalendarSidebar from "./CalendarSidebar";

// Import styling
import "./calendar.scss";
// Define the Event type to match what's expected in children components
interface Event {
  id: string;
  title: string;
  time: string;
  color: "blue" | "green" | "orange";
  room: string;
  date: Date;
}

// Sample event data
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Dọn phòng 102",
    time: "8:00 - 9:00 AM",
    color: "blue",
    room: "Văn Dũng",
    date: new Date(2025, 3, 16),
  },
  {
    id: "2",
    title: "Dọn phòng 103",
    time: "9:00 - 10:00 AM",
    color: "green",
    room: "Văn Dũng",
    date: new Date(2025, 3, 9),
  },
  {
    id: "3",
    title: "Dọn phòng 104",
    time: "10:00 - 12:00 AM",
    color: "orange",
    room: "Văn Dũng",
    date: new Date(2025, 3, 10),
  },
  {
    id: "4",
    title: "Dọn phòng 105",
    time: "5:00 - 9:00 AM",
    color: "orange",
    room: "Văn Dũng",
    date: new Date(2025, 3, 11),
  },
];

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Lấy ngày hiện tại
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<"month" | "week">("month");
  const [events, setEvents] = useState<Event[]>([]);

  const handlePrevious = () => {
    setCurrentDate((prevDate) =>
      currentView === "month" ? subMonths(prevDate, 1) : subWeeks(prevDate, 1)
    );
  };

  const handleNext = () => {
    setCurrentDate((prevDate) =>
      currentView === "month" ? addMonths(prevDate, 1) : addWeeks(prevDate, 1)
    );
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleViewChange = (view: "month" | "week") => {
    setCurrentView(view);
  };

  const { Content, Sider } = Layout;

  return (
    <div className="calendar">
      <Layout className="calendar__layout">
        <Content className="calendar__content">
          <div className="calendar__container">
            <CalendarHeader
              currentDate={currentDate}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onToday={handleToday}
              onViewChange={handleViewChange}
              currentView={currentView}
            />
            {currentView === "month" ? (
              <CalendarGrid
                currentDate={currentDate}
                events={mockEvents}
                onSelectDate={setSelectedDate}
                // Thêm prop này để cập nhật ngày đã chọn
              />
            ) : (
              <SchedulerPage
                currentDate={currentDate}
                events={mockEvents}
                onSelectDate={setSelectedDate} // Thêm prop này để cập nhật ngày đã chọn
              />
            )}
          </div>
        </Content>
        <Sider width={280} className="calendar__sider">
          <CalendarSidebar selectedDate={selectedDate} events={mockEvents} />
        </Sider>
      </Layout>
    </div>
  );
};

export default Calendar;
