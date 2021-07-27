import React from 'react'
import '../../styles/style.css'
import amazonProject from '../../assets/amazon-project.png'
import movieProject from '../../assets/movieproject.JPG'
import realEstateProject from '../../assets/realestate-project.JPG'
import teslaProject from '../../assets/tesla-project.jpg'
import travelProject from '../../assets/travelco.JPG'
import Project from './Project'
import portfolio from '../../assets/portfoliov1.JPG'

function Projects() {
  return (
    <div className='projects section'>
      <h1>
        Take a look through my <span className='base__span'>projects</span>
      </h1>
      <div className='project__container'>
        <Project
          colour='blue'
          img={amazonProject}
          name='Amazon Replication'
          tech='HTML, CSS, React, Redux, SASS'
          deployLink='https://challenge-f061e.web.app/'
          codeLink='https://github.com/ZenFarhat/amazon-clone'
        />
        <Project
          colour='red'
          img={movieProject}
          name='reviewTube'
          tech='HTML, CSS, JS, React, AXIOS API-FETCHING'
          deployLink='https://reviewtube-867da.web.app/'
          codeLink='https://github.com/ZenFarhat/reviewTube'
        />
        <Project
          colour='green'
          name='Real Estate Brochure Site'
          tech='HTML, CSS, JS , React'
          img={realEstateProject}
          deployLink='https://realestatezf.web.app/'
          codeLink='https://github.com/ZenFarhat/realestate-project'
        />
        <Project
          colour='purple'
          name='Tesla frontend clone'
          tech='HTML, CSS, JS, React, SASS'
          img={teslaProject}
          deployLink='https://tesla-clone-7faa4.web.app/'
          codeLink='https://github.com/ZenFarhat/tesla-clone'
        />
        <Project
          colour='blue'
          name='Travel brochure website'
          tech='HTML, CSS, React'
          img={travelProject}
          deployLink='https://travelcozenf.web.app/'
          codeLink='https://github.com/ZenFarhat/TravelCo'
        />
        <Project
          colour='red'
          tech='HTML, CSS, JS, React, SASS'
          name='Previous portfolios'
          deployLink='https://portfoliov2-f563a.web.app/'
          codeLink='https://github.com/ZenFarhat/portfoliov2'
          img={portfolio}
        />
      </div>
    </div>
  )
}

export default Projects
