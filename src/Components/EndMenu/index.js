import { useState, useEffect } from 'react';

export default function EndMenu(props) {

    const [summary1, setSummary1] = useState('');
    const [summary2, setSummary2] = useState('');
    const [summary3, setSummary3] = useState('');
    const [summary4, setSummary4] = useState('');
    const [summary5, setSummary5] = useState('');
    const [summary6, setSummary6] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);

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