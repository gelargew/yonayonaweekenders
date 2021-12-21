import React from 'react'
import { useSpring, useTrail } from 'react-spring'


interface LTProps extends React.ComponentPropsWithoutRef<'div'> {
    reversed?: boolean
}

const CONFIG = {
    mass: 19,
    tension: 300,
    friction: 100,
    precision: 0.001,
    clamp: true
}

/* export default function LoopingText({reversed=false, children, ...props}: LTProps) {
    const childrens = React.Children.toArray(children)
    const spring1 = useSpring({
        from: {
            y: -100
        },
        to: {
            y: 
        }
    })

    return (
        <div className={`looping-text`}>
            {trail.map(({}))}
        </div>
    )
} */