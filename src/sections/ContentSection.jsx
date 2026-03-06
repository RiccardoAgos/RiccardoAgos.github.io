import CV from './CV'
import Projects from './Projects'
import Contact from './Contact'

function ContentSection({ activeSection }) {
  return (
    <section className="content-card">

        {activeSection === 'resume' && <CV />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}

    </section>
  )
}

export default ContentSection