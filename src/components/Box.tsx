import React, { useEffect, useState } from 'react'
import { useSpring, a } from 'react-spring'


const Box = ({
    active=false,
    className='',
    length=1500,
    ...props
}) =>   {

    const [isHovered, setIsHovered] = useState(false)
    const {offset} = useSpring({
        offset: isHovered ? 0 : -length,
        config: {
            mass: 2,
            friction: 50,
            tension: 100
        }
    })

    useEffect(() => {
        setIsHovered(active)
    }, [active])

    return (
        <a.svg 
        className={`box-svg ${className}`}
        onPointerEnter={() => setIsHovered(true)} 
        onPointerLeave={() => setIsHovered(active)}
        strokeDasharray={length} 
        strokeDashoffset={offset} 
        fill="none"
        {...props}
        >
            <rect x="2.5" y="2.5" width="95%" height="90%" stroke="white" strokeWidth="5"/>
        </a.svg>
    )
}

export {Box}