import { useState, useEffect } from 'react';

export default function EndMenu(props) {

    const [summary1, setSummary1] = useState('');
    const [summary2, setSummary2] = useState('');
    const [summary3, setSummary3] = useState('');
    const [summary4, setSummary4] = useState('');
    const [summary5, setSummary5] = useState('');
    const [summary6, setSummary6] = useState('');

    



    useEffect(() => {
        if (props.wrightPatrollers === 0) {
            setSummary1('Wright Intersection was not patrolled. It has moved one step closer to danger.');
        }
        if (props.mainPatrollers === 0) {
            setSummary2('Main Street was not patrolled. It has moved one step closer to danger.');
        }
        if (props.colverPatrollers === 0) {
            setSummary3('Colver National Forest was not patrolled. It has moved one step closer to danger.');
        }
        if (props.braxtonPatrollers === 0) {
            setSummary4("Braxton's Pond was not patrolled. It has moved one step closer to danger.");
        }
        if (props.jeffersonPatrollers === 0) {
            setSummary5("Jefferson Street was not patrolled. It has moved one step closer to danger.");
        }
        if (props.booniesPatrollers === 0) {
            setSummary6("The Boonies were not patrolled. They have moved one step closer to danger.");
        }
        if (props.wrightPatrollers > 0) {
            setSummary1('Wright Intersection was patrolled. It remains safe for now.');
        }
        if (props.mainPatrollers > 0) {
            setSummary2('Main Street was patrolled. It remains safe for now.');
        }
        if (props.colverPatrollers > 0) {
            setSummary3('Colver National Forest was patrolled. It remains safe for now.');
        }
        if (props.braxtonPatrollers > 0) {
            setSummary4("Braxton's Pond was patrolled. It remains safe for now.");
        }
        if (props.jeffersonPatrollers > 0) {
            setSummary5("Jefferson Street was patrolled. It remains safe for now.");
        }
        if (props.booniesPatrollers > 0) {
            setSummary6("The Boonies were patrolled. They remain safe for now.");
        }
    }
    , [props.wrightPatrollers, props.mainPatrollers, props.colverPatrollers, props.braxtonPatrollers, props.jeffersonPatrollers, props.booniesPatrollers]);

    return (
        <div>

            {/* CYOA */}

            <div>





            </div>





            {/* No CYOA */}
            <div>
            
            <h2>End of day {props.day}</h2>

            <p>{summary1}</p>
            <p>{summary2}</p>
            <p>{summary3}</p>
            <p>{summary4}</p>
            <p>{summary5}</p>
            <p>{summary6}</p>

            </div>

            {/* /No CYOA */}
            
        </div>
    );
    }