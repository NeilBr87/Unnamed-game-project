import React from 'react'
import './style.css'
export default function EndTurn(props) {

    function endDay() {
        props.setDay(props.day + 1)
        props.setDaysTilFullMoon(props.daysTilFullMoon - 1)
    }

    return (
        <div>
            <button id="ender" style={{
                width: '90vw',
                height: '12vh',
                backgroundColor: "#AB3428",
                borderRadius: '5px',
                fontSize: '24px',
                fontWeight: 'bold',
            }}
            
            onClick={endDay}>End day</button>
        </div>
    )
}