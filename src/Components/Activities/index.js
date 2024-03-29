import { useState } from 'react';
import Bobby from '../Crew/Bobby.png'
import Johnny from '../Crew/Johnny.png'
import Pete from '../Crew/Pete.png'
import Lyle from '../Crew/Lyle.png'
import './style.css'
export default function Crew() {

    const [wrightAdd, setWrightAdd] = useState(false)

    function openWright() {
        setWrightAdd(!wrightAdd)
    }

    return (
        <div id="crewBox">
            <h4 style={{paddingTop: '2vh'}}>Locations</h4>
            
            {/* Copyline */}
            <div className="column">
                <h4 style={{marginTop: '0vh', fontSize: '16px'}}>Wright Intersection</h4>
                <div className="row" style={{marginTop: '-5vh'}}>
                    <p>1 day since patrol</p>
                    <p>Status:</p>
                    <p>Safe</p>
                </div>
                <p style={{marginTop: '-2vh', marginBottom: '0vh', fontWeight: 'bold'}}>Patrolling</p>
                <div className="row" style={{gap: '2vw'}}>
                    <img className="patrollers" src={Bobby} alt="patrol"></img>
                    <img className="patrollers" src={Johnny} alt="patrol"></img>
                    <img className="patrollers" src={Pete} alt="patrol"></img>
                    <img className="patrollers" src={Lyle} alt="patrol"></img>
                </div>
                <button onClick={openWright} className="addButton">Add</button>
                {wrightAdd && (
                <div className="row" style={{gap: '2vw'}}>
                    <img className="patrollers" src={Bobby} alt="patrol"></img>
                    <img className="patrollers" src={Johnny} alt="patrol"></img>
                    <img className="patrollers" src={Pete} alt="patrol"></img>
                    <img className="patrollers" src={Lyle} alt="patrol"></img>
                    <p className="xOut">X</p>
                </div>)}
            </div>
        {/* /Copyline */}


        </div>
    )
}