import React from "react";
import { Card, Typography } from "antd";

interface Event {
  id: string;
  title: string;
  time: string;
  color: "blue" | "green" | "orange";
  room: string;
}

interface CalendarCellProps {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: Event[];
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  date,
  isCurrentMonth,
  isToday,
  events,
}) => {
  const day = date.getDate();
  const { Text } = Typography;

  const getColorForEvent = (color: string) => {
    switch (color) {
      case "blue":
        return "blue";
      case "green":
        return "green";
      case "orange":
        return "orange";
      default:
        return "blue";
    }
  };

  return (
    <div
      className={`calendar-cell ${
        !isCurrentMonth ? "calendar-cell--faded" : ""
      } ${isToday ? "calendar-cell--today" : ""}`}
    >
      <div
        className={`calendar-cell__date ${
          isToday ? "calendar-cell__date--today" : ""
        }`}
      >
        {day}
      </div>
      <div className="calendar-cell__events">
        {events.map((event) => (
          <Card
            key={event.id}
            size="small"
            className={`calendar-cell__event calendar-cell__event--${event.color}`}
            variant="borderless"
          >
            <Text className="calendar-cell__event-time">{event.time}</Text>
            <Text className="calendar-cell__event-title">{event.title}</Text>
            <Text className="calendar-cell__event-room">{event.room}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CalendarCell;
