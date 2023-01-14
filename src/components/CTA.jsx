import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[478px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )


export default CTA

/*
CODE EXPLANANTION:

The CTA component is a section of the website that is intended to encourage the user to take some sort of action, such as signing up 
for a service or making a purchase. It includes a heading, a paragraph of text, and a button component. The section uses CSS styles 
from the style.js file to set the text color, font, and alignment. The section also uses CSS classes for layout and design, such as 
flex-center for aligning the elements in the center and bg-black-gradient-2 for setting the background color. The button component is 
imported from the Button.js file and is used to encourage the user to take action.

*/ 