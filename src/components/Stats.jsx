import React from 'react'
import { stats } from '../constants';
import styles from '../style'; 

const Stats = () => 
    (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex sm:justify-center xs:justify-center justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] 
          xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] 
          xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3' >{stat.title}</p>
        </div>
      ))}
    </section>
   )

export default Stats

/*
CODE EXPLANATION:

This code defines a React functional component called "Stats" that renders a section element with a className of 'styles.flexCenter 
flex-row flex-wrap sm:mb-20 mb-6'. It imports an array called stats from a constants file and a styles object from a separate file.

The component maps over the stats array and renders a div element for each item in the array. Each div has a className of 'flex-1 
flex sm:justify-center xs:justify-center justify-start items-center flex-row m-3'. Inside each div, there are two elements:

 1.An h4 element with a className of 'font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white' 
  and displays the value property of the current stat object.
 2.A p element with a className of 'font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient 
  uppercase ml-3' and displays the title property of the current stat object.

The component is exported as the default export, and when rendered, it will display a section with several divs, each of them containing 
a value and a title, coming from the stats array.
*/ 