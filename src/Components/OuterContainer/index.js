import { useState, useEffect } from 'react';
import Container from '../Container'

export default function OuterContainer() {

    // Control panel

    // Game stats

    const [day, setDay] = useState(1)
    const [daysTilFullMoon, setDaysTilFullMoon] = useState(30)
    const [lunarPhase, setLunarPhase] = useState("Waning Gibbous")
    
    // Crew stats

    const [bobbyMood, setBobbyMood] = useState("calm")
    const [bobbyUsed, setBobbyUsed] = useState(false)
    const [johnnyMood, setJohnnyMood] = useState("calm")
    const [johnnyUsed, setJohnnyUsed] = useState(false)
    const [peteMood, setPeteMood] = useState("calm")
    const [peteUsed, setPeteUsed] = useState(false)
    const [lyleMood, setLyleMood] = useState("calm")
    const [lyleUsed, setLyleUsed] = useState(false)

    // Location stats

    const [wrightBobby, setWrightBobby] = useState(false)
    const [wrightJohnny, setWrightJohnny] = useState(false)
    const [wrightPete, setWrightPete] = useState(false)
    const [wrightLyle, setWrightLyle] = useState(false)
    const [mainBobby, setMainBobby] = useState(false);
    const [mainJohnny, setMainJohnny] = useState(false);
    const [mainPete, setMainPete] = useState(false);
    const [mainLyle, setMainLyle] = useState(false);
    
    const [colverBobby, setColverBobby] = useState(false);
    const [colverJohnny, setColverJohnny] = useState(false);
    const [colverPete, setColverPete] = useState(false);
    const [colverLyle, setColverLyle] = useState(false);
    
    const [braxtonBobby, setBraxtonBobby] = useState(false);
    const [braxtonJohnny, setBraxtonJohnny] = useState(false);
    const [braxtonPete, setBraxtonPete] = useState(false);
    const [braxtonLyle, setBraxtonLyle] = useState(false);
    
    const [booniesBobby, setBooniesBobby] = useState(false);
    const [booniesJohnny, setBooniesJohnny] = useState(false);
    const [booniesPete, setBooniesPete] = useState(false);
    const [booniesLyle, setBooniesLyle] = useState(false);
    
    const [jeffersonBobby, setJeffersonBobby] = useState(false);
    const [jeffersonJohnny, setJeffersonJohnny] = useState(false);
    const [jeffersonPete, setJeffersonPete] = useState(false);
    const [jeffersonLyle, setJeffersonLyle] = useState(false);

    const [wrightDays, setWrightDays] = useState(0)
    const [wrightStatus, setWrightStatus] = useState("calm")
    const [mainDays, setMainDays] = useState(0)
    const [mainStatus, setMainStatus] = useState("calm")
    const [colverDays, setColverDays] = useState(0)
    const [colverStatus, setColverStatus] = useState("calm")
    const [braxtonDays, setBraxtonDays] = useState(0)
    const [braxtonStatus, setBraxtonStatus] = useState("calm")
    const [booniesDays, setBooniesDays] = useState(0)
    const [booniesStatus, setBooniesStatus] = useState("calm")
    const [jeffersonDays, setJeffersonDays] = useState(0)
    const [jeffersonStatus, setJeffersonStatus] = useState("calm")

    // Handling locations
    
    useEffect(() => {
        
        if (wrightDays < 3) {
            setWrightStatus("safe")
        }
        if (wrightDays > 3 && wrightDays < 7) {
            setWrightStatus("dangerous")
        }
        if (wrightDays > 6) {
            setWrightStatus("lost")
        }
        if (mainDays < 3) {
            setMainStatus("safe")
        }
        if (mainDays > 3 && mainDays < 7) {
            setMainStatus("dangerous")
        }
        if (mainDays > 6) {
            setMainStatus("lost")
        }
        if (colverDays < 3) {
            setColverStatus("safe")
        }
        if (colverDays > 3 && colverDays < 7) {
            setColverStatus("dangerous")
        }
        if (colverDays > 6) {
            setColverStatus("lost")
        }
        if (braxtonDays < 3) {
            setBraxtonStatus("safe")
        }
        if (braxtonDays > 3 && braxtonDays < 7) {
            setBraxtonStatus("dangerous")
        }
        if (braxtonDays > 6) {
            setBraxtonStatus("lost")
        }
        if (booniesDays < 3) {
            setBooniesStatus("safe")
        }
        if (booniesDays > 3 && booniesDays < 7) {
            setBooniesStatus("dangerous")
        }
        if (booniesDays > 6) {
            setBooniesStatus("lost")
        }
        if (jeffersonDays < 3) {
            setJeffersonStatus("safe")
        }
        if (jeffersonDays > 3 && jeffersonDays < 7) {
            setJeffersonStatus("dangerous")
        }
        if (jeffersonDays > 6) {
            setJeffersonStatus("lost")
        }


      }, [wrightDays, mainDays, colverDays, braxtonDays, booniesDays, jeffersonDays]);

    // Moon controls 

    useEffect(() => {
        if (daysTilFullMoon > 26) {
            setLunarPhase("Waning Gibbous")
        }
        if (daysTilFullMoon < 26 && daysTilFullMoon > 22) {
            setLunarPhase("Third Quarter")
        }
        if (daysTilFullMoon < 22 && daysTilFullMoon > 18) {
            setLunarPhase("Waning Crescent")
        }
        if (daysTilFullMoon < 18 && daysTilFullMoon > 14) {
            setLunarPhase("New Moon")
        }
        if (daysTilFullMoon < 14 && daysTilFullMoon > 10) {
            setLunarPhase("Waxing Crescent")
        }
        if (daysTilFullMoon < 10 && daysTilFullMoon > 5) {
            setLunarPhase("First Quarter")
        }
        if (daysTilFullMoon < 5 && daysTilFullMoon > 0) {
            setLunarPhase("Waxing Gibbous")
        }
        if (daysTilFullMoon === 0) { 
            setLunarPhase("Full Moon")
        }
      }
    , [daysTilFullMoon]);

    // Assignments

    const [bobbyAssignment, setBobbyAssignment] = useState("idle")
    const [johnnyAssignment, setJohnnyAssignment] = useState("idle")
    const [peteAssignment, setPeteAssignment] = useState("idle")
    const [lyleAssignment, setLyleAssignment] = useState("idle")
      
    // Number management - don't forget to reset

    const [wrightPatrollers, setWrightPatrollers] = useState(0)
    const [mainPatrollers, setMainPatrollers] = useState(0)
    const [colverPatrollers, setColverPatrollers] = useState(0)
    const [braxtonPatrollers, setBraxtonPatrollers] = useState(0)
    const [booniesPatrollers, setBooniesPatrollers] = useState(0)
    const [jeffersonPatrollers, setJeffersonPatrollers] = useState(0)

    return (


<Container 
    bobbyAssignment={bobbyAssignment} setBobbyAssignment={setBobbyAssignment}
    johnnyAssignment={johnnyAssignment} setJohnnyAssignment={setJohnnyAssignment}
    peteAssignment={peteAssignment} setPeteAssignment={setPeteAssignment}
    lyleAssignment={lyleAssignment} setLyleAssignment={setLyleAssignment}
    bobbyMood={bobbyMood} setBobbyMood={setBobbyMood} 
    bobbyUsed={bobbyUsed} setBobbyUsed={setBobbyUsed} 
    johnnyMood={johnnyMood} setJohnnyMood={setJohnnyMood} 
    johnnyUsed={johnnyUsed} setJohnnyUsed={setJohnnyUsed} 
    peteMood={peteMood} setPeteMood={setPeteMood} 
    peteUsed={peteUsed} setPeteUsed={setPeteUsed} 
    lyleMood={lyleMood} setLyleMood={setLyleMood} 
    lyleUsed={lyleUsed} setLyleUsed={setLyleUsed} 
    wrightBobby={wrightBobby} setWrightBobby={setWrightBobby} 
    wrightJohnny={wrightJohnny} setWrightJohnny={setWrightJohnny} 
    wrightPete={wrightPete} setWrightPete={setWrightPete} 
    wrightLyle={wrightLyle} setWrightLyle={setWrightLyle} 
    mainBobby={mainBobby} setMainBobby={setMainBobby} 
    mainJohnny={mainJohnny} setMainJohnny={setMainJohnny} 
    mainPete={mainPete} setMainPete={setMainPete} 
    mainLyle={mainLyle} setMainLyle={setMainLyle} 
    colverBobby={colverBobby} setColverBobby={setColverBobby} 
    colverJohnny={colverJohnny} setColverJohnny={setColverJohnny} 
    colverPete={colverPete} setColverPete={setColverPete} 
    colverLyle={colverLyle} setColverLyle={setColverLyle} 
    braxtonBobby={braxtonBobby} setBraxtonBobby={setBraxtonBobby} 
    braxtonJohnny={braxtonJohnny} setBraxtonJohnny={setBraxtonJohnny} 
    braxtonPete={braxtonPete} setBraxtonPete={setBraxtonPete} 
    braxtonLyle={braxtonLyle} setBraxtonLyle={setBraxtonLyle} 
    booniesBobby={booniesBobby} setBooniesBobby={setBooniesBobby} 
    booniesJohnny={booniesJohnny} setBooniesJohnny={setBooniesJohnny} 
    booniesPete={booniesPete} setBooniesPete={setBooniesPete} 
    booniesLyle={booniesLyle} setBooniesLyle={setBooniesLyle} 
    jeffersonBobby={jeffersonBobby} setJeffersonBobby={setJeffersonBobby} 
    jeffersonJohnny={jeffersonJohnny} setJeffersonJohnny={setJeffersonJohnny} 
    jeffersonPete={jeffersonPete} setJeffersonPete={setJeffersonPete} 
    jeffersonLyle={jeffersonLyle} setJeffersonLyle={setJeffersonLyle} 
    wrightDays={wrightDays} setWrightDays={setWrightDays} 
    wrightStatus={wrightStatus} setWrightStatus={setWrightStatus} 
    mainDays={mainDays} setMainDays={setMainDays} 
    mainStatus={mainStatus} setMainStatus={setMainStatus} 
    colverDays={colverDays} setColverDays={setColverDays} 
    colverStatus={colverStatus} setColverStatus={setColverStatus} 
    braxtonDays={braxtonDays} setBraxtonDays={setBraxtonDays} 
    braxtonStatus={braxtonStatus} setBraxtonStatus={setBraxtonStatus} 
    booniesDays={booniesDays} setBooniesDays={setBooniesDays} 
    booniesStatus={booniesStatus} setBooniesStatus={setBooniesStatus} 
    jeffersonDays={jeffersonDays} setJeffersonDays={setJeffersonDays} 
    jeffersonStatus={jeffersonStatus} setJeffersonStatus={setJeffersonStatus} 
    day={day} setDay={setDay}
    daysTilFullMoon={daysTilFullMoon} setDaysTilFullMoon={setDaysTilFullMoon}
    lunarPhase={lunarPhase} setLunarPhase={setLunarPhase}
    wrightPatrollers={wrightPatrollers} setWrightPatrollers={setWrightPatrollers}
    mainPatrollers={mainPatrollers} setMainPatrollers={setMainPatrollers}
    colverPatrollers={colverPatrollers} setColverPatrollers={setColverPatrollers}
    braxtonPatrollers={braxtonPatrollers} setBraxtonPatrollers={setBraxtonPatrollers}
    booniesPatrollers={booniesPatrollers} setBooniesPatrollers={setBooniesPatrollers}
    jeffersonPatrollers={jeffersonPatrollers} setJeffersonPatrollers={setJeffersonPatrollers}
    
/>
    )
}