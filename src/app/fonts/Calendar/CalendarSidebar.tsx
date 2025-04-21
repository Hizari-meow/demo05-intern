import React from "react";
import { Calendar as AntCalendar, List, Typography, Badge } from "antd";
import UserProfileCard from "../UserProfileCard/UserProfileCard";

interface Event {
  id: string;
  title: string;
  time: string;
  color: "blue" | "green" | "orange";
  room: string;
  date: Date;
}

interface CalendarSidebarProps {
  selectedDate: Date;
  events: Event[];
}

const CalendarSidebar: React.FC<CalendarSidebarProps> = ({
  selectedDate,
  events,
}) => {
  const { Title, Text } = Typography;

  // Filter events for the selected date
  const todayEvents = events.filter(
    (event) =>
      event.date.getFullYear() === selectedDate.getFullYear() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getDate() === selectedDate.getDate()
  );

  // Get color for event status
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
    <div>
      <div className="calendar-sidebar__UserProfile">
        <UserProfileCard />
      </div>
      <div className="calendar-sidebar">
        <div className="calendar-sidebar__mini-calendar">
          <h3>
            <b>Chọn ngày</b>
          </h3>
          <AntCalendar
            fullscreen={false}
            className="calendar-sidebar__calendar"
            headerRender={({ value, onChange }) => {
              return (
                <div className="custom-calendar-header">
                  <div className="year-month-selector">
                    <span
                      className="year-selector"
                      onClick={() =>
                        onChange(value.clone().set("month", value.month()))
                      }
                    >
                      {value.format("MMMM YYYY")}
                    </span>
                  </div>
                </div>
              );
            }}
          />
        </div>
        <div className="calendar-sidebar__events">
          <Title level={5} className="calendar-sidebar__title">
            Công việc hôm nay
          </Title>
          <List
            className="calendar-sidebar__list"
            itemLayout="horizontal"
            dataSource={todayEvents}
            renderItem={(event) => (
              <List.Item className="calendar-sidebar__list-item">
                <List.Item.Meta
                  avatar={<Badge color={getColorForEvent(event.color)} />}
                  title={event.title}
                  description={
                    <div>
                      <Text className="calendar-sidebar__event-time">
                        {event.time}
                      </Text>
                      <Text className="calendar-sidebar__event-room">
                        {event.room}
                      </Text>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarSidebar;
