import React, { useState } from 'react'
import { useScrollContext } from 'sukuroru'
import { useStore } from '../pages'
import { CancelIcon, NavIcon } from './Svgs'


export default function Nav() {
    const [open, setOpen] = useState(false)
    const {pageIdx,changePage} = useStore()
    const handleClick = n => {
        changePage(n)
    }
    
    return (
        <div id='nav-container'  className={open ? 'nav-open' : ''}>
            <button name='home' title='home' onClick={() => handleClick(0)}>HOME</button>
            <button name='albums' title='albums' onClick={() => handleClick(1)}>ALBUMS</button>
            <button name='singles' title='albums' onClick={() => handleClick(2)}>SINGLES</button>
            <button name='profile' title='profile' onClick={() => handleClick(3)}>PROFILE</button>
            <button name='socials' title='socials' onClick={() => handleClick(4)}>SOCIALS</button>

            <button 
            onClick={() => setOpen(!open)}
            className='nav-toggle'
            >
                {open ? <CancelIcon fill='white' /> : <NavIcon fill='white' />}
            </button>


        </div>
    )
}