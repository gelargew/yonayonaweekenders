import React from 'react'
import Vid from '../videos/yonayona.mp4'


export default function Section1() {

    return (
        <section id='section-1'>
            <video autoPlay={true} loop={true} muted={true} style={{height: '100vh', width:'100%', objectFit: 'cover'}} src={Vid}></video>
            <h1 id='hero-1'>YONA</h1>
            <h1 id='hero-2'>YONA</h1>
            <h1 id='hero-3'>WEEKENDERS</h1>   
        </section>
    )
}