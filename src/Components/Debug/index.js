import { useState } from 'react';

export default function Debug(props) {

    const [debug, setDebug] = useState(false);

    function toggleDebug() {
        setDebug(!debug);
    }

    return (
        <div>
            <button onClick={toggleDebug}>Debug menu</button>

            {debug && <div style={{backgroundColor: 'white'}}>

                <h4>Debug sheet</h4>
                <h5>Game stats</h5>
                <p>Day: {props.day}</p>
                <p>Days til full moon: {props.daysTilFullMoon}</p>
                <p>Lunar phase: {props.lunarPhase}</p>
                <h5>Player stats</h5>
                <p>Bobby mood: {props.bobbyMood}</p>
                {props.bobbyUsed === true && <p>Bobby used: True</p>}
                {props.bobbyUsed === false && <p>Bobby used: False</p>}
                <p>Johnny mood: {props.johnnyMood}</p>
                {props.johnnyUsed === true && <p>Johnny used: True</p>}
                {props.johnnyUsed === false && <p>Johnny used: False</p>}
                <p>Pete mood: {props.peteMood}</p>
                {props.peteUsed === true && <p>Pete used: True</p>}
                {props.peteUsed === false && <p>Pete used: False</p>}
                <p>Lyle mood: {props.lyleMood}</p>
                {props.lyleUsed === true && <p>Lyle used: True</p>}
                {props.lyleUsed === false && <p>Lyle used: False</p>}
                <h5>Location stats</h5>
                {props.wrightBobby === true && <p>Wright Intersection Bobby: True</p>}
                {props.wrightBobby === false && <p>Wright Intersection Bobby: False</p>}
                {props.wrightJohnny === true && <p>Wright Intersection Johnny: True</p>}
                {props.wrightJohnny === false && <p>Wright Intersection Johnny: False</p>}
                {props.wrightPete === true && <p>Wright Intersection Pete: True</p>}
                {props.wrightPete === false && <p>Wright Intersection Pete: False</p>}
                {props.wrightLyle === true && <p>Wright Intersection Lyle: True</p>}
                {props.wrightLyle === false && <p>Wright Intersection Lyle: False</p>}
                {props.mainBobby === true && <p>Main Street Bobby: True</p>}
                {props.mainBobby === false && <p>Main Street Bobby: False</p>}
                {props.mainJohnny === true && <p>Main Street Johnny: True</p>}
                {props.mainJohnny === false && <p>Main Street Johnny: False</p>}
                {props.mainPete === true && <p>Main Street Pete: True</p>}
                {props.mainPete === false && <p>Main Street Pete: False</p>}
                {props.mainLyle === true && <p>Main Street Lyle: True</p>}
                {props.mainLyle === false && <p>Main Street Lyle: False</p>}
                {props.colverBobby === true && <p>Colver National Forest Bobby: True</p>}
                {props.colverBobby === false && <p>Colver National Forest Bobby: False</p>}
                {props.colverJohnny === true && <p>Colver National Forest Johnny: True</p>}
                {props.colverJohnny === false && <p>Colver National Forest Johnny: False</p>}
                {props.colverPete === true && <p>Colver National Forest Pete: True</p>}
                {props.colverPete === false && <p>Colver National Forest Pete: False</p>}
                {props.colverLyle === true && <p>Colver National Forest Lyle: True</p>}
                {props.colverLyle === false && <p>Colver National Forest Lyle: False</p>}
                {props.braxtonBobby === true && <p>Braxton's Pond Bobby: True</p>}
                {props.braxtonBobby === false && <p>Braxton's Pond Bobby: False</p>}
                {props.braxtonJohnny === true && <p>Braxton's Pond Johnny: True</p>}
                {props.braxtonJohnny === false && <p>Braxton's Pond Johnny: False</p>}
                {props.braxtonPete === true && <p>Braxton's Pond Pete: True</p>}
                {props.braxtonPete === false && <p>Braxton's Pond Pete: False</p>}
                {props.braxtonLyle === true && <p>Braxton's Pond Lyle: True</p>}
                {props.braxtonLyle === false && <p>Braxton's Pond Lyle: False</p>}
                {props.jeffersonBobby === true && <p>Jefferson Street Bobby: True</p>}
                {props.jeffersonBobby === false && <p>Jefferson Street Bobby: False</p>}
                {props.jeffersonJohnny === true && <p>Jefferson Street Johnny: True</p>}
                {props.jeffersonJohnny === false && <p>Jefferson Street Johnny: False</p>}
                {props.jeffersonPete === true && <p>Jefferson Street Pete: True</p>}
                {props.jeffersonPete === false && <p>Jefferson Street Pete: False</p>}
                {props.jeffersonLyle === true && <p>Jefferson Street Lyle: True</p>}
                {props.jeffersonLyle === false && <p>Jefferson Street Lyle: False</p>}
                {props.booniesBobby === true && <p>The Boonies Bobby: True</p>}
                {props.booniesBobby === false && <p>The Boonies Bobby: False</p>}
                {props.booniesJohnny === true && <p>The Boonies Johnny: True</p>}
                {props.booniesJohnny === false && <p>The Boonies Johnny: False</p>}
                <p>{props.wrightPatrollers}</p>
                <p>{props.mainPatrollers}</p>
                <p>{props.colverPatrollers}</p>
                <p>{props.braxtonPatrollers}</p>
                <p>{props.jeffersonPatrollers}</p>
                <p>{props.booniesPatrollers}</p>
            </div>}

            <p></p>
        </div>
    )
}