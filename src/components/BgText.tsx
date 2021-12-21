import React from 'react'

interface BgProps extends React.ComponentPropsWithoutRef<'div'> {
    text?: string,
    inverse?: boolean
}

export default function BgText({inverse=false,text, ...props}: BgProps) {


    return (
        <div className='bg-text' {...props}>
            <span className={inverse ? 'bg-text1' : 'bg-text1-inverse'}>{text}</span>
            <span className={inverse ? 'bg-text2' : 'bg-text2-inverse'}>{text}</span>
        </div>
    )
}