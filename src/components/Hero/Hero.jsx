import React from 'react'
import '../../styles/style.css'
import me from '../../assets/me.svg'
import splash from '../../assets/splash.svg'
import resume from '../../assets/Zen_Farhat_-_Front-End_developer WEB.pdf'

function Hero() {
  return (
    <div className='hero section' id='hero'>
      <div className='hero__text-section'>
        <div className='hero__header hero__text'>
          <h1 className='hero__header1'>
            Hello, I'm <span className='base__span'>Zen Farhat</span>
          </h1>
        </div>
        <h3 className='hero__desc hero__text'>
          Dedicated, <span className='base__span'>frontend developer </span>
          known for designing, developing, and delivering custom web
          applications and software solutions. Applies a variety of front-end
          technologies in diverse website development projects.
        </h3>
        <div className='hero__icons hero__text'>
          <a
            href='https://www.linkedin.com/in/zeneff/'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fab fa-linkedin-in hero__icon linkedin__icon'></i>
          </a>
          <a
            href='https://github.com/ZenFarhat'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fab fa-github hero__icon github__icon'></i>
          </a>
          <a href={resume} target='_blank' rel='noreferrer'>
            {' '}
            <i class='fas fa-file-pdf hero__icon file__icon'></i>
          </a>
        </div>
      </div>
      <img src={me} alt='man-on-computer' className='hero__me' />
      <img src={splash} alt='splash-effect' className='hero__splash' />
    </div>
  )
}

export default Hero
