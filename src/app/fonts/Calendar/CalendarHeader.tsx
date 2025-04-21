import React from "react";
import { Button, Radio, Space, Input, Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./calendar.scss";

const { Search } = Input;
const { Option } = Select;

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  onViewChange: (view: "month" | "week") => void;
  currentView: "month" | "week";
  onSearch?: (value: string) => void; // Callback cho tìm kiếm
  onSortChange?: (value: string) => void; // Callback cho sắp xếp
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  onPrevious,
  onNext,
  onToday,
  onViewChange,
  currentView,
  onSearch,
  onSortChange,
}) => {
  return (
    <div className="calendar-header">
      <Space className="calendar-header__controls">
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={onPrevious}
          className="calendar-header__nav-button"
        />
        <Button
          type="default"
          onClick={onToday}
          className="calendar-header__today-button"
        >
          {currentView === "month" ? "Tháng này" : "Tuần này"}
        </Button>
        <Button
          type="text"
          icon={<RightOutlined />}
          onClick={onNext}
          className="calendar-header__nav-button"
        />
      </Space>

      <div className="calendar-header__view-selector">
        <Radio.Group
          value={currentView}
          onChange={(e) => onViewChange(e.target.value)}
          className="calendar-header__radio-group"
          buttonStyle="solid"
        >
          <Radio.Button value="week" className="calendar-header__radio-btn">
            Tuần
          </Radio.Button>
          <Radio.Button
            value="month"
            className="calendar-header__radio-btn active"
          >
            Tháng
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className="calendar-header__actions">
        <Space>
          <Search
            placeholder="Tìm kiếm"
            onSearch={onSearch}
            className="calendar-header__search"
            allowClear
          />
          <Select
            defaultValue="status"
            onChange={onSortChange}
            className="calendar-header__sort"
            popupMatchSelectWidth={false}
          >
            <Option value="status">Sắp xếp theo: Trạng thái</Option>
            <Option value="date">Sắp xếp theo: Thời gian</Option>
          </Select>
        </Space>
      </div>
    </div>
  );
};

export default CalendarHeader;
