import { useEffect, useState } from 'react'
import Hero from './sections/Hero'
import ContentSection from './sections/ContentSection'
import Footer from './sections/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('projects')
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')

    if (savedLanguage === 'it' || savedLanguage === 'en') {
      return savedLanguage
    }

    return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'it'
  })

  useEffect(() => {
    const descriptions = {
      it: 'Portfolio di Riccardo Agostini, sviluppatore di applicazioni mobile e web specializzato in React Native, servizi cloud e assistenti AI testuali e vocali.',
      en: 'Portfolio of Riccardo Agostini, a mobile and web developer focused on React Native, cloud services and text and voice AI assistants.',
    }

    document.documentElement.lang = language
    document.title = 'Riccardo Agostini | Mobile & Web Developer'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', descriptions[language])
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <main className="page-shell">
      <div className="side-lines"></div>
      <div className="page-container">
        <Hero
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          language={language}
          setLanguage={setLanguage}
        />
        <ContentSection activeSection={activeSection} language={language} />
        <Footer language={language} />
      </div>
    </main>
  )
}

export default App
