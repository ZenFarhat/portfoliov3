import React from 'react'
import '../../styles/style.css'

function Footer() {
  return (
    <footer>
      <a href='' className='footer__logo'>
        ZF
      </a>
      <div className='footer__links'>
        <ul>
          <li>
            <a href=''>LinkedIn</a>
          </li>
          <li>
            <a href=''>GitHub</a>
          </li>
          <li>
            <a href=''>Resume</a>
          </li>
        </ul>
      </div>
      <p>Copyright &copy; 2021 Zen Farhat</p>
    </footer>
  )
}

export default Footer
