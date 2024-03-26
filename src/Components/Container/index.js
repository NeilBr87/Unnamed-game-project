import React from 'react';
import Header from '../Header';
import Map from './Map.JPG';
export default function Container() {

    return (
        <div>
            <Header />
            <img src={Map} alt="Map of Havenwood" style={{width: '80vw', borderRadius: '5px', border: '3px inset #764134'}} />
        </div>
    );
}