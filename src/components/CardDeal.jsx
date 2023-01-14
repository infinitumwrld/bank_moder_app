import React from 'react'
import { card } from '../assets';
import styles, {layout} from '../style';
import Button from "./Button";

const CardDeal = () => 
   (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2} >Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus.
          Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  )

export default CardDeal

/*
CODE EXPLANATION:

This code defines a React functional component called "CardDeal" that renders a section element with a className of 'layout.section'. 
It imports an image called 'card' from an assets file, styles object and layout object from a separate file, and imports a component 
called "Button" from another file.

The component has a structure with two main sections:
 1.A section on the left side with a heading and a paragraph and a button component
 2.A section on the right side with an image of a card.

The component is exported as the default export, and when rendered, it will display a section with a heading and a paragraph, 
and a button component on the left side and an image of a card on the right side.
 */ 