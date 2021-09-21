import Calendar from "../components/calendar/Calendar";
import TopBar from "../components/topbar/TopBar";

export default function Home() {
    
    return (
        <div className="home">
            <TopBar/>
            <Calendar />
        </div>
    )
}
