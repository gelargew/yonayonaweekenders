import React, { useEffect, useState } from 'react'
import { useSpring, a, config  } from 'react-spring'
import BgText from '../components/BgText'
import { useMove } from '@use-gesture/react'

import { SINGLES_DATA } from '../CONSTANTS/singles'



const Box = ({active=false}) =>   {

    const [isHovered, setIsHovered] = useState(false)
    const {offset} = useSpring({
        offset: isHovered ? 0 : -1500,
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
        className='box-svg'
        onPointerEnter={() => setIsHovered(true)} 
        onPointerLeave={() => setIsHovered(active)}
        width="100%" 
        height="100%" 
        strokeDasharray={1500} 
        strokeDashoffset={offset} 
        fill="none"
        >
            <rect x="2.5" y="2.5" width="90%" height="90%" stroke="white" stroke-width="5"/>
        </a.svg>
    )
}


export default function Singles()  {
    const [detail, setDetail] = useState({} as typeof SINGLES_DATA[0])
    const [{y}, spring] = useSpring(() => ({
        y: 0
    }))

    const bind = useMove(({xy}) => {
        spring.start({ y: xy[1]/2})
        console.log(xy[1])
    })

    return (
        <section id='singles'>
            <div className='bg-text-container'>
                <BgText text='SINGLES' inverse />
                <BgText text='SINGLES' />
                <BgText text='SINGLES' inverse />
            </div>
            <h2>SINGLES</h2>
            {/* @ts-ignore */}
            <ul className='singles-list' {...bind()}>
                {SINGLES_DATA.map((data, idx) => {
                    return (
                        <li key={data.title} onPointerEnter={() => setDetail(SINGLES_DATA[idx])} title='buy'>
                            <Box active={detail.title === data.title} /> 
                            <a href={data.buy}  target='_blank'>{data.title}</a>
                        </li>
                    )
                })}
            </ul>
            {detail.imgURL && <a.img className='singles-img' src={detail.imgURL} style={{ y }}/>}
        </section>
    )
}