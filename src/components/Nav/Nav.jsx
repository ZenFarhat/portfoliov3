import React from 'react'
import '../../styles/style.css'

function Nav() {
  return (
    <nav>
      <div className='nav__logo' id='nav'>
        <h2>Zen Farhat</h2>
      </div>
      <div className='nav__links'>
        <ul className='nav__list'>
          <li className='nav__list-item nav__skills animated__nav'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='nav__list-item nav__projects animated__nav'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='nav__list-item nav__contact'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
