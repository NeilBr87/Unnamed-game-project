import React from 'react'
import './style.css'
export default function EndTurn(props) {

    function endDay() {
        props.setDay(props.day + 1)
        props.setDaysTilFullMoon(props.daysTilFullMoon - 1)
        if (props.wrightBobby === false && props.wrightJohnny === false && props.wrightPete === false && props.wrightLyle === false) {
            props.setWrightDays(props.wrightDays + 1)
        }
        if (props.mainBobby === false && props.mainJohnny === false && props.mainPete === false && props.mainLyle === false) {
            props.setMainDays(props.mainDays + 1)
        }
        if (props.colverBobby === false && props.colverJohnny === false && props.colverPete === false && props.colverLyle === false) {
            props.setColverDays(props.colverDays + 1)
        }
        if (props.braxtonBobby === false && props.braxtonJohnny === false && props.braxtonPete === false && props.braxtonLyle === false) {
            props.setBraxtonDays(props.braxtonDays + 1)
        }
        if (props.booniesBobby === false && props.booniesJohnny === false && props.booniesPete === false && props.booniesLyle === false) {
            props.setBooniesDays(props.booniesDays + 1)
        }
        if (props.jeffersonBobby === false && props.jeffersonJohnny === false && props.jeffersonPete === false && props.jeffersonLyle === false) {
            props.setJeffersonDays(props.jeffersonDays + 1)
        }
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