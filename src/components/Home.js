import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

// Control panel with Logo, buttons for get Random, Browse

export default function Home() {
    return (
        <div className='home-container'>

            <h1>L O G O</h1>

            <Link to='/browse'>
                <div className='button-home'>BROWSE</div>
            </Link>





            
        </div>
    )
}
