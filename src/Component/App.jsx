import React, {useState, useCallback} from 'react'
import Header from './Header'
import Main from './Main'
import bgPatternMb from "../assets/images/background-pattern-mobile.svg"
import bgPatternDkt from "../assets/images/background-pattern-desktop.svg"
import starIcon from "../assets/images/icon-star.svg"
import plusIcon from "../assets/images/icon-plus.svg"
import minusIcon from "../assets/images/icon-minus.svg"

export default function App() {

  const [openIndex, setOpenIndex] = useState(0)
 

  const handleToggle = useCallback((index) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  }, []);

  
  return (
    <section className='bg-light-pink font-Work-Sans sm:pb-16'>
      <Header 
        bgPatternDkt={bgPatternDkt}
        bgPatternMb={bgPatternMb}
      />
      <Main
        minusIcon={minusIcon}
        plusIcon={plusIcon}
        starIcon={starIcon}
        openIndex={openIndex}
        handleToggle={handleToggle}
      />
    </section>
  )
}
