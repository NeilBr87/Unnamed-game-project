import React from 'react';
import Header from '../Header';
import Map from './Map.JPG';
import Crew from '../Crew'
import Activities from '../Activities';
import EndTurn from '../EndTurn';
import './style.css'
export default function Container(props) {

    return (
        <div id="container">
            <Header />
            <img id="image" src={Map} alt="Map of Havenwood" style={{width: '90vw', marginTop: '2vh', borderRadius: '5px', border: '3px inset #B49A67'}} />

            <Crew bobbyMood={props.bobbyMood} setBobbyMood={props.setBobbyMood} bobbyUsed={props.bobbyUsed} setBobbyUsed={props.setBobbyUsed} johnnyMood={props.johnnyMood} setJohnnyMood={props.setJohnnyMood} johnnyUsed={props.johnnyUsed} setJohnnyUsed={props.setJohnnyUsed} peteMood={props.peteMood} setPeteMood={props.setPeteMood} peteUsed={props.peteUsed} setPeteUsed={props.setPeteUsed} lyleMood={props.lyleMood} setLyleMood={props.setLyleMood} lyleUsed={props.lyleUsed} setLyleUsed={props.setLyleUsed} wrightBobby={props.wrightBobby} setWrightBobby={props.setWrightBobby} wrightJohnny={props.wrightJohnny} setWrightJohnny={props.setWrightJohnny} wrightPete={props.wrightPete} setWrightPete={props.setWrightPete} wrightLyle={props.wrightLyle} setWrightLyle={props.setWrightLyle} mainBobby={props.mainBobby} setMainBobby={props.setMainBobby} mainJohnny={props.mainJohnny} setMainJohnny={props.setMainJohnny} mainPete={props.mainPete} setMainPete={props.setMainPete} mainLyle={props.mainLyle} setMainLyle={props.setMainLyle} colverBobby={props.colverBobby} setColverBobby={props.setColverBobby} colverJohnny={props.colverJohnny} setColverJohnny={props.setColverJohnny} colverPete={props.colverPete} setColverPete={props.setColverPete} colverLyle={props.colverLyle} setColverLyle={props.setColverLyle} braxtonBobby={props.braxtonBobby} setBraxtonBobby={props.setBraxtonBobby} braxtonJohnny={props.braxtonJohnny} setBraxtonJohnny={props.setBraxtonJohnny} braxtonPete={props.braxtonPete} setBraxtonPete={props.setBraxtonPete} braxtonLyle={props.braxtonLyle} setBraxtonLyle={props.setBraxtonLyle} booniesBobby={props.booniesBobby} setBooniesBobby={props.setBooniesBobby} booniesJohnny={props.booniesJohnny} setBooniesJohnny={props.setBooniesJohnny} booniesPete={props.booniesPete} setBooniesPete={props.setBooniesPete} booniesLyle={props.booniesLyle} setBooniesLyle={props.setBooniesLyle} jeffersonBobby={props.jeffersonBobby} setJeffersonBobby={props.setJeffersonBobby} jeffersonJohnny={props.jeffersonJohnny} setJeffersonJohnny={props.setJeffersonJohnny} jeffersonPete={props.jeffersonPete} setJeffersonPete={props.setJeffersonPete} jeffersonLyle={props.jeffersonLyle} setJeffersonLyle={props.setJeffersonLyle} />

            <Activities 
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
/>

            <EndTurn 
                day={props.day} setDay={props.setDay}
                daysTilFullMoon={props.daysTilFullMoon} setDaysTilFullMoon={props.setDaysTilFullMoon}
                />

            <br></br>
        </div>
    );
}