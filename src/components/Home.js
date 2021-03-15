import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

// Control panel with Logo, buttons for get Random, Browse

export default function Home( { randomizeOffset}) {
    return (
        <div className='home-container'>

            <div className='home-logo'>trnkt</div>
            <p className='home-description'>a toy that displays Non-Fungible Tokens from the Opensea.io API</p>

            <Link to='/browse'>
                <div onClick={randomizeOffset} className='button-home'>RANDOMIZE</div>
            </Link>

        </div>
    )
}
