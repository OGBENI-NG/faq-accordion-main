import React from 'react'


export default function Header({bgPatternMb, bgPatternDkt}) {
  return (
    <header className='w-full'>
      <img 
        src={bgPatternMb} 
        alt="mobile-pattern-img"
        className='sm:block sm:w-full sm:h-max" lg:hidden'
      />
      <img 
        src={bgPatternDkt} 
        alt="desktop-pattern-img"
        className='sm:hidden lg:block lg:w-full lg:h-full' 
      />
    </header>
  )
}
