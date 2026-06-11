import { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Education from './components/Education'
import WorkSamples from './components/WorkSamples'
import Footer from './components/Footer'

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <div style={{
        visibility: ready ? 'visible' : 'hidden',
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.4s ease 0.1s',
      }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <WorkSamples />
          <Certifications />
          <Education />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
