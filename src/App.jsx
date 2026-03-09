import { useState } from 'react'
import Hero from './sections/Hero'
import ContentSection from './sections/ContentSection'
import Footer from './sections/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('resume')

  return (
    <main className="page-shell">
      <div className="side-lines"></div>
      <div className="page-container">
        <Hero
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <ContentSection activeSection={activeSection} />
        <Footer />
      </div>
    </main>
  )
}

export default App