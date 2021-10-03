import './editDay.css'
import { useEffect, useState } from 'react';

export default function EditDay(props) {
    const dateString = `${props.year}-${props.month+1}-${props.day}`;

    const entry = props.entries.find(entry => entry.date === dateString);
    const [text, setText] = useState('');
    useEffect(() => {
        if(entry){
            setText(entry.entry);
        }
        else{
            setText('');
        }
    }, [dateString,entry])

    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (props.trigger) ? (
        <div className="editDay">
            <div className="popupWrapper">
                <div className="popup-inner">
                    <button className="quit-button" onClick={props.setTrigger}>quit</button>
                    <div className="date">{props.month + 1} {props.day} {props.year}</div>
                    <form className="dayForm" onSubmit={handleSubmit}>
                        <textarea placeholder="how was your day..." value={text} type="text" className="editText" onChange={e=>setText(e.target.value)}></textarea>
                        <input type="submit" value="save" className="editSave"/>
                    </form>
                </div>
            </div>
        </div>
    ) : <></>;
}
