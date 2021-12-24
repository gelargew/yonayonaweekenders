import React from 'react'

const ArrowNext = ({className='arrow-next', color='white', ...props}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' {...props}><path width='100%' height='100%' fill={color} d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg>


const ArrowPrev = ({className='arrow-prev', color='white', ...props}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' {...props}><path width='100%' height='100%' fill={color} d="M174.7 200H99.5125L0 100L99.5125 0H174.7L75.1875 100L174.7 200ZM300 0H224.813L125.3 100L224.813 200H300L200.488 100L300 0V0Z"  /></svg>


export {ArrowNext, ArrowPrev}