import CV from './CV'
import Projects from './Projects'
import Contact from './Contact'

function ContentSection({ activeSection, language }) {
  return (
    <section className="content-card">

        {activeSection === 'resume' && <CV language={language} />}
        {activeSection === 'projects' && <Projects language={language} />}
        {activeSection === 'contact' && <Contact language={language} />}

    </section>
  )
}

export default ContentSection
