import React from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
} from "date-fns";
import { Table } from "antd";
import CalendarCell from "./CalendarCell";

interface Event {
  id: string;
  title: string;
  time: string;
  color: "blue" | "green" | "orange";
  room: string;
  date: Date;
}

interface CalendarGridProps {
  currentDate: Date;
  events: Event[];
  onSelectDate: (date: Date) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentDate,
  events,
  onSelectDate,
}) => {
  // Lấy ngày đầu và cuối tháng
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Bắt đầu từ Thứ Hai
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // Chia ngày thành các tuần
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];

  days.forEach((day) => {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  // Lọc sự kiện theo ngày
  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    );
  };

  // Sắp xếp thứ tự đúng (bắt đầu từ Chủ nhật)
  const columns = [
    { title: "Thứ hai", dataIndex: "0", key: "0", width: "14.28%" },
    { title: "Thứ ba", dataIndex: "1", key: "1", width: "14.28%" },
    { title: "Thứ tư", dataIndex: "2", key: "2", width: "14.28%" },
    { title: "Thứ năm", dataIndex: "3", key: "3", width: "14.28%" },
    { title: "Thứ sáu", dataIndex: "4", key: "4", width: "14.28%" },
    { title: "Thứ bảy", dataIndex: "5", key: "5", width: "14.28%" },
    { title: "Chủ nhật", dataIndex: "6", key: "6", width: "14.28%" },
  ];

  // Tạo dữ liệu cho bảng
  const dataSource = weeks.map((week, weekIndex) => {
    const weekData: Record<string, React.ReactNode> = {
      key: `week-${weekIndex}`,
    };

    week.forEach((day, dayIndex) => {
      const dayEvents = getEventsForDate(day);
      const realCurrentMonth = new Date();
      const isCurrentMonth = isSameMonth(day, realCurrentMonth);

      const isTodayDate = isToday(day);

      const cellClass = [
        isCurrentMonth ? "" : "not-current-month",
        isTodayDate ? "today-highlight" : "",
      ]
        .filter(Boolean)
        .join(" ");

      weekData[`${dayIndex}`] = (
        <div onClick={() => onSelectDate(day)} className={cellClass}>
          <CalendarCell
            date={day}
            isCurrentMonth={isCurrentMonth}
            isToday={isTodayDate}
            events={dayEvents}
          />
        </div>
      );
    });

    return weekData;
  });

  return (
    <div className="calendar-grid">
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered
        className="calendar-grid__table"
        rowClassName="calendar-grid__row"
      />
    </div>
  );
};

export default CalendarGrid;
