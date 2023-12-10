import React from 'react'
import faqData from '../../data'


export default function Main({plusIcon, minusIcon, starIcon, handleToggle, openIndex }) {


  const renderFaqsData = faqData.map((dataEl, index) => {
    const {question, answer, id} = dataEl
    return(
      <div key={id} className='border-b-[1.5px] border-light-pink last:border-b-0'>
        <div onClick={() => handleToggle(index)} className='flex items-center sm:py-4 md:py-8'
        >
          <p className='text-dark-purple sm:text-lg md:text-3xl font-semibold sm:w-[260px]
            md:w-[550px]'
          >{question}</p>
          <div 
            className='sm:ml-auto sm:w-7 sm:h-7 md:h-12 md:w-12 lg:cursor-pointer'>
            <img 
              className='w-full h-full' 
              src={openIndex === index ? minusIcon : plusIcon} 
              alt="plus-minus-icon" 
            />
          </div>
        </div>
        <div className={
            `transition-all overflow-hidden 
              ${openIndex === index ? "sm:h-[170px] md:h-[220px] opacity-[1] " : "sm:h-0 w-full opacity-[0]"}`
            }>
          <div className='sm:pr-[12px] md:pr-[14px]'
          >
            <p className='font-normal transition-all sm:text-base 
             text-grayish-purple md:text-[28px] md:leading-9'>{answer}</p>
          </div>
        </div>
        
      </div>
    )
  })
  
  return (
    <main className='flex justify-center items-center sm:px-4 md:px-8'>
      <section className='h-screen'>
        <section className='sm:mb-10 bg-white rounded-lg sm:p-5 md:p-8 sm:-mt-[9rem] md:-mt-[11rem]'>
          <div className='flex items-center sm:py-4 sm:gap-4'>
            <div>
              <img className='sm:w-6 md:w-10' src={starIcon} alt="star-icon" />
            </div>
            <h1 className='sm:text-[2rem] md:text-5xl text-dark-purple font-bold'>FAQs</h1>
          </div>
          <section className=''>
            {renderFaqsData}
          </section>
        </section>
      </section>
        
    </main>

  )
}
