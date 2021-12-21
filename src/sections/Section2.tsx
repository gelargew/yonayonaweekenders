import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import BgText from '../components/BgText'
import { useResizeObserver } from 'sukuroru'

import Album1 from '../images/album1.webp'
import Album2 from '../images/album2.webp'
import Album3 from '../images/album3.webp'
import Album4 from '../images/album4.webp'

const ALBUM_DATA = [
    {
        title: 'YONA YONA WEEKENDERS',
        imgURL: Album1,
        date: '2021.11.03',
        detail: 'release 1st Full Album'
    },
    {
        title: '唄が歩く時',
        imgURL: Album2,
        date: '2021.01.20',
        detail: 'release 3rd EP'
    },
    {
        title: '街を泳いで',
        imgURL: Album3,
        date: '2020.06.03',
        detail: 'release 2nd EP'
    },
    {
        title: '夜とアルバム',
        imgURL: Album4,
        date: '2019.11.20',
        detail: 'release 1st EP'
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
    const rect = useResizeObserver(ref)

    const handleImgClick = (idx: number) => {
        if (isOpen) return
        setCurIdx(idx)
        setIsOpen(true)
    }

    useLayoutEffect(() => {
        
        if (isOpen) {
            const el = ref.current.children[curIdx] as HTMLElement
            
            const offsetDoc = window.innerHeight - rect.height
            const offset = el.offsetTop/2
            const y = offsetDoc*2 - offset
            console.log(offset, offsetDoc, rect.height)
            ref.current.style.transform = `translateY(${y}px)`         
        }
        else {
            ref.current.style.transform = `translateY(0px)` 
        }
        

    }, [isOpen])

    return (
        <>
        <div ref={ref} className={isOpen ? 'album-list album-open' : 'album-list'}>
            {ALBUM_DATA.map((data, idx) => {
                return <img 
                src={data.imgURL} 
                alt={data.title} 
                className={isOpen && (curIdx === idx) ? 'album-img-active' : 'album-img'} 
                key={idx} 
                title={data.title} 
                onClick={() => handleImgClick(idx)}
                />
            })}
            
        </div>
        {isOpen && <button className='album-back' onClick={() => setIsOpen(false)}>BACK</button>}
        </>
    )
}