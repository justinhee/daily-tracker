import './editDay.css'

export default function EditDay(props) {
    return (props.trigger) ? (
        <div className="editDay">
            <div className="popup-inner">
                <button className="close-button" onClick={props.setTrigger}>close</button>
                <span className="date">{props.month+1} {props.day} {props.year}</span>
            </div>
        </div>
    ) : "";
}
