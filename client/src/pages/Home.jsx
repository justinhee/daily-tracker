import Calendar from "../components/calendar/Calendar";
import TopBar from "../components/topbar/TopBar";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
    const [entries, setEntries] = useState([]);
    useEffect(() => {
        const fetchEntries = async () => {
            const res = await axios.get("/entries");
            setEntries(res.data);
        }
        fetchEntries();
    }, [])
    return (
        <div className="home">
            <TopBar/>
            <Calendar />
        </div>
    )
}
