import './editDay.css'

export default function EditDay(props) {
    return (props.trigger) ? (
        <div className="editDay">
            <div className="popupWrapper">
                <div className="popup-inner">
                    <button className="quit-button" onClick={props.setTrigger}>quit</button>
                    <div className="date">{props.month + 1} {props.day} {props.year}</div>
                    <form className="dayForm">
                        <textarea placeholder="how was your day..." type="text" className="editText"></textarea>
                        <button className="editSave">save</button>

                    </form>
                </div>
            </div>
        </div>
    ) : <></>;
}
