import React from 'react'

import TwitterLogo from '../images/twitter.svg'
import InstaLogo from '../images/instagram.svg'
import YtLogo from '../images/youtube.svg'
import Gew from '../images/gew.svg'
import BgText from '../components/BgText'


export default function Socials() {

    return (
        <section id='socials'>
            <div className='bg-text-container'>
                <BgText text='SOCIALS' inverse />
            </div>
            <h2>SOCIALS</h2>
            <section className='socials-link'>
                <a title='instagram' href='https://twitter.com/yyw_from_tyo' target='_blank' rel="noreferrer">
                    <img alt='Twitter' src={TwitterLogo} />
                    Twitter
                </a>
                <a title='instagram' href='https://www.instagram.com/yonayonaweekenders/' target='_blank' rel="noreferrer">
                    <img alt='Instagram' src={InstaLogo} />
                    Instagram
                </a>
                <a title='youtube' href='https://www.youtube.com/c/yonayonaweekenders_official' target='_blank' rel="noreferrer">
                    <img alt='Youtube' src={YtLogo} />
                    Youtube
                </a>
            </section>
            <section className='gaulard'>
                <a title='Gaulard' href='https://gelar.vercel.app/' target='_blank' rel="noreferrer">
                    <p>Website by: </p>
                    <img alt='gaulard' src={Gew} />
                </a>
            </section>
            <p className='foot'>YONA YONA WEEKENDERS / para de casa @2021</p>
        </section>
    )
}