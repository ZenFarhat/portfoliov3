import React from 'react'
import '../../styles/style.css'
import Fade from 'react-reveal/Fade'

function Project(props) {
  return (
    <Fade>
      <div
        className='project'
        style={{ backgroundImage: 'url(' + props.img + ')' }}
      >
        <div className={`project__desc project__${props.colour}`}>
          <h3 className='project__name'>{props.name}</h3>
          <div className='project__divider'></div>
          <p className='project__techstack'>{`Technologies used: ${props.tech}`}</p>
          <div className='project__buttons'>
            <a href={props.deployLink} target='_blank' rel='noreferrer'>
              <button>View Deployment</button>
            </a>
            <a href={props.codeLink} target='_blank' rel='noreferrer'>
              <button>View Code</button>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Project
