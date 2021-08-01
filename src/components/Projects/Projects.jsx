import React from 'react'
import '../../styles/style.css'
import amazonProject from '../../assets/amazon.png'
import movieProject from '../../assets/movie.png'
import realEstateProject from '../../assets/realestate.png'
import teslaProject from '../../assets/tesla.png'
import portfolio from '../../assets/portfolio.png'
import travelProject from '../../assets/travel.png'
import Project from './Project'

function Projects() {
  return (
    <div className='projects section' id='projects'>
      <h1>
        Take a look through my <span className='base__span'>projects</span>
      </h1>
      <div className='project__container'>
        <Project
          img={amazonProject}
          name='Amazon Replication'
          tech='HTML, CSS, React, Redux, SASS'
          deployLink='https://challenge-f061e.web.app/'
          codeLink='https://github.com/ZenFarhat/amazon-clone'
        />
        <Project
          img={movieProject}
          name='ReviewTube'
          tech='HTML, CSS, JS, React, AXIOS'
          deployLink='https://reviewtube-867da.web.app/'
          codeLink='https://github.com/ZenFarhat/reviewTube'
        />
        <Project
          name='Real Estate Brochure Site'
          tech='HTML, CSS, JS , React'
          img={realEstateProject}
          deployLink='https://realestatezf.web.app/'
          codeLink='https://github.com/ZenFarhat/realestate-project'
        />
        <Project
          name='Tesla frontend clone'
          tech='HTML, CSS, JS, React, SASS'
          img={teslaProject}
          deployLink='https://tesla-clone-7faa4.web.app/'
          codeLink='https://github.com/ZenFarhat/tesla-clone'
        />
        <Project
          name='Travel brochure website'
          tech='HTML, CSS, React'
          img={travelProject}
          deployLink='https://travelcozenf.web.app/'
          codeLink='https://github.com/ZenFarhat/TravelCo'
        />
        <Project
          tech='HTML, CSS, JS, React, SASS'
          name='Previous portfolios'
          img={portfolio}
          deployLink='https://portfoliov2-f563a.web.app/'
          codeLink='https://github.com/ZenFarhat/portfoliov2'
        />
      </div>
    </div>
  )
}

export default Projects
