import React from 'react';
import Bobby from './Bobby.png'
import Johnny from './Johnny.png'
import Pete from './Pete.png'
import Lyle from './Lyle.png'
import './style.css'
export default function Crew() {

    return (
        <div id="crewBox">
            <h4 style={{paddingTop: '2vh'}}>Your crew</h4>
            <div className="row">
                <img className="profile" src={Bobby} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="items">Bobby</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    <p className="items">Calm</p>
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="items">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Johnny} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="items">Johnny</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    <p className="items">Calm</p>
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="items">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Pete} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="items">Pete</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    <p className="items">Calm</p>
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="items">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Lyle} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="items">Lyle</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    <p className="items">Calm</p>
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="items">Idle</p>
                </div>
            </div>

        </div>
    )
}