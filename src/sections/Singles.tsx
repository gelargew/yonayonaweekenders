import React, { useEffect, useState } from 'react'
import { useSpring, a, config  } from 'react-spring'
import BgText from '../components/BgText'
import { useMove } from '@use-gesture/react'
import { Box } from '../components/Box'
import { SINGLES_DATA } from '../CONSTANTS/singles'
import { ArrowNext } from '../components/ArrowNext'
import { useScrollContext } from 'sukuroru'





export default function Singles()  {
    const [detail, setDetail] = useState({} as typeof SINGLES_DATA[0])
    const {scrollTo} = useScrollContext()
    const [{y}, spring] = useSpring(() => ({
        y: 0
    }))

    const bind = useMove(({xy}) => {
        spring.start({ y: xy[1]/2})
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
            <ArrowNext onClick={() =>scrollTo(3)} color='black' />
            <ArrowNext className='arrow-prev' onClick={() => scrollTo(1)} color='black'/>
        </section>
    )
}