import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-box'>
                <div className='header-title'>
                    <h1>Retro Gamming</h1>
                </div>
                <div className='header-game-1'>
                    <h2>Conway's Game</h2>
                </div>
                <div className='header-game-2'>
                    <h2>Snake</h2>
                </div>
                <div className='header-game-3'>
                    <h2>More Coming Soon!!!</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
