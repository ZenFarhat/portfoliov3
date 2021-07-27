import React from 'react'
import '../../styles/style.css'
import resume from '../../assets/Zen_Farhat_-_Front-End_developer WEB.pdf'

function Footer() {
  return (
    <footer>
      <a href='#nav' className='footer__logo'>
        ZF
      </a>
      <div className='footer__links'>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/zeneff/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://github.com/ZenFarhat'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a href={resume} target='_blank' rel='noreferrer'>
              Resume
            </a>
          </li>
        </ul>
      </div>
      <p>Copyright &copy; 2021 Zen Farhat</p>
    </footer>
  )
}

export default Footer
