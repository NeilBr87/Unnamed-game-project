import React from 'react';
import Header from '../Header';
import Map from './Map.JPG';
import Crew from '../Crew'
import Activities from '../Activities';
import EndTurn from '../EndTurn';
import DayMenu from '../DayMenu';
import Debug from '../Debug';
import './style.css'
export default function Container(props) {

    return (
        <div id="container">
            <Header />

            <DayMenu day={props.day} setDay={props.setDay} daysTilFullMoon={props.daysTilFullMoon} setDaysTilFullMoon={props.setDaysTilFullMoon} lunarPhase={props.lunarPhase} setLunarPhase={props.setLunarPhase} />

            <img id="image" src={Map} alt="Map of Havenwood" style={{width: '90vw', marginTop: '2vh', borderRadius: '5px', border: '3px inset #B49A67'}} />

            <Crew 
            bobbyAssignment={props.bobbyAssignment} setBobbyAssignment={props.setBobbyAssignment} johnnyAssignment={props.johnnyAssignment} setJohnnyAssignment={props.setJohnnyAssignment} peteAssignment={props.peteAssignment} setPeteAssignment={props.setPeteAssignment} lyleAssignment={props.lyleAssignment} setLyleAssignment={props.setLyleAssignment}
            bobbyMood={props.bobbyMood} setBobbyMood={props.setBobbyMood} bobbyUsed={props.bobbyUsed} setBobbyUsed={props.setBobbyUsed} johnnyMood={props.johnnyMood} setJohnnyMood={props.setJohnnyMood} johnnyUsed={props.johnnyUsed} setJohnnyUsed={props.setJohnnyUsed} peteMood={props.peteMood} setPeteMood={props.setPeteMood} peteUsed={props.peteUsed} setPeteUsed={props.setPeteUsed} lyleMood={props.lyleMood} setLyleMood={props.setLyleMood} lyleUsed={props.lyleUsed} setLyleUsed={props.setLyleUsed} wrightBobby={props.wrightBobby} setWrightBobby={props.setWrightBobby} wrightJohnny={props.wrightJohnny} setWrightJohnny={props.setWrightJohnny} wrightPete={props.wrightPete} setWrightPete={props.setWrightPete} wrightLyle={props.wrightLyle} setWrightLyle={props.setWrightLyle} mainBobby={props.mainBobby} setMainBobby={props.setMainBobby} mainJohnny={props.mainJohnny} setMainJohnny={props.setMainJohnny} mainPete={props.mainPete} setMainPete={props.setMainPete} mainLyle={props.mainLyle} setMainLyle={props.setMainLyle} colverBobby={props.colverBobby} setColverBobby={props.setColverBobby} colverJohnny={props.colverJohnny} setColverJohnny={props.setColverJohnny} colverPete={props.colverPete} setColverPete={props.setColverPete} colverLyle={props.colverLyle} setColverLyle={props.setColverLyle} braxtonBobby={props.braxtonBobby} setBraxtonBobby={props.setBraxtonBobby} braxtonJohnny={props.braxtonJohnny} setBraxtonJohnny={props.setBraxtonJohnny} braxtonPete={props.braxtonPete} setBraxtonPete={props.setBraxtonPete} braxtonLyle={props.braxtonLyle} setBraxtonLyle={props.setBraxtonLyle} booniesBobby={props.booniesBobby} setBooniesBobby={props.setBooniesBobby} booniesJohnny={props.booniesJohnny} setBooniesJohnny={props.setBooniesJohnny} booniesPete={props.booniesPete} setBooniesPete={props.setBooniesPete} booniesLyle={props.booniesLyle} setBooniesLyle={props.setBooniesLyle} jeffersonBobby={props.jeffersonBobby} setJeffersonBobby={props.setJeffersonBobby} jeffersonJohnny={props.jeffersonJohnny} setJeffersonJohnny={props.setJeffersonJohnny} jeffersonPete={props.jeffersonPete} setJeffersonPete={props.setJeffersonPete} jeffersonLyle={props.jeffersonLyle} setJeffersonLyle={props.setJeffersonLyle} />

            <Activities 
    bobbyAssignment={props.bobbyAssignment} setBobbyAssignment={props.setBobbyAssignment}
    johnnyAssignment={props.johnnyAssignment} setJohnnyAssignment={props.setJohnnyAssignment}
    peteAssignment={props.peteAssignment} setPeteAssignment={props.setPeteAssignment}
    lyleAssignment={props.lyleAssignment} setLyleAssignment={props.setLyleAssignment}
    bobbyMood={props.bobbyMood} setBobbyMood={props.setBobbyMood} 
    bobbyUsed={props.bobbyUsed} setBobbyUsed={props.setBobbyUsed} 
    johnnyMood={props.johnnyMood} setJohnnyMood={props.setJohnnyMood} 
    johnnyUsed={props.johnnyUsed} setJohnnyUsed={props.setJohnnyUsed} 
    peteMood={props.peteMood} setPeteMood={props.setPeteMood} 
    peteUsed={props.peteUsed} setPeteUsed={props.setPeteUsed} 
    lyleMood={props.lyleMood} setLyleMood={props.setLyleMood} 
    lyleUsed={props.lyleUsed} setLyleUsed={props.setLyleUsed} 
    wrightBobby={props.wrightBobby} setWrightBobby={props.setWrightBobby} 
    wrightJohnny={props.wrightJohnny} setWrightJohnny={props.setWrightJohnny} 
    wrightPete={props.wrightPete} setWrightPete={props.setWrightPete} 
    wrightLyle={props.wrightLyle} setWrightLyle={props.setWrightLyle} 
    mainBobby={props.mainBobby} setMainBobby={props.setMainBobby} 
    mainJohnny={props.mainJohnny} setMainJohnny={props.setMainJohnny} 
    mainPete={props.mainPete} setMainPete={props.setMainPete} 
    mainLyle={props.mainLyle} setMainLyle={props.setMainLyle} 
    colverBobby={props.colverBobby} setColverBobby={props.setColverBobby} 
    colverJohnny={props.colverJohnny} setColverJohnny={props.setColverJohnny} 
    colverPete={props.colverPete} setColverPete={props.setColverPete} 
    colverLyle={props.colverLyle} setColverLyle={props.setColverLyle} 
    braxtonBobby={props.braxtonBobby} setBraxtonBobby={props.setBraxtonBobby} 
    braxtonJohnny={props.braxtonJohnny} setBraxtonJohnny={props.setBraxtonJohnny} 
    braxtonPete={props.braxtonPete} setBraxtonPete={props.setBraxtonPete} 
    braxtonLyle={props.braxtonLyle} setBraxtonLyle={props.setBraxtonLyle} 
    booniesBobby={props.booniesBobby} setBooniesBobby={props.setBooniesBobby} 
    booniesJohnny={props.booniesJohnny} setBooniesJohnny={props.setBooniesJohnny} 
    booniesPete={props.booniesPete} setBooniesPete={props.setBooniesPete} 
    booniesLyle={props.booniesLyle} setBooniesLyle={props.setBooniesLyle} 
    jeffersonBobby={props.jeffersonBobby} setJeffersonBobby={props.setJeffersonBobby} 
    jeffersonJohnny={props.jeffersonJohnny} setJeffersonJohnny={props.setJeffersonJohnny} 
    jeffersonPete={props.jeffersonPete} setJeffersonPete={props.setJeffersonPete} 
    jeffersonLyle={props.jeffersonLyle} setJeffersonLyle={props.setJeffersonLyle}
    wrightDays={props.wrightDays} setWrightDays={props.setWrightDays} 
    wrightStatus={props.wrightStatus} setWrightStatus={props.setWrightStatus} 
    mainDays={props.mainDays} setMainDays={props.setMainDays} 
    mainStatus={props.mainStatus} setMainStatus={props.setMainStatus} 
    colverDays={props.colverDays} setColverDays={props.setColverDays} 
    colverStatus={props.colverStatus} setColverStatus={props.setColverStatus} 
    braxtonDays={props.braxtonDays} setBraxtonDays={props.setBraxtonDays} 
    braxtonStatus={props.braxtonStatus} setBraxtonStatus={props.setBraxtonStatus} 
    booniesDays={props.booniesDays} setBooniesDays={props.setBooniesDays} 
    booniesStatus={props.booniesStatus} setBooniesStatus={props.setBooniesStatus} 
    jeffersonDays={props.jeffersonDays} setJeffersonDays={props.setJeffersonDays} 
    jeffersonStatus={props.jeffersonStatus} setJeffersonStatus={props.setJeffersonStatus} 
    day={props.day} setDay={props.setDay}
    daysTilFullMoon={props.daysTilFullMoon} setDaysTilFullMoon={props.setDaysTilFullMoon}
    lunarPhase={props.lunarPhase} setLunarPhase={props.setLunarPhase}
    wrightPatrollers={props.wrightPatrollers} setWrightPatrollers={props.setWrightPatrollers}
    mainPatrollers={props.mainPatrollers} setMainPatrollers={props.setMainPatrollers}
    colverPatrollers={props.colverPatrollers} setColverPatrollers={props.setColverPatrollers}
    braxtonPatrollers={props.braxtonPatrollers} setBraxtonPatrollers={props.setBraxtonPatrollers}
    booniesPatrollers={props.booniesPatrollers} setBooniesPatrollers={props.setBooniesPatrollers}
    jeffersonPatrollers={props.jeffersonPatrollers} setJeffersonPatrollers={props.setJeffersonPatrollers}
    
/>

            {props.bobbyAssignment !== "idle" && props.johnnyAssignment !== "idle" && props.peteAssignment !== "idle" && props.lyleAssignment !== "idle" && (
            <EndTurn 
                day={props.day} setDay={props.setDay}
                daysTilFullMoon={props.daysTilFullMoon} setDaysTilFullMoon={props.setDaysTilFullMoon}
                wrightBobby={props.wrightBobby} setWrightBobby={props.setWrightBobby}
                wrightJohnny={props.wrightJohnny} setWrightJohnny={props.setWrightJohnny}
                wrightPete={props.wrightPete} setWrightPete={props.setWrightPete}
                wrightLyle={props.wrightLyle} setWrightLyle={props.setWrightLyle}
                wrightDays={props.wrightDays} setWrightDays={props.setWrightDays}
                mainBobby={props.mainBobby} setMainBobby={props.setMainBobby}
                mainJohnny={props.mainJohnny} setMainJohnny={props.setMainJohnny}
                mainPete={props.mainPete} setMainPete={props.setMainPete}
                mainLyle={props.mainLyle} setMainLyle={props.setMainLyle}
                mainDays={props.mainDays} setMainDays={props.setMainDays}
                colverBobby={props.colverBobby} setColverBobby={props.setColverBobby}
                colverJohnny={props.colverJohnny} setColverJohnny={props.setColverJohnny}
                colverPete={props.colverPete} setColverPete={props.setColverPete}
                colverLyle={props.colverLyle} setColverLyle={props.setColverLyle}
                colverDays={props.colverDays} setColverDays={props.setColverDays}
                braxtonBobby={props.braxtonBobby} setBraxtonBobby={props.setBraxtonBobby}
                braxtonJohnny={props.braxtonJohnny} setBraxtonJohnny={props.setBraxtonJohnny}
                braxtonPete={props.braxtonPete} setBraxtonPete={props.setBraxtonPete}
                braxtonLyle={props.braxtonLyle} setBraxtonLyle={props.setBraxtonLyle}
                braxtonDays={props.braxtonDays} setBraxtonDays={props.setBraxtonDays}
                booniesBobby={props.booniesBobby} setBooniesBobby={props.setBooniesBobby}
                booniesJohnny={props.booniesJohnny} setBooniesJohnny={props.setBooniesJohnny}
                booniesPete={props.booniesPete} setBooniesPete={props.setBooniesPete}
                booniesLyle={props.booniesLyle} setBooniesLyle={props.setBooniesLyle}
                booniesDays={props.booniesDays} setBooniesDays={props.setBooniesDays}
                jeffersonBobby={props.jeffersonBobby} setJeffersonBobby={props.setJeffersonBobby}
                jeffersonJohnny={props.jeffersonJohnny} setJeffersonJohnny={props.setJeffersonJohnny}
                jeffersonPete={props.jeffersonPete} setJeffersonPete={props.setJeffersonPete}
                jeffersonLyle={props.jeffersonLyle} setJeffersonLyle={props.setJeffersonLyle}
                jeffersonDays={props.jeffersonDays} setJeffersonDays={props.setJeffersonDays}

                />)}

            <br></br>

            <Debug bobbyAssignment={props.bobbyAssignment} setBobbyAssignment={props.setBobbyAssignment}
    johnnyAssignment={props.johnnyAssignment} setJohnnyAssignment={props.setJohnnyAssignment}
    peteAssignment={props.peteAssignment} setPeteAssignment={props.setPeteAssignment}
    lyleAssignment={props.lyleAssignment} setLyleAssignment={props.setLyleAssignment}
    bobbyMood={props.bobbyMood} setBobbyMood={props.setBobbyMood} 
    bobbyUsed={props.bobbyUsed} setBobbyUsed={props.setBobbyUsed} 
    johnnyMood={props.johnnyMood} setJohnnyMood={props.setJohnnyMood} 
    johnnyUsed={props.johnnyUsed} setJohnnyUsed={props.setJohnnyUsed} 
    peteMood={props.peteMood} setPeteMood={props.setPeteMood} 
    peteUsed={props.peteUsed} setPeteUsed={props.setPeteUsed} 
    lyleMood={props.lyleMood} setLyleMood={props.setLyleMood} 
    lyleUsed={props.lyleUsed} setLyleUsed={props.setLyleUsed} 
    wrightBobby={props.wrightBobby} setWrightBobby={props.setWrightBobby} 
    wrightJohnny={props.wrightJohnny} setWrightJohnny={props.setWrightJohnny} 
    wrightPete={props.wrightPete} setWrightPete={props.setWrightPete} 
    wrightLyle={props.wrightLyle} setWrightLyle={props.setWrightLyle} 
    mainBobby={props.mainBobby} setMainBobby={props.setMainBobby} 
    mainJohnny={props.mainJohnny} setMainJohnny={props.setMainJohnny} 
    mainPete={props.mainPete} setMainPete={props.setMainPete} 
    mainLyle={props.mainLyle} setMainLyle={props.setMainLyle} 
    colverBobby={props.colverBobby} setColverBobby={props.setColverBobby} 
    colverJohnny={props.colverJohnny} setColverJohnny={props.setColverJohnny} 
    colverPete={props.colverPete} setColverPete={props.setColverPete} 
    colverLyle={props.colverLyle} setColverLyle={props.setColverLyle} 
    braxtonBobby={props.braxtonBobby} setBraxtonBobby={props.setBraxtonBobby} 
    braxtonJohnny={props.braxtonJohnny} setBraxtonJohnny={props.setBraxtonJohnny} 
    braxtonPete={props.braxtonPete} setBraxtonPete={props.setBraxtonPete} 
    braxtonLyle={props.braxtonLyle} setBraxtonLyle={props.setBraxtonLyle} 
    booniesBobby={props.booniesBobby} setBooniesBobby={props.setBooniesBobby} 
    booniesJohnny={props.booniesJohnny} setBooniesJohnny={props.setBooniesJohnny} 
    booniesPete={props.booniesPete} setBooniesPete={props.setBooniesPete} 
    booniesLyle={props.booniesLyle} setBooniesLyle={props.setBooniesLyle} 
    jeffersonBobby={props.jeffersonBobby} setJeffersonBobby={props.setJeffersonBobby} 
    jeffersonJohnny={props.jeffersonJohnny} setJeffersonJohnny={props.setJeffersonJohnny} 
    jeffersonPete={props.jeffersonPete} setJeffersonPete={props.setJeffersonPete} 
    jeffersonLyle={props.jeffersonLyle} setJeffersonLyle={props.setJeffersonLyle}
    wrightDays={props.wrightDays} setWrightDays={props.setWrightDays} 
    wrightStatus={props.wrightStatus} setWrightStatus={props.setWrightStatus} 
    mainDays={props.mainDays} setMainDays={props.setMainDays} 
    mainStatus={props.mainStatus} setMainStatus={props.setMainStatus} 
    colverDays={props.colverDays} setColverDays={props.setColverDays} 
    colverStatus={props.colverStatus} setColverStatus={props.setColverStatus} 
    braxtonDays={props.braxtonDays} setBraxtonDays={props.setBraxtonDays} 
    braxtonStatus={props.braxtonStatus} setBraxtonStatus={props.setBraxtonStatus} 
    booniesDays={props.booniesDays} setBooniesDays={props.setBooniesDays} 
    booniesStatus={props.booniesStatus} setBooniesStatus={props.setBooniesStatus} 
    jeffersonDays={props.jeffersonDays} setJeffersonDays={props.setJeffersonDays} 
    jeffersonStatus={props.jeffersonStatus} setJeffersonStatus={props.setJeffersonStatus} 
    day={props.day} setDay={props.setDay}
    daysTilFullMoon={props.daysTilFullMoon} setDaysTilFullMoon={props.setDaysTilFullMoon}
    lunarPhase={props.lunarPhase} setLunarPhase={props.setLunarPhase}
    wrightPatrollers={props.wrightPatrollers} setWrightPatrollers={props.setWrightPatrollers}
    mainPatrollers={props.mainPatrollers} setMainPatrollers={props.setMainPatrollers}
    colverPatrollers={props.colverPatrollers} setColverPatrollers={props.setColverPatrollers}
    braxtonPatrollers={props.braxtonPatrollers} setBraxtonPatrollers={props.setBraxtonPatrollers}
    booniesPatrollers={props.booniesPatrollers} setBooniesPatrollers={props.setBooniesPatrollers}
    jeffersonPatrollers={props.jeffersonPatrollers} setJeffersonPatrollers={props.setJeffersonPatrollers}
     />
        </div>
    );
}