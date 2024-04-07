import { useState } from 'react';
import Bobby from '../Crew/Bobby.png'
import Johnny from '../Crew/Johnny.png'
import Pete from '../Crew/Pete.png'
import Lyle from '../Crew/Lyle.png'
import wright from './wright.png'
import main from './main.png'
import colver from './colver.png'
import braxton from './braxton.png'
import jefferson from './jefferson.png'
import boonies from './boonies.png'
import './style.css'
export default function Crew(props) {

    const [wrightAdd, setWrightAdd] = useState(false)
    const [mainAdd, setMainAdd] = useState(false)
    const [colverAdd, setColverAdd] = useState(false)
    const [braxtonAdd, setBraxtonAdd] = useState(false)
    const [jeffersonAdd, setJeffersonAdd] = useState(false)
    const [booniesAdd, setBooniesAdd] = useState(false)

    function openWright() {
        setWrightAdd(!wrightAdd)
    }

    function openMain() {
        setMainAdd(!mainAdd)
    }

    function openColver() {
        setColverAdd(!colverAdd)
    }

    function openBraxton() {
        setBraxtonAdd(!braxtonAdd)
    }

    function openJefferson() {
        setJeffersonAdd(!jeffersonAdd)
    }

    function openBoonies() {
        setBooniesAdd(!booniesAdd)
    }

    function wrightAssignBobby() {
        props.setWrightBobby(true)
        props.setBobbyAssignment("patrol")
        props.setWrightPatrollers(props.wrightPatrollers + 1)
    }

    function mainAssignBobby() {
        props.setMainBobby(true)
        props.setBobbyAssignment("patrol")
        props.setMainPatrollers(props.mainPatrollers + 1)
    }

    function wrightAssignJohnny() {
        props.setWrightJohnny(true)
        props.setJohnnyAssignment("patrol")
        props.setWrightPatrollers(props.wrightPatrollers + 1)
    }

    function mainAssignJohnny() {
        props.setMainJohnny(true)
        props.setJohnnyAssignment("patrol")
        props.setMainPatrollers(props.mainPatrollers + 1)
    }

    function wrightAssignPete() {
        props.setWrightPete(true)
        props.setPeteAssignment("patrol")
        props.setWrightPatrollers(props.wrightPatrollers + 1)
    }

    function mainAssignPete() {
        props.setMainPete(true)
        props.setPeteAssignment("patrol")
        props.setMainPatrollers(props.mainPatrollers + 1)
    }

    function wrightAssignLyle() {
        props.setWrightLyle(true)
        props.setLyleAssignment("patrol")
        props.setWrightPatrollers(props.wrightPatrollers + 1)
    }

    function mainAssignLyle() {
        props.setMainLyle(true)
        props.setLyleAssignment("patrol")
        props.setMainPatrollers(props.mainPatrollers + 1)
    }

    function colverAssignBobby() {
        props.setColverBobby(true)
        props.setBobbyAssignment("patrol")
        props.setColverPatrollers(props.colverPatrollers + 1)
    }

    function braxtonAssignBobby() {
        props.setBraxtonBobby(true)
        props.setBobbyAssignment("patrol")
        props.setBraxtonPatrollers(props.braxtonPatrollers + 1)
    }

    function colverAssignJohnny() {
        props.setColverJohnny(true)
        props.setJohnnyAssignment("patrol")
        props.setColverPatrollers(props.colverPatrollers + 1)
    }

    function braxtonAssignJohnny() {
        props.setBraxtonJohnny(true)
        props.setJohnnyAssignment("patrol")
        props.setBraxtonPatrollers(props.braxtonPatrollers + 1)
    }

    function colverAssignPete() {
        props.setColverPete(true)
        props.setPeteAssignment("patrol")
        props.setColverPatrollers(props.colverPatrollers + 1)
    }

    function braxtonAssignPete() {
        props.setBraxtonPete(true)
        props.setPeteAssignment("patrol")
        props.setBraxtonPatrollers(props.braxtonPatrollers + 1)
    }

    function colverAssignLyle() {
        props.setColverLyle(true)
        props.setLyleAssignment("patrol")
        props.setColverPatrollers(props.colverPatrollers + 1)
    }

    function braxtonAssignLyle() {
        props.setBraxtonLyle(true)
        props.setLyleAssignment("patrol")
        props.setBraxtonPatrollers(props.braxtonPatrollers + 1)
    }

    function jeffersonAssignBobby() {
        props.setJeffersonBobby(true)
        props.setBobbyAssignment("patrol")
        props.setJeffersonPatrollers(props.jeffersonPatrollers + 1)
    }

    function booniesAssignBobby() {
        props.setBooniesBobby(true)
        props.setBobbyAssignment("patrol")
        props.setBooniesPatrollers(props.booniesPatrollers + 1)
    }

    function jeffersonAssignJohnny() {
        props.setJeffersonJohnny(true)
        props.setJohnnyAssignment("patrol")
        props.setJeffersonPatrollers(props.jeffersonPatrollers + 1)
    }

    function booniesAssignJohnny() {
        props.setBooniesJohnny(true)
        props.setJohnnyAssignment("patrol")
        props.setBooniesPatrollers(props.booniesPatrollers + 1)
    }

    function jeffersonAssignPete() {
        props.setJeffersonPete(true)
        props.setPeteAssignment("patrol")
        props.setJeffersonPatrollers(props.jeffersonPatrollers + 1)
    }

    function booniesAssignPete() {
        props.setBooniesPete(true)
        props.setPeteAssignment("patrol")
        props.setBooniesPatrollers(props.booniesPatrollers + 1)
    } 

    function jeffersonAssignLyle() {
        props.setJeffersonLyle(true)
        props.setLyleAssignment("patrol")
        props.setJeffersonPatrollers(props.jeffersonPatrollers + 1)
    }

    function booniesAssignLyle() {
        props.setBooniesLyle(true)
        props.setLyleAssignment("patrol")
        props.setBooniesPatrollers(props.booniesPatrollers + 1)
    }


    function unassignBobby() {
        if (props.wrightBobby === true) {
            props.wrightPatrollers = props.wrightPatrollers - 1
        }
        if (props.mainBobby === true) {
            props.mainPatrollers = props.mainPatrollers - 1
        }
        if (props.colverBobby === true) {
            props.colverPatrollers = props.colverPatrollers - 1
        }
        if (props.braxtonBobby === true) {
            props.braxtonPatrollers = props.braxtonPatrollers - 1
        }
        if (props.jeffersonBobby === true) {
            props.jeffersonPatrollers = props.jeffersonPatrollers - 1
        }
        if (props.booniesBobby === true) {
            props.booniesPatrollers = props.booniesPatrollers - 1
        }
        props.setWrightBobby(false)
        props.setMainBobby(false)
        props.setColverBobby(false)
        props.setBraxtonBobby(false)
        props.setJeffersonBobby(false)
        props.setBooniesBobby(false)
        props.setBobbyAssignment("idle")
        
    }

    function unassignJohnny() {
        if (props.wrightJohnny === true) {
            props.wrightPatrollers = props.wrightPatrollers - 1
        }
        if (props.mainJohnny === true) {
            props.mainPatrollers = props.mainPatrollers - 1
        }
        if (props.colverJohnny === true) {
            props.colverPatrollers = props.colverPatrollers - 1
        }
        if (props.braxtonJohnny === true) {
            props.braxtonPatrollers = props.braxtonPatrollers - 1
        }
        
        
        props.setWrightJohnny(false)
        props.setMainJohnny(false)
        props.setColverJohnny(false)
        props.setBraxtonJohnny(false)
        props.setJeffersonJohnny(false)
        props.setBooniesJohnny(false)
        props.setJohnnyAssignment("idle")
    }

    function unassignPete() {
        props.setWrightPete(false)
        props.setMainPete(false)
        props.setColverPete(false)
        props.setBraxtonPete(false)
        props.setJeffersonPete(false)
        props.setBooniesPete(false)
        props.setPeteAssignment("idle")
    }

    function unassignLyle() {
        props.setWrightLyle(false)
        props.setMainLyle(false)
        props.setColverLyle(false)
        props.setBraxtonLyle(false)
        props.setJeffersonLyle(false)
        props.setBooniesLyle(false)
        props.setLyleAssignment("idle")
    }

    return (
        <div id="crewBox">
            <h4 style={{paddingTop: '2vh'}}>Locations</h4>
            
            
            {/* Copyline */}
            <div className="column">
                <img src={wright} alt="wright" style={{width: '40vw', height: '40vw', marginTop: '2vh'}}></img>
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
                    {props.bobbyAssignment === "idle" && <img onClick={wrightAssignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.johnnyAssignment === "idle" && <img onClick={wrightAssignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.peteAssignment === "idle" && <img onClick={wrightAssignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.lyleAssignment === "idle" && <img onClick={wrightAssignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                    <p className="xOut">X</p>
                </div>)}
            </div>
        {/* /Copyline */}

        <div style={{height: "8vh"}}></div>


        {/* Copyline */}
        <div className="column">
                <img src={main} alt="main" style={{width: '40vw', height: '40vw', marginTop: '2vh'}}></img>
                <h4 style={{marginTop: '0vh', fontSize: '16px'}}>Main Street</h4>
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
                    {props.bobbyAssignment === "idle" && <img onClick={mainAssignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.johnnyAssignment === "idle" && <img onClick={mainAssignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.peteAssignment === "idle" && <img onClick={mainAssignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.lyleAssignment === "idle" && <img onClick={mainAssignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                    <p className="xOut">X</p>
                </div>)}
            </div>
        {/* /Copyline */}

        <div style={{height: "8vh"}}></div>

        {/* Copyline */}
        <div className="column">
                <img src={colver} alt="wright" style={{width: '40vw', height: '40vw', marginTop: '2vh'}}></img>
                <h4 style={{marginTop: '0vh', fontSize: '16px'}}>Colver National Forest</h4>
                <div className="row" style={{marginTop: '-5vh'}}>
                    <p>{props.colverDays} day since patrol</p>
                    <p>Status:</p>
                    {props.colverStatus === "safe" && <p className="safe" style={{marginLeft: '-3vw'}}>Safe</p>}
                    {props.colverStatus === "dangerous" && <p className="danger" style={{marginLeft: '-3vw'}}>Danger</p>}
                    {props.colverStatus === "lost" && <p className="lost" style={{marginLeft: '-3vw'}}>Lost</p>}
                </div>
                {props.colverStatus !== "lost" && <p style={{marginTop: '-2vh', marginBottom: '0vh', fontWeight: 'bold'}}>Patrolling</p>}
                <div className="row" style={{gap: '2vw'}}>
                    {props.colverBobby && <img onClick={unassignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.colverJohnny && <img onClick={unassignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.colverPete && <img onClick={unassignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.colverLyle && <img onClick={unassignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                </div>
                {props.colverStatus !== "lost" && <button onClick={openColver} className="addButton">Add</button>}
                {colverAdd && (
                <div className="row" style={{gap: '2vw'}}>
                    {props.bobbyAssignment === "idle" && <img onClick={colverAssignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.johnnyAssignment === "idle" && <img onClick={colverAssignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.peteAssignment === "idle" && <img onClick={colverAssignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.lyleAssignment === "idle" && <img onClick={colverAssignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                    <p className="xOut">X</p>
                </div>)}
            </div>
        {/* /Copyline */}

        <div style={{height: "8vh"}}></div>

        {/* Copyline */}
        <div className="column">
                <img src={braxton} alt="main" style={{width: '40vw', height: '40vw', marginTop: '2vh'}}></img>
                <h4 style={{marginTop: '0vh', fontSize: '16px'}}>Braxton's Pond</h4>
                <div className="row" style={{marginTop: '-5vh'}}>
                    <p>{props.braxtonDays} day since patrol</p>
                    <p>Status:</p>
                    {props.braxtonStatus === "safe" && <p className="safe" style={{marginLeft: '-3vw'}}>Safe</p>}
                    {props.braxtonStatus === "dangerous" && <p className="danger" style={{marginLeft: '-3vw'}}>Danger</p>}
                    {props.braxtonStatus === "lost" && <p className="lost" style={{marginLeft: '-3vw'}}>Lost</p>}
                </div>
                {props.braxtonStatus !== "lost" && <p style={{marginTop: '-2vh', marginBottom: '0vh', fontWeight: 'bold'}}>Patrolling</p>}
                <div className="row" style={{gap: '2vw'}}>
                    {props.braxtonBobby && <img onClick={unassignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.braxtonJohnny && <img onClick={unassignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.braxtonPete && <img onClick={unassignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.braxtonLyle && <img onClick={unassignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                </div>
                {props.braxtonStatus !== "lost" && <button onClick={openBraxton} className="addButton">Add</button>}
                {braxtonAdd && (
                <div className="row" style={{gap: '2vw'}}>
                    {props.bobbyAssignment === "idle" && <img onClick={braxtonAssignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.johnnyAssignment === "idle" && <img onClick={braxtonAssignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.peteAssignment === "idle" && <img onClick={braxtonAssignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.lyleAssignment === "idle" && <img onClick={braxtonAssignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                    <p className="xOut">X</p>
                </div>)}
            </div>
        {/* /Copyline */}

        <div style={{height: "8vh"}}></div>

        {/* Copyline */}
        <div className="column">
                <img src={jefferson} alt="main" style={{width: '40vw', height: '40vw', marginTop: '2vh'}}></img>
                <h4 style={{marginTop: '0vh', fontSize: '16px'}}>Jefferson Street</h4>
                <div className="row" style={{marginTop: '-5vh'}}>
                    <p>{props.jeffersonDays} day since patrol</p>
                    <p>Status:</p>
                    {props.jeffersonStatus === "safe" && <p className="safe" style={{marginLeft: '-3vw'}}>Safe</p>}
                    {props.jeffersonStatus === "dangerous" && <p className="danger" style={{marginLeft: '-3vw'}}>Danger</p>}
                    {props.jeffersonStatus === "lost" && <p className="lost" style={{marginLeft: '-3vw'}}>Lost</p>}
                </div>
                {props.jeffersonStatus !== "lost" && <p style={{marginTop: '-2vh', marginBottom: '0vh', fontWeight: 'bold'}}>Patrolling</p>}
                <div className="row" style={{gap: '2vw'}}>
                    {props.jeffersonBobby && <img onClick={unassignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.jeffersonJohnny && <img onClick={unassignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.jeffersonPete && <img onClick={unassignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.jeffersonLyle && <img onClick={unassignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                </div>
                {props.jeffersonStatus !== "lost" && <button onClick={openJefferson} className="addButton">Add</button>}
                {jeffersonAdd && (
                <div className="row" style={{gap: '2vw'}}>
                    {props.bobbyAssignment === "idle" && <img onClick={jeffersonAssignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.johnnyAssignment === "idle" && <img onClick={jeffersonAssignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.peteAssignment === "idle" && <img onClick={jeffersonAssignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.lyleAssignment === "idle" && <img onClick={jeffersonAssignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                    <p className="xOut">X</p>
                </div>)}
                </div>
        {/* /Copyline */}

        <div style={{height: "8vh"}}></div>

        {/* Copyline */}
        <div className="column">
                <img src={boonies} alt="main" style={{width: '40vw', height: '40vw', marginTop: '2vh'}}></img>
                <h4 style={{marginTop: '0vh', fontSize: '16px'}}>The Boonies</h4>
                <div className="row" style={{marginTop: '-5vh'}}>
                    <p>{props.booniesDays} day since patrol</p>
                    <p>Status:</p>
                    {props.booniesStatus === "safe" && <p className="safe" style={{marginLeft: '-3vw'}}>Safe</p>}
                    {props.booniesStatus === "dangerous" && <p className="danger" style={{marginLeft: '-3vw'}}>Danger</p>}
                    {props.booniesStatus === "lost" && <p className="lost" style={{marginLeft: '-3vw'}}>Lost</p>}
                </div>
                {props.booniesStatus !== "lost" && <p style={{marginTop: '-2vh', marginBottom: '0vh', fontWeight: 'bold'}}>Patrolling</p>}
                <div className="row" style={{gap: '2vw'}}>
                    {props.booniesBobby && <img onClick={unassignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.booniesJohnny && <img onClick={unassignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.booniesPete && <img onClick={unassignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.booniesLyle && <img onClick={unassignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                </div>
                {props.booniesStatus !== "lost" && <button onClick={openBoonies} className="addButton">Add</button>}
                {booniesAdd && (
                <div className="row" style={{gap: '2vw'}}>
                    {props.bobbyAssignment === "idle" && <img onClick={booniesAssignBobby} className="patrollers" src={Bobby} alt="patrol"></img>}
                    {props.johnnyAssignment === "idle" && <img onClick={booniesAssignJohnny} className="patrollers" src={Johnny} alt="patrol"></img>}
                    {props.peteAssignment === "idle" && <img onClick={booniesAssignPete} className="patrollers" src={Pete} alt="patrol"></img>}
                    {props.lyleAssignment === "idle" && <img onClick={booniesAssignLyle} className="patrollers" src={Lyle} alt="patrol"></img>}
                    <p className="xOut">X</p>
                </div>)}
                </div>
        {/* /Copyline */}



        </div>
    )
}