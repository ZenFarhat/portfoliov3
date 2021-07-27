import React from 'react'
import '../../styles/style.css'

function Nav() {
  return (
    <nav>
      <div className='nav__logo'>
        <h2>Zen Farhat</h2>
      </div>
      <div className='nav__links'>
        <ul className='nav__list'>
          <li className='nav__list-item nav__skills'>Skills</li>
          <li className='nav__list-item nav__projects'>Projects</li>
          <li className='nav__list-item nav__contact'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
