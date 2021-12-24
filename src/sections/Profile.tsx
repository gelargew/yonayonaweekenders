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
                <a href='https://twitter.com/soshit_buzz' target='_blank' title='@soshit_buzz'>
                    <Box active={curIdx === 0} onPointerEnter={() => setCurIdx(0)} />
                    obara"BEASOL"soshi
                </a>
                <a href='https://twitter.com/kaziya_works' target='_blank' title='@kaziya_works'>
                    <Box active={curIdx === 1} onPointerEnter={() => setCurIdx(1)} />
                    スズキシンゴ
                </a>
                <a href='https://twitter.com/POPxASxFUCK' target='_blank' title='@POPxASxFUCK'>
                    <Box active={curIdx === 2} onPointerEnter={() => setCurIdx(2)} />
                    キイチ
                </a>
                <a href='https://twitter.com/boku_isono' target='_blank' title='@boku_isono'>
                    <Box active={curIdx === 3} onPointerEnter={() => setCurIdx(3)} />
                    磯野くん
                </a>
            </p>
            <ArrowNext />
        </section>
    )
}