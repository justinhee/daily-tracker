import "./days.css"
import { daysInMonth, firstDayOfMonth, month } from "../../date"

export default function Days() {
    const month = 0;
    const d = daysInMonth(month);
    const days = Array.from({ length: d }, (_, i) => i + 1);
    const dayToBeginTheMonthFrom = firstDayOfMonth(month);
    const firstDayStyle = {gridColumnStart: dayToBeginTheMonthFrom + 1};

    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    return (

        <div className="days">
            {weekdays.map(weekday => {
                return <span key={weekday} className="weekday">{weekday}</span>
            })}
            {days.map((day, i) => {
                return (
                    <span className="day" 
                    key={i} 
                    style={i === 0 ? firstDayStyle : {}}>
                        {day}
                        <div className="content">
                            hello
                        </div>
                    </span>
                )
            })}
        </div>

    )
}
