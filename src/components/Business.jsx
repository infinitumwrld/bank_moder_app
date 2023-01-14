import React from 'react'
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 menor rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-seminold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden' /> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
          With the right credit card, you can improve your financial life by building credit, 
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>

        <Button styles='mt-10' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Business

/*
CODE EXPLANATION:

This code defines a React functional component called "Business" that renders a section 
element with an ID of 'features' and a className of 'layout.section'. It imports an array 
called 'features' from a constants file, styles object and layout object from a separate 
file and imports a component called "Button" from another file.

The component also defines a functional component called 'FeatureCard' which takes in 
4 props, icon, title, content and index and renders a div element with a className of 
'flex flex-row p-6 menor rounded-[20px] mb-6 feature-card'. This div contains two child divs:

 1.The first div contains an image element with a src of icon and className of 'w-[50%] h-[50%] object-contain'
 2.The second div contains two child elements:
    *h4 element with className of 'font-poppins font-seminold text-white text-[18px] leading-[23px] mb-1' and displays the title prop
    *p element with className of 'font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1' and displays the content prop

The Business component maps over the features array and renders a FeatureCard component for each item in the array with all the properties of the current feature object.

The Business component has a structure with two main sections:
 1.A section on the left side with a heading and a paragraph and a button component
 2.A section on the right side with the FeatureCard components.

The component is exported as the default export, and when rendered, it will display a section with a heading and a paragraph, and a button component on the left side

*/ 