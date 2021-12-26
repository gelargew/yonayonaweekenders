import React from 'react'

const ArrowNext = ({className='arrow-next', color='white', ...props}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' {...props}><path width='100%' height='100%' fill={color} d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg>


const ArrowPrev = ({className='arrow-prev', color='white', ...props}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' {...props}><path width='100%' height='100%' fill={color} d="M174.7 200H99.5125L0 100L99.5125 0H174.7L75.1875 100L174.7 200ZM300 0H224.813L125.3 100L224.813 200H300L200.488 100L300 0V0Z"  /></svg>

const CancelIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>

const NavIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>

export {ArrowNext, ArrowPrev, CancelIcon, NavIcon}