import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';
import { motion } from 'framer-motion';

const Hero = () =>(
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} >
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt='disocunt' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2 uppercase`}>
          <span className='text-white'>20%</span> Discount For {" "}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 z-[5] font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          The Next <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Generation</span> {" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most 
        likely to fit your needs. We examine annual percentage rates, annual fees.
      </p>
    </div>

    <div 
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

      <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]' 
      />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>
        
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero

/*
CODE EXPLANATION:

This code defines a React functional component called "Hero" that renders a section element 
with an ID of 'home' and a className of 'flex md:flex-row flex-col styles.paddingY'. It imports 
an image called discount and robot as well as styles object from a directory and imports a component 
called "GetStarted" from another file. It also imports the motion library from "framer-motion"

The component is divided into three main sections:

  1. The first section contains a div with a className of 'flex-1 styles.flexStart flex-col xl:px-0 
    sm:px-16 px-6' which holds a sub-div with a className of 'flex flex-row items-center py-[6px] 
    px-4 bg-discount-gradient rounded-[10px] mb-2' and contains the discount image and a paragraph 
    element with text "20% Discount For 1 Month Account"
  2.The second section contains a div with a className of 'flex flex-row justify-between items-center 
    w-full' which holds a h1 element with text "The Next Generation Payment Method" and a second div 
    that renders the imported GetStarted component.
  3.The third section contains a div with a className of 'flex-1 flex styles.flexCenter md:my-0 my-10 
    relative' which contains the robot image and three overlay divs with gradient backgrounds.

The component also has a section that renders the GetStarted component on smaller screens.

The component is exported as the default export and when rendered, it will display a section with two 
main sections: a text section with a discount banner and a heading, and an image section of a robot 
with gradient overlays. The section also has a "Get Started" button which is rendered on smaller screens 
and on the right side of the text section on larger screens.
*/ 