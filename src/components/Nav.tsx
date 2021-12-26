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
            <button onClick={() => handleClick(0)}>HOME</button>
            <button onClick={() => handleClick(1)}>ALBUMS</button>
            <button onClick={() => handleClick(2)}>SINGLES</button>
            <button onClick={() => handleClick(3)}>PROFILE</button>
            <button onClick={() => handleClick(4)}>SOCIALS</button>

            <button 
            onClick={() => setOpen(!open)}
            className='nav-toggle'
            >
                {open ? <CancelIcon fill='white' /> : <NavIcon fill='white' />}
            </button>


        </div>
    )
}