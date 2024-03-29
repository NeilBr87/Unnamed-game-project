import React from 'react';
import Header from '../Header';
import Map from './Map.JPG';
import Crew from '../Crew'
import Activities from '../Activities';
import './style.css'
export default function Container() {

    return (
        <div id="container">
            <Header />
            <img id="image" src={Map} alt="Map of Havenwood" style={{width: '90vw', marginTop: '2vh', borderRadius: '5px', border: '3px inset #B49A67'}} />

            <Crew />

            <Activities />

        </div>
    );
}