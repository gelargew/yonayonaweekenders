import React, { useState } from 'react'
import { ArrowNext } from '../components/ArrowNext'
import BgText from '../components/BgText'
import { Box } from '../components/Box'

import profileImage from '../images/profile.webp'


export default function Profile() {
    const [curIdx, setCurIdx] = useState(0)


    return (
        <section id='profile'>
            <div className='bg-text-container'>
                <BgText text='PROFILE' />
                <BgText text='PROFILE' inverse />
                <BgText text='PROFILE' />
            </div>
            <h2>PROFILES</h2>
            <div className='profile-img'>
                <img src={profileImage} alt='profile' />
                <Box active={curIdx === 0} className='box1' onPointerEnter={() => setCurIdx(0)}  />
                <Box active={curIdx === 1} className='box2' onPointerEnter={() => setCurIdx(1)} />
                <Box active={curIdx === 2} className='box3' onPointerEnter={() => setCurIdx(2)} />
                <Box active={curIdx === 3} className='box4' onPointerEnter={() => setCurIdx(3)} />
            </div>
            <p className='members'>
                <a href='https://twitter.com/soshit_buzz' target='_blank'><Box />obara"BEASOL"soshi</a>
                <a href='https://twitter.com/kaziya_works' target='_blank'><Box />スズキシンゴ</a>
                <a href='https://twitter.com/POPxASxFUCK' target='_blank'><Box />キイチ</a>
                <a href='https://twitter.com/boku_isono' target='_blank'><Box />磯野くん</a>
            </p>
            <ArrowNext />
        </section>
    )
}