import React from 'react'
import '../../styles/style.css'

function Skills() {
  const skills = [
    { text: 'HTML', class: 'fab fa-html5 skill-icon html-icon' },
    { text: 'CSS', class: 'fab fa-css3-alt skill-icon css-icon' },
    { text: 'JS', class: 'fab fa-js-square skill-icon js-icon' },
    { text: 'React', class: 'fab fa-react skill-icon react-icon' },
    { text: 'Angular', class: 'fab fa-angular skill-icon angular-icon' },
    { text: 'Sass', class: 'fab fa-sass skill-icon sass-icon' },
    { text: 'NodeJS', class: 'fab fa-node skill-icon node-icon' },
  ]

  return (
    <div className='skills section'>
      <h1>This is my tech stack</h1>
      <div className='computer__screen'>
        <div className='skills__icons'>
          {skills.map((skill) => {
            return (
              <div className='skill__container'>
                <i class={skill.class}></i>
                <p className='skill__text'>{skill.text}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='computer__neck'></div>
      <div className='computer__leg'></div>
    </div>
  )
}

export default Skills
