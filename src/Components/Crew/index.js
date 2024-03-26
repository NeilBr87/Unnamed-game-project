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
                    <p className="fields">Bobby</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    <p className="fields">Calm</p>
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="fields">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Johnny} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="fields">Johnny</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    <p className="fields">Calm</p>
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="fields">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Pete} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="fields">Pete</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    <p className="fields">Calm</p>
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="fields">Idle</p>
                </div>
            </div>

            <div className="row">
                <img className="profile" src={Lyle} alt="bobby"></img>
                <div className="column">
                    <p className="fields">Name</p>
                    <p className="fields">Lyle</p>
                </div>
                <div className="column">
                    <p className="fields">Mood</p>
                    <p className="fields">Calm</p>
                </div>

                <div className="column">
                    <p className="fields">Assignment</p>
                    <p className="fields">Idle</p>
                </div>
            </div>

        </div>
    )
}