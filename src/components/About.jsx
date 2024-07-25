import React from 'react'

function About() {
  return (
    <div className='about-div'>
      <div className='about-me'>
        <h2>About Me</h2>
        <p>Looking to buy, rent, or sell a property? 
          You've come to the right place. As a 30 year resident of Staten Island, I have extensive knowledge of the local neighborhoods that make up this vibrant borough.</p>
          
        <p>I am an agent at DiTommaso Real Estate- bested as a top Real Estate firm in the greater metropolitan area. Serving both Staten Island and Brooklyn, I am dedicated to make your buying, selling or renting process a breeze. Take a look at the featured listings and current properties at <a style={{textDecoration:'none', color:'black', fontWeight:'bold'}} href="https://www.ditommaso.com/" target='_blank'>Ditommaso.com</a>.</p>
          
        <p>My goal is to provide professional service and support you through the entire buying, selling, or renting process- from start to finish.
        Let's make your real estate dreams come true. Contact me for a FREE home valuation!</p>
        <a href='/contact' className='contact-btn'>CONTACT</a>
      </div>
      <img src="samar profile redo.png" alt="" />
    </div>
  )
}

export default About