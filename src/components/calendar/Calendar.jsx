import "./calendar.css"
import { daysInMonth, firstDayOfMonth, months, weekdays } from "../../date";
import { useState } from 'react';
import EditDay from "../editDay/EditDay";

export default function Calendar() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [selectedDay, setSelectedDay] = useState(0);

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const prevMonth = () => {
        setMonth(prevMonth => prevMonth - 1);
        if (month % 12 === 0) {
            setYear(prevYear => prevYear - 1);
        }
    }
    const nextMonth = () => {
        setMonth(prevMonth => prevMonth + 1);
        if (month % 12 === 0) {
            setYear(prevYear => prevYear + 1);
        }
    }

    const d = daysInMonth(month);
    const days = Array.from({ length: d }, (_, i) => i + 1);
    const dayToBeginTheMonthFrom = firstDayOfMonth(month);
    const firstDayStyle = { gridColumnStart: dayToBeginTheMonthFrom + 1 };


    return (
        <div className="calendar">
            <div className="monthButtons">
                <button className="changeMonthButton" onClick={prevMonth}>prev</button>
                <button className="changeMonthButton" onClick={nextMonth}>next</button>
            </div>
            
            <span className="month">
                {months[month % 12]} {year}
            </span>
            <div className="days">
                {weekdays.map(weekday => {
                    return <span key={weekday} className="weekday">{weekday}</span>
                })}
                {days.map((day) => {
                    return (
                        <button className="day"
                            key={day}
                            style={day === 0 ? firstDayStyle : {}}
                            onClick={() => {
                                setSelectedDay(day);
                                setButtonPopup(true);
                            }}>
                            <p>{day}</p>
                            <div className="content">
                                <p>content</p>
                            </div>
                        </button>
                    )
                })}
            </div>
            <EditDay trigger={buttonPopup} setTrigger={() => setButtonPopup(false)} day={selectedDay} month={month} year={year}/>
        </div>
    )
}
