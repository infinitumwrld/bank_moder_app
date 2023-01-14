import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () =>  (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] client cursor-pointer min-w-[120px]`}> 
            <img src={client.logo} alt='client' className='sm:w-[192px] menor w-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </section>
  )

export default Clients

/*
CODE EXPLANATION:

This code defines a React functional component called "Clients" that renders a section element with a className of 
'styles.flexCenter my-4'. It imports clients constant from a separate file.

The component is a container that renders multiple images of logos from clients of the company, each logo is passed 
data from the clients constant as props. The logos are rendered in a flex container, with className of 'styles.flexCenter 
flex-wrap w-full' and each image has a className of 'flex-1 styles.flexCenter sm:min-w-[192px] client cursor-pointer min-w-[120px]'

The component is exported as the default export, and when rendered, it will display a section with the logos of the clients of 
the company horizontally aligned, and they will be displayed as clickable icons.

*/ 