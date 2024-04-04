import { useState } from 'react';
import Bobby from '../Crew/Bobby.png'
import Johnny from '../Crew/Johnny.png'
import Pete from '../Crew/Pete.png'
import Lyle from '../Crew/Lyle.png'
import './style.css'
export default function Crew(props) {

    const [wrightAdd, setWrightAdd] = useState(false)
    const [mainAdd, setMainAdd] = useState(false)

    function openWright() {
        setWrightAdd(!wrightAdd)
    }

    function openMain() {
        setMainAdd(!mainAdd)
    }

    function wrightAssignBobby() {
        props.setWrightBobby(true)
    }

    function mainAssignBobby() {
        props.setMainBobby(true)
    }

    function wrightAssignJohnny() {
        props.setWrightJohnny(true)
    }

    function mainAssignJohnny() {
        props.setMainJohnny(true)
    }

    function wrightAssignPete() {
        props.setWrightPete(true)
    }

    function mainAssignPete() {
        props.setMainPete(true)
    }

    function wrightAssignLyle() {
        props.setWrightLyle(true)
    }

    function mainAssignLyle() {
        props.setMainLyle(true)
    }

    function unassignBobby() {
        props.setWrightBobby(false)
        props.setMainBobby(false)
    }

    function unassignJohnny() {
        props.setWrightJohnny(false)
        props.setMainJohnny(false)
    }

    function unassignPete() {
        props.setWrightPete(false)
        props.setMainPete(false)
    }

    function unassignLyle() {
        props.setWrightLyle(false)
        props.setMainLyle(false)
    }

    return (
        <div id="crewBox">
            <h4 style={{paddingTop: '2vh'}}>Locations</h4>
            
            {/* Copyline */}
            <div className="column">
                <h4 style={{marginTop: '0vh', fontSize: '16px'}}>Wright Intersection</h4>
                <div className="row" style={{marginTop: '-5vh'}}>
                    <p>{props.wrightDays} day since patrol</p>
                    <p>Status:</p>
                    {props.wrightStatus === "safe" && <p className="safe" style={{marginLeft: '-3vw'}}>Safe</p>}
                    {props.wrightStatus === "dangerous" && <p className="danger" style={{marginLeft: '-3vw'}}>Danger</p>}
                    {props.wrightStatus === "lost" && <p className="lost" style={{marginLeft: '-3vw'}}>Lost</p>}
                </div>
                {props.wrightStatus !== "lost" && <p style={{marginTop: '-2vh', marginBottom: '0vh', fontWeight: 'bold'}}>Patrolling</p>}
                <div className="row" style={{gap: '2vw'}}>
                    {props.wrightBobby && <img onClick={unassignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.wrightJohnny && <img onClick={unassignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.wrightPete && <img onClick={unassignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.wrightLyle && <img onClick={unassignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                </div>
                {props.wrightStatus !== "lost" && <button onClick={openWright} className="addButton">Add</button>}
                {wrightAdd && (
                <div className="row" style={{gap: '2vw'}}>
                    {!props.wrightBobby && <img onClick={wrightAssignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {!props.wrightJohnny && <img onClick={wrightAssignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {!props.wrightPete && <img onClick={wrightAssignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {!props.wrightLyle && <img onClick={wrightAssignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                    <p className="xOut">X</p>
                </div>)}
            </div>
        {/* /Copyline */}


        {/* Copyline */}
        <div className="column">
                <h4 style={{marginTop: '0vh', fontSize: '16px'}}>Main Intersection</h4>
                <div className="row" style={{marginTop: '-5vh'}}>
                    <p>{props.mainDays} day since patrol</p>
                    <p>Status:</p>
                    {props.mainStatus === "safe" && <p className="safe" style={{marginLeft: '-3vw'}}>Safe</p>}
                    {props.mainStatus === "dangerous" && <p className="danger" style={{marginLeft: '-3vw'}}>Danger</p>}
                    {props.mainStatus === "lost" && <p className="lost" style={{marginLeft: '-3vw'}}>Lost</p>}
                </div>
                {props.mainStatus !== "lost" && <p style={{marginTop: '-2vh', marginBottom: '0vh', fontWeight: 'bold'}}>Patrolling</p>}
                <div className="row" style={{gap: '2vw'}}>
                    {props.mainBobby && <img onClick={unassignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.mainJohnny && <img onClick={unassignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.mainPete && <img onClick={unassignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.mainLyle && <img onClick={unassignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                </div>
                {props.mainStatus !== "lost" && <button onClick={openMain} className="addButton">Add</button>}
                {mainAdd && (
                <div className="row" style={{gap: '2vw'}}>
                    {!props.mainBobby && <img onClick={mainAssignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {!props.mainJohnny && <img onClick={mainAssignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {!props.mainPete && <img onClick={mainAssignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {!props.mainLyle && <img onClick={mainAssignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                    <p className="xOut">X</p>
                </div>)}
            </div>
        {/* /Copyline */}

            

        </div>
    )
}