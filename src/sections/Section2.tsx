import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import BgText from '../components/BgText'
import { useResizeObserver, useScrollContext } from 'sukuroru'

import Album1 from '../images/album1.webp'
import Album2 from '../images/album2.webp'
import Album3 from '../images/album3.webp'
import Album4 from '../images/album4.webp'
import { Box } from '../components/Box'

const ALBUM_DATA = [
    {
        title: 'YONA YONA WEEKENDERS',
        imgURL: Album1,
        date: '2021.11.03',
        detail: 'release 1st Full Album',
        tracklist: ['思い出in the sky', '終電で帰ります', 'Open your eyes', 'リルバズ', 'Good bye', '泡沫の夢', 'いい夢', 'Night Rider feat.荒井岳史', 'Tick Tack', '光の中'],
        buy: 'https://www.jvcmusic.co.jp/-/Linkall/VICL-65586.html'

    },
    {
        title: '唄が歩く時',
        imgURL: Album2,
        date: '2021.01.20',
        detail: 'release 3rd EP',
        tracklist: ['君とdrive（Honda cars TV CMタイアップソング)', 'Lonely Times', 'R.M.T.T', 'In my room', '唄が歩く時'],
        buy: 'https://tower.jp/item/5129609/'
    },
    {
        title: '街を泳いで',
        imgURL: Album3,
        date: '2020.06.03',
        detail: 'release 2nd EP',
        tracklist: ['遊泳', 'So Much Fun', '君はcrazy', '東京ミッドナイトクルージングクラブ', 'SUNRISE'],
        buy: 'https://tower.jp/item/5047615/%E8%A1%97%E3%82%92%E6%B3%B3%E3%81%84%E3%81%A7'
    },
    {
        title: '夜とアルバム',
        imgURL: Album4,
        date: '2019.11.20',
        detail: 'release 1st EP',
        tracklist: ['アルプスへGO!', 'Never Sleep', '夜のgroovin', '誰もいないsea', 'BUREIKO', '明るい未来'],
        buy: 'https://tower.jp/item/4964886'
    }
]

export default function Section2() {


    return (
        <section id='section-2'>
            <div className='bg-text-container'>
                <BgText inverse text='ALBUMS' />
                <BgText text='ALBUMS'  />
                <BgText inverse text='ALBUMS' />
            </div>
            <AlbumList />
        </section>
    )
}


const AlbumList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [curIdx, setCurIdx] = useState(0)
    const ref = useRef<HTMLDivElement>(null!)
    const {scrollTo} = useScrollContext()
    const [curTitle, setCurTitle] = useState('')
    const detail = useMemo(() => ALBUM_DATA[curIdx], [curIdx])

    const handleImgClick = (idx: number) => {
        if (isOpen) return
        setCurIdx(idx)
        setIsOpen(true)
        scrollTo(1)
    }

    useLayoutEffect(() => {
        
        if (isOpen) {
            const el = ref.current.children[curIdx] as HTMLElement
            const offsetDoc = ref.current.offsetHeight - window.innerHeight
            const y = -el.offsetTop/2 + offsetDoc/2
            console.log(ref.current.clientHeight)
            ref.current.style.transform = `translateY(${y}px)`         
        }
        else {
            ref.current.style.transform = `translateY(0px)` 
        }
        

    }, [isOpen])

    const AlbumDetail = () => (
            <div className='album-detail'>
                <h3>{detail.title}</h3>
                <p>{detail.date}</p>
                <p>{detail.detail}</p>
                <ul>
                    {detail.tracklist.map(track => <li key='track'>{track}</li>)}
                </ul>
                <a href={detail.buy} target='_blank' title='buy'><Box length={300} />&gt; BUY</a>
            </div>
        )
    

    return (
        <div className={isOpen ? 'album-list-container-open' : 'album-list-container'}>
            {!isOpen && <h2>ALBUMS</h2>}
            <div ref={ref} className={isOpen ? 'album-list album-open' : 'album-list'}>
                {ALBUM_DATA.map((data, idx) => {
                    return <img 
                    src={data.imgURL} 
                    alt={data.title} 
                    className={isOpen && (curIdx === idx) ? 'album-img-active' : 'album-img'} 
                    key={idx} 
                    title={data.title} 
                    onClick={() => handleImgClick(idx)}
                    onPointerEnter={() => setCurTitle(ALBUM_DATA[idx].title)}
                    onPointerLeave={() => setCurTitle('')}
                    />
                })}               
            </div>
            {isOpen ? <AlbumDetail /> : <h3 className='album-hovered-title'>{curTitle}</h3>}
            {isOpen && <button className='album-back' onClick={() => setIsOpen(false)}>BACK</button>}
        </div>
    )
}