import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => 
   (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden' /> saying about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`} >
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center sm:justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )

export default Testimonials

/*
CODE EXPLANATION:

This code defines a React functional component called "Testimonials" that renders a section element with a className of 'styles.paddingY 
styles.flexCenter flex-col relative'. It imports feedback constant from a separate file, and imports a component called "FeedbackCard" 
from another file.

The component has a structure with two main sections:
 1.The first section contains a blue gradient background and a heading and a paragraph.
  The second section contains a container that renders multiple FeedbackCard
 2.The second section contains a container that renders multiple FeedbackCard components, 
  which are imported from the separate file. Each FeedbackCard component is passed data from 
  the feedback constant as props.

  The component is exported as the default export, and when rendered, it will display a section with a heading and a paragraph, 
  and multiple feedback card components inside the container on the right side, and the blue gradient background on the left side.

*/