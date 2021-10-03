import "./calendar.css"
import { daysInMonth, firstDayOfMonth, months, weekdays } from "../../date";
import { useEffect, useState } from 'react';
import EditDay from "../editDay/EditDay";
import axios from 'axios';


export default function Calendar() {
    const [entries, setEntries] = useState([]);
    useEffect(() => {
        const fetchEntries = async () => {
            const res = await axios.get("/entries");
            console.log(res.data)
            setEntries(res.data);
        }
        fetchEntries();
    }, [])

    const [buttonPopup, setButtonPopup] = useState(false);
    const [selectedDay, setSelectedDay] = useState(0);

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const [selectedEntry, setSelectedEntry] = useState([]);


    const prevMonth = () => {
        if (month === 0) {
            setYear(prevYear => prevYear - 1);
            setMonth(11);
        } else {
            setMonth(prevMonth => prevMonth - 1);
        }
    }
    const nextMonth = () => {
        if (month === 11) {
            setYear(prevYear => prevYear + 1);
            setMonth(0);
        } else {
            setMonth(prevMonth => prevMonth + 1);
        }
    }

    const d = daysInMonth(month, year);
    const days = Array.from({ length: d }, (_, i) => i + 1);
    const dayToBeginTheMonthFrom = firstDayOfMonth(month, year);
    const firstDayStyle = { gridColumnStart: dayToBeginTheMonthFrom + 1 };


    return (
        <div className="calendar">
            <div className="monthButtons">
                <button className="changeMonthButton" onClick={prevMonth}>prev</button>
                <button className="changeMonthButton" onClick={nextMonth}>next</button>
            </div>
            
            <span className="month">
                {months[month]} {year}
            </span>
            <div className="days">
                {weekdays.map(weekday => {
                    return <span key={weekday} className="weekday">{weekday}</span>
                })}
                {days.map((day) => {
                    const dateString = `${year}-${month+1}-${day}`;
                    const entry = entries.find(entry => entry.date === dateString);
                    const content = entry ? entry.entry : '';
                    return (
                        <button className="day"
                            key={day}
                            style={day === 1 ? firstDayStyle : {}}
                            onClick={() => {
                                setSelectedDay(day);
                                setButtonPopup(true);
                            }}>
                            <p>{day}</p>
                            <div className="content">
                                <p>{content}</p>
                            </div>
                        </button>
                    )
                })}
            </div>
            <EditDay trigger={buttonPopup} setTrigger={() => setButtonPopup(false)} entries={entries} day={selectedDay} month={month} year={year}/>
        </div>
    )
}
