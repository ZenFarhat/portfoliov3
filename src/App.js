import './styles/style.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
