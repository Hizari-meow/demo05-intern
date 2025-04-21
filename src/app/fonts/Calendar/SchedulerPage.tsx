import { useEffect, useState } from "react";
import { Card, Layout, Typography } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import "./calendar.scss"; // Import SCSS trực tiếp
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import isoWeek from "dayjs/plugin/isoWeek";
import "dayjs/locale/vi";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(isoWeek);
dayjs.locale("vi");

// Khai báo kiểu props cho SchedulerPage
interface Event {
  id: string;
  title: string;
  time: string;
  color: "blue" | "green" | "orange";
  room: string;
  date: Date;
}

interface SchedulerPageProps {
  currentDate: Date;
  events: Event[];
  onSelectDate: (date: Date) => void;
}
function parseTime(timeStr: string): [number, number] {
  const [time, modifier] = timeStr.trim().split(" ");
  let [hour, minute] = time.split(":").map(Number);

  if (modifier === "PM" && hour < 12) hour += 12;
  if (modifier === "AM" && hour === 12) hour = 0;

  return [hour, minute];
}

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const SchedulePage: React.FC<SchedulerPageProps> = ({
  currentDate,
  events,
}) => {
  const [currentTime, setCurrentTime] = useState<Dayjs>(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000); // mỗi giây cập nhật lại dòng đỏ

    return () => clearInterval(timer);
  }, []);
  const slotHeight = 60;
  // Tính toán ngày trong tuần từ currentDate (chứ không phải currentTime)
  const startOfWeek = dayjs(currentDate).startOf("week").isoWeekday(1);
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = startOfWeek.add(i, "day");
    const names = [
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
      "Chủ nhật",
    ];
    return {
      name: names[i],
      key: names[i].toLowerCase().replace(" ", ""),
      date,
    };
  });

  const timeSlots = [-1, ...Array.from({ length: 24 }, (_, i) => i)]; // -1 → 23

  return (
    <Layout className="schedule">
      <Header className="schedule__header">
        <Title level={3} style={{ color: "white" }}>
          <SyncOutlined spin /> Lịch làm việc -{" "}
          {currentTime.format("HH:mm DD/MM/YYYY")}
        </Title>
      </Header>

      <Content className="schedule__content">
        <div className="schedule__grid">
          <div
            className="schedule__current-line"
            style={{
              top: `${
                (currentTime.hour() * 60 + currentTime.minute()) *
                  (slotHeight / 60) +
                slotHeight
              }px`,
            }}
          >
            <div className="schedule__current-time-label">
              {currentTime.format("HH:mm")}
            </div>
          </div>

          {/* Cột thời gian bên trái */}
          <div className="schedule__time-column">
            {timeSlots.map((hour) =>
              hour === -1 ? (
                <div key="empty-top" className="schedule__time-slot"></div>
              ) : hour <= 23 ? (
                <div key={hour} className="schedule__time-slot">
                  {`${hour}:00`}
                </div>
              ) : null
            )}
          </div>

          {/* Cột các ngày trong tuần */}
          {days.map((day) => (
            <div key={day.key} className="schedule__day-column">
              <div className="schedule__day-header">
                <Text strong>{day.name}</Text>
                <Text type="secondary">{day.date.format("DD/MM")}</Text>
              </div>

              {timeSlots.map((hour) => {
                if (hour === -9) {
                  return (
                    <div
                      key={`${day.key}-empty`}
                      className="schedule__time-cell"
                    ></div>
                  );
                }

                if (hour < 0 || hour > 23) return null; // loại bỏ hàng 24

                const eventList = events.filter((event) => {
                  const [startStr, endStr] = event.time.split(" - ");
                  const [startHour, startMinute] = startStr
                    .split(":")
                    .map(Number);
                  const [endHour, endMinute] = endStr.split(":").map(Number);

                  const eventStart = dayjs(event.date)
                    .hour(startHour)
                    .minute(startMinute || 0);
                  const eventEnd = dayjs(event.date)
                    .hour(endHour)
                    .minute(endMinute || 0);

                  const slotStart = day.date.hour(hour).minute(0);
                  const slotEnd = slotStart.add(1, "hour");

                  return (
                    eventStart.isBefore(slotEnd) &&
                    eventEnd.isAfter(slotStart) &&
                    day.date.isSame(event.date, "day")
                  );
                });

                return (
                  <div
                    key={`${day.key}-${hour}`}
                    className={`schedule__time-cell ${
                      currentTime.hour() === hour &&
                      day.date.isSame(currentTime, "day")
                        ? "schedule__time-cell--current"
                        : ""
                    }`}
                  >
                    {eventList.map((event) => {
                      const [startStr, endStr] = event.time.split(" - ");
                      const [startHour, startMinute] = startStr
                        .split(":")
                        .map(Number);
                      const [endHour, endMinute] = endStr
                        .split(":")
                        .map(Number);

                      const eventStart = dayjs(event.date)
                        .hour(startHour)
                        .minute(startMinute || 0);
                      const eventEnd = dayjs(event.date)
                        .hour(endHour)
                        .minute(endMinute || 0);

                      const durationInMinutes = eventEnd.diff(
                        eventStart,
                        "minute"
                      );
                      const height = (durationInMinutes * slotHeight) / 60;

                      const bgColor =
                        event.color === "green"
                          ? "#d4f4dd"
                          : event.color === "blue"
                          ? "#cce5ff"
                          : event.color === "orange"
                          ? "#ffe0b3"
                          : "#f0f0f0";

                      // Đảm bảo chỉ render ở slot bắt đầu
                      if (hour !== eventStart.hour()) return null;

                      return (
                        <div
                          key={event.id}
                          style={{
                            position: "absolute",
                            top: `${(eventStart.minute() * slotHeight) / 60}px`,
                            height: `${height}px`,
                            backgroundColor: bgColor,
                            borderLeft: "4px solid " + event.color,
                            borderRadius: "4px",
                            padding: "4px 6px",
                            listStyle: "none",
                            fontSize: "13px",
                            width: "100%",
                            boxSizing: "border-box",
                            zIndex: 1,
                          }}
                        >
                          <strong>{event.title}</strong>: {event.time} -{" "}
                          {event.room}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default SchedulePage;
