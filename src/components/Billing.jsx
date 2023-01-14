import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => 
   (
    <section id='product' className={layout.sectionReverse} >
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> 
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing 
          ultrices ametodio aenean neque. Fusce ipsum orci 
          rhoncus aliporttitor integer platea placerat.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )

export default Billing

 /* 
 CODE EXPLANATION:

    1. The code imports the React library and the three images (apple, bill, and google) 
        from a directory called "assets". It also imports a styles object and a layout object 
        from a file called "style".

    2.  The code defines a functional component called "Billing" which returns a JSX element 
        that renders a section element with an ID of 'product' and a className of 'layout.sectionReverse'.

    3   Inside this section element, there are two divs with classes 'layout.sectionImgReverse' and 'layout.sectionInfo'
        respectively.

    4.  The first div contains the bill image with an 'alt' attribute of 'billing' and a className of 'w-[100%] h-[100%] relative z-[5]'. 
        It also contains two more divs:
        The first of the two divs is an overlay with a className of 'absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'.
        The second of the two divs is an overlay with a className of 'absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'.
    
        The second div contains a heading with text "Easily control your billing & invoicing." and a className of 'styles.heading2'. It also contains 
        a paragraph element with text "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor 
        integer platea placerat." and a className of ${styles.paragraph} max-w-[470px] mt-5.

    5.  Inside the second div, there is a div with className of 'flex flex-row flex-wrap sm:mt-10 mt-6' which contains two images, apple and google, with an 'alt' 
        attribute of 'apple_store' and 'google_play' respectively and className 'w-[128px] h-[42px] object-contain mr-5 cursor-pointer' and 'w-[128px] h-[42px] object-contain 
        cursor-pointer' respectively.

    6.  At last, the component is exported as the default export.

This component when rendered will display a section with a reverse layout, containing an image of 'bill' with gradient overlays and some text, and two images of 'apple' and 'google' 
under the text side.
 */