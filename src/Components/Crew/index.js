import React from 'react';
import Bobby from './Bobby.png'
import Johnny from './Johnny.png'
import Pete from './Pete.png'
import Lyle from './Lyle.png'
import './style.css'
export default function Crew(props) {

    return (
        <div id="crewBox">
            <h4 style={{paddingTop: '2vh'}}>Your crew</h4>
            <div className="row">
                <img className="profile" src={Bobby} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="names">Bobby</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    {props.bobbyMood === "calm" && <p className="calm">Calm</p>}
                    {props.bobbyMood === "nervous" && <p className="nervous">Nervous</p>}
                    
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="idle">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Johnny} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="names">Johnny</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    {props.johnnyMood === "calm" && <p className="calm">Calm</p>}
                    {props.johnnyMood === "nervous" && <p className="nervous">Nervous</p>}
                    {props.peteMood === "scared" && <p className="scared">Scared</p>}
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="idle">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Pete} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="names">Pete</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    {props.peteMood === "calm" && <p className="calm">Calm</p>}
                    {props.peteMood === "nervous" && <p className="nervous">Nervous</p>}
                    {props.peteMood === "scared" && <p className="scared">Scared</p>}
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="idle">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Lyle} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="names">Lyle</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    {props.lyleMood === "calm" && <p className="calm">Calm</p>}
                    {props.lyleMood === "nervous" && <p className="nervous">Nervous</p>}
                    {props.lyleMood === "scared" && <p className="scared">Scared</p>}
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="idle">Idle</p>
                </div>
            </div>

        </div>
    )
}