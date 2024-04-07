import {useState, useEffect} from 'react';
import './style.css';

export default function DayMenu(props) {

    const [moonStatus, setMoonStatus] = useState("This lunar stage is tranquil - areas will take three days without patrol to become dangerous.")

    useEffect(() => {
        if (props.daysTilFullMoon < 30 && props.daysTilFullMoon > 18) {
            setMoonStatus("This lunar stage is tranquil - areas will take three days without patrol to become dangerous.")
        }
        if (props.daysTilFullMoon < 18 && props.daysTilFullMoon > 10) {
            setMoonStatus("This lunar stage is dangerous - areas will take two day without patrol to become dangerous.")
        }
        if (props.daysTilFullMoon < 10 && props.daysTilFullMoon > 0) {
            setMoonStatus("You are approaching the full moon - areas will take one day without patrol to become dangerous.")
        }

    }, [props.daysTilFullMoon]
    )

    return (
        <div id="crewBox">
            <h3 style={{paddingTop: '2vh'}}>Day {props.day}</h3>
            <p>Days until full moon: {props.daysTilFullMoon}</p>
            <p>Lunar phase: {props.lunarPhase}</p>
            <p id="lunarStatus"><em>{moonStatus}</em></p>
        </div>
    )

}