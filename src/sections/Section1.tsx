import React, { useEffect, useMemo, useRef } from 'react'
import Vid from '../videos/yonayona.mp4'
import { a, useTrail, config } from 'react-spring'
import { useScrollContext } from 'sukuroru'
import { ArrowNext } from '../components/Svgs'
import BgText from '../components/BgText'
import useOnScreen from '../utils/useOnScreen'
import { useStore } from '../pages'

const HERO_TEXT = ['YONA', 'YONA', 'WEEKENDERS']

export default function Section1() {
    const {offset, scrollTo, wrapper, content} = useScrollContext()
    const textHeight = useMemo(() => wrapper.width*0.14, [wrapper])
    const {changeMedia, isMobile} = useStore()
    const ref = useRef<HTMLDivElement>()
    const onScreen = useOnScreen(ref, '-20%')
    const trail = useTrail(3, {
        opacity: onScreen ? 1 : 0,
        x: onScreen ? 0 : 20,
        height: onScreen ? textHeight : 0,
        from: { opacity: 0, x: 20, height: 0},
        config: config.molasses,
        delay: 1000
    })
    const {pageIdx, changePage} = useStore()
    useEffect(() => {
        if (typeof pageIdx != 'number') return
        if (pageIdx === 4) {      
            scrollTo(`${content.width - wrapper.width}px`)
        }
        else scrollTo(pageIdx)
        changePage(false)
    }, [pageIdx])

    useEffect(() => {
        if (wrapper.width < 900) changeMedia(true)
        else changeMedia(false)
    }, [wrapper.width])
    

    return (
        <section ref={ref} id='section-1'>
            <div className='bg-text-container'>
                <BgText inverse text='WEEKENDERS' />
                <BgText text='YONAYONA'  />
            </div>
            <a.video autoPlay={true} loop={true} muted={true} src={Vid} style={{ x: offset.x.to(x => x/8)}} ></a.video>
            {trail.map(({height, ...style}, idx) => {
                return (
                    <a.div className='hero-text' id={`hero-${idx+1}`} key={idx} style={style}>
                        <a.h1 style={{height}}>{HERO_TEXT[idx]}</a.h1>
                    </a.div>      
                )}
            )}
            {!isMobile && <ArrowNext onClick={() => scrollTo(1)} />}
        </section>
    )
}