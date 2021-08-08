import './styles/style.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <a href='#contact' className='contact__icon'>
        <i class='far fa-envelope'></i>
      </a>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
