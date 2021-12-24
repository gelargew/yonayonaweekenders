import React from 'react'
import Vid from '../videos/yonayona.mp4'
import { a } from 'react-spring'
import { useScrollContext } from 'sukuroru'
import { ArrowNext } from '../components/ArrowNext'
import BgText from '../components/BgText'


export default function Section1() {
    const {offset, scrollTo} = useScrollContext()

    return (
        <section id='section-1'>
            <div className='bg-text-container'>
                <BgText inverse text='WEEKENDERS' />
                <BgText text='YONAYONA'  />
            </div>
            <a.video autoPlay={true} loop={true} muted={true} src={Vid} style={{ x: offset.x.to(x => x/8)}} ></a.video>
            <h1 id='hero-1'>YONA</h1>
            <h1 id='hero-2'>YONA</h1>
            <h1 id='hero-3'>WEEKENDERS</h1>   
            <ArrowNext onClick={() => scrollTo(1)} />
        </section>
    )
}