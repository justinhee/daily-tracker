import Days from "../days/Days"
import "./calendar.css"
import { months } from "../../date";
import { useState } from 'react';

export default function Calendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    
    const prevMonth = () => {
        setMonth(prevMonth => prevMonth - 1);
        if(month % 12 === 0){
            setYear(prevYear => prevYear - 1);
        }
    }
    const nextMonth = () => {
        setMonth(prevMonth => prevMonth + 1);
        if(month % 12 === 0){
            setYear(prevYear => prevYear + 1);
        }
    }

    return (
        <div className="calendar">
            <button className="changeMonthButton" onClick={prevMonth}>previous</button>
            <button className="changeMonthButton" onClick={nextMonth}>next</button>
            <h1 className="month">
                { months[month % 12] } {year}
            </h1>
            <Days month={month}/>
        </div>
    )
}
