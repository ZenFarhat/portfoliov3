import React from 'react'
import '../../styles/style.css'
import me from '../../assets/me.svg'
import splash from '../../assets/splash.svg'

function Hero() {
  return (
    <div className='hero section'>
      <div className='hero__text-section'>
        <div className='hero__header hero__text'>
          <h1 className='hero__header1'>
            Hey! I'm <span className='base__span'>Zen Farhat</span>
          </h1>
        </div>
        <h3 className='hero__desc hero__text'>
          A dedicated self-driven{' '}
          <span className='base__span'>frontend software developer</span> with a
          strong passion for building <br />
          responsive, performant & modern web applications with great user{' '}
          <br /> experiences that positively impact the world.
        </h3>
        <div className='hero__icons hero__text'>
          <i class='fab fa-linkedin-in hero__icon linkedin__icon'></i>
          <i class='fab fa-github hero__icon github__icon'></i>
          <i class='fas fa-file-pdf hero__icon file__icon'></i>
        </div>
      </div>
      <img src={me} alt='man-on-computer' className='hero__me' />
      <img src={splash} alt='splash-effect' className='hero__splash' />
    </div>
  )
}

export default Hero
