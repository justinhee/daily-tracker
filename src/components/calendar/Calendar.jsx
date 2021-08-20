import Days from "../days/Days"
import "./calendar.css"
import { months } from "../../date";

export default function Calendar() {
    const month = 0;
    return (
        <div className="calendar">
            <h1 className="month">
                { months[month] }
            </h1>
            <Days/>
        </div>
    )
}
