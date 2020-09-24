import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => {
        const offset=window.scrollY;
        if(offset > 200){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses=['navContainer'];
    if(scrolled){
        navbarClasses.push('scrolled')
    }
    return (
        <div className='nav-box'>
            <div className='navContainer'>
                <div className='navInfo'>
                    <div className='nav-name'>
                        <button><Link className='home-link' to='/'>Michael's Arcade</Link></button>
                    </div>
                    <div className='nav-list'>
                        <button><Link className='conway-link' to='/Conways_Game'>Conway's Game</Link></button>
                        <button> <Link className='conway-link' to='/Conways_Game'>Tetris</Link></button>
                        <button> <Link className='conway-link' to='/Conways_Game'>Snake</Link></button>
                </div>    
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
