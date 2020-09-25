import React, {useState} from 'react'
import './Header.css'
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.div
        whileHover={{ boxShadow: '23px 23px 46px #070423, -23px -23px 46px #ca6fb7' }}
        className='header'>
            <div className='header-box'>
                <motion.div animate={{  y:100, y:-40 }}
                transition={{ ease: "easeOut", duration: 2, times:[0,1] }}
                 className='header-title'>
                    <h1>Retro Gamming</h1>
                </motion.div>
                <motion.div
                animate={{  x:100, x:90 }}
                transition={{ ease: "easeOut", duration: 2, times:[0,1] }}
                
                 className='header-game-1'>
                    <h2>Conway's Game</h2>
                </motion.div>
                <motion.div
                animate={{  x:-100, x:-90 }}
                transition={{ ease: "easeOut", duration: 2, times:[0,1] }}
                 className='header-game-2'>
                    <h2>Snake</h2>
                </motion.div>
                <motion.div
                animate={{  y:100, y:40 }}
                transition={{ ease: "easeOut", duration: 2, times:[0,1] }}
                 className='header-game-3'>
                    <h2>More Coming Soon!!!</h2>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Header
