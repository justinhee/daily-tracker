import './topbar.css'
import {Link} from 'react-router-dom';

export default function TopBar() {
    return (
        <div className="top">
            <div className="logout">
                <Link className="link" to="/login">logout</Link>
            </div>
        </div>
    )
}
