import React, { useState } from 'react'


export default function Nav() {
    const [open, setOpen] = useState(false)

    return (
        <div id='nav-container'  className={open ? 'nav-open' : ''}>
            <button>HOME</button>
            <button>ALBUMS</button>
            <button>SINGLES</button>
            <button>PROFILE</button>
            <button>SOCIALS</button>
            
            <button 
            onClick={() => setOpen(!open)}
            className='nav-toggle'
            >NAV</button>


        </div>
    )
}