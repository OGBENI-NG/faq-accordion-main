import React from 'react'
import faqData from '../../data'


export default function Main({plusIcon, minusIcon, starIcon, handleToggle, openIndex }) {

  const renderFaqsData = faqData.map((dataEl, index) => {
    const {question, answer, id} = dataEl
    return(
      <div key={id} className='border-b-[1.5px] border-light-pink last:border-b-0'>
        <div onClick={() => handleToggle(index)} className='flex items-center sm:py-4 md:py-8
          lg:py-4 lg:cursor-pointer'
        >
          <p className='text-dark-purple sm:text-lg md:text-3xl font-semibold sm:w-[260px]
            md:w-[550px] lg:w-full lg:text-base lg:hover:text-hover-color '
          >{question}</p>
          <div 
            className='sm:ml-auto sm:w-8 sm:h-8 md:h-12 md:w-12 
            lg:h-7 lg:w-7 lg:cursor-pointer'>
            <img 
              className='w-full h-full' 
              src={openIndex === index ? minusIcon : plusIcon} 
              alt="plus-minus-icon" 
            />
          </div>
        </div>
        <div className={`overflow-hidden `}>
          <div className={`transition-all  
            ${openIndex === index ? "sm:h-[150px] md:h-[220px] opacity-[1] lg:h-[120px]" : "sm:h-0 w-full opacity-[0]"}`}
          >
            <p className='font-normal w-full transition-all sm:text-base 
             text-grayish-purple md:text-[28px] md:leading-9 lg:text-base
             '>{answer}</p>
          </div>
        </div>
        
      </div>
    )
  })
  
  return (
    <main className='flex justify-center items-center sm:px-5 md:px-9'>
      
      <section className=' bg-white rounded-lg lg:rounded-2xl sm:px-6 sm:pb-4 md:p-10 
        sm:-mt-[6.4rem] md:-mt-[9.2rem] lg:max-w-[550px] xl:max-w-[530px] lg:m-auto 
        lg:-mt-[7.5rem] xl:-mt-[6.7rem] xl:p-6'
      >
        <div className='flex items-center sm:py-4 sm:gap-4 lg:py-2'>
          <div>
            <img className='sm:w-6 md:w-10 lg:w-8' src={starIcon} alt="star-icon" />
          </div>
          <h1 className='sm:text-[2rem] md:text-5xl lg:text-3xl text-dark-purple font-bold'>FAQs</h1>
        </div>
        <section className=''>
          {renderFaqsData}
        </section>
      </section>
    </main>

  )
}
