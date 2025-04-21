'use client'
// components/Calender/MiniRangeCalendar.tsx
import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // Import locale tiếng Việt
import styles from './MiniRangeCalendar.module.scss';

type Props = {
    startDate: string;
    endDate: string;
};

const MiniRangeCalendar: React.FC<Props> = ({ startDate, endDate }) => {
    const [currentMonth, setCurrentMonth] = useState(dayjs().locale('vi').startOf('month'));

    const startDateObj = dayjs(startDate);
    const endDateObj = dayjs(endDate);

    const startOfMonth = currentMonth.startOf('month');
    const endOfMonth = currentMonth.endOf('month');
    const startWeek = startOfMonth.startOf('week');
    const endWeek = endOfMonth.endOf('week');

    const calendarDays = [];
    let day = startWeek;
    while (day.isBefore(endWeek) || day.isSame(endWeek, 'day')) {
        calendarDays.push(day);
        day = day.add(1, 'day');
    }

    const isBetween = (date: dayjs.Dayjs) =>
        date.isAfter(startDateObj, 'day') && date.isBefore(endDateObj, 'day');

    const isSameDay = (d1: dayjs.Dayjs, d2: dayjs.Dayjs) => d1.isSame(d2, 'day');

    return (
        <div className={styles['mini-range-calendar']}>
            <h2 className={styles['mini-range-calendar__title']}>Chọn ngày</h2>

            <div className={styles['mini-range-calendar__month-year']}>
                <span>{currentMonth.format('MMMM YYYY')}</span>
                <span
                    className={styles['mini-range-calendar__nav-button']}
                    onClick={() => setCurrentMonth(prev => prev.subtract(1, 'month'))}
                >
                    {'<'}
                </span>
                <span
                    className={styles['mini-range-calendar__nav-button']}
                    onClick={() => setCurrentMonth(prev => prev.add(1, 'month'))}
                >
                    {'>'}
                </span>
            </div>

            <div className={styles['mini-range-calendar__weekdays']}>
                {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(d => (
                    <div key={d} className={styles['mini-range-calendar__weekday']}>
                        {d}
                    </div>
                ))}
            </div>

            <div className={styles['mini-range-calendar__days']}>
                {calendarDays.map((date, index) => {
                    const isStart = isSameDay(date, startDateObj);
                    const isEnd = isSameDay(date, endDateObj);
                    const isInRange = isBetween(date);
                    const isCurrentMonth = date.month() === currentMonth.month();

                    const dayClass = `
            ${styles['mini-range-calendar__day']}
            ${!isCurrentMonth ? styles['mini-range-calendar__day--faded'] : ''}
            ${isInRange ? styles['mini-range-calendar__day--in-range'] : ''}
            ${isStart ? styles['mini-range-calendar__day--start'] : ''}
            ${isEnd ? styles['mini-range-calendar__day--end'] : ''}`;
                    return (
                        <div key={index} className={dayClass.trim()}>
                            {date.date()}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MiniRangeCalendar;
