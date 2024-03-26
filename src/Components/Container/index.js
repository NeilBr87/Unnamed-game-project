import React from 'react';
import Header from '../Header';
import Map from './Map.JPG';
import Crew from '../Crew'
import './style.css'
export default function Container() {

    return (
        <div id="container">
            <Header />
            <img src={Map} alt="Map of Havenwood" style={{width: '86vw', marginTop: '2vh', borderRadius: '5px', border: '4px inset #B49A67'}} />

            <Crew />

        </div>
    );
}