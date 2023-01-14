import { useState } from "react";
import React from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import Button from './Button';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]'/>

      <ul className="list-none sm:flex z-[5] hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins menor font-normal hover:text-secondary cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10' } text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
          
      <Button styles='ml-8' />

       <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt='menu'
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

           <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-6' } text-white`}
                  >
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
           </div>
       </div>     
    </nav>
  )
}

export default Navbar

/*
CODE EXPLANATION: 

This code defines a React functional component called "Navbar" that renders a nav element with the className 'items-center navbar'. 
It imports an image called logo and two more images menu and close from a directory, and import a component called "Button" from another file.

The component contains a logo image logo with an 'alt' attribute of 'hoobank' and a className of 'w-[124px] h-[32px]', and an unordered list 
of navigation links navLinks which are mapped over and rendered as list items. Each list item contains an anchor tag with a href that corresponds 
to the nav.id and the text of the link is nav.title. The component also has a button component imported and rendered with the prop of styles.

Additionally, the component has a toggler function that changes the state of toggle by setting it to the opposite of its previous state when 
the menu icon is clicked. When the toggle state is true, it will show the sidebar with the navigation links. If the toggle state is false, the 
sidebar will be hidden. The component is exported as the default export.

When rendered, the component will display a navbar with a logo, a list of navigation links, a button component, and a toggle menu icon that when
clicked will show or hide a sidebar with the navigation links. The sidebar will be hidden on larger screens and shown on smaller screens.

*/ 