const copy = {
  it: {
    intro: 'Ciao, sono',
    role: 'Mobile & Web Developer',
    description:
      'Progetto prodotti digitali completi: dall’esperienza mobile al backend, fino alla pubblicazione e all’evoluzione con strumenti AI.',
    projects: 'Progetti',
    resume: 'CV',
    contact: 'Contattami',
    languageLabel: 'Seleziona la lingua',
  },
  en: {
    intro: 'Hi, I’m',
    role: 'Mobile & Web Developer',
    description:
      'I build complete digital products: from mobile experience and backend architecture to publishing and AI-powered evolution.',
    projects: 'Projects',
    resume: 'Resume',
    contact: 'Contact me',
    languageLabel: 'Select language',
  },
}

function Hero({ activeSection, setActiveSection, language, setLanguage }) {
  const t = copy[language]

  return (
    <section className="hero-section">
      <div className="hero-card">
        <div className="language-switch" role="group" aria-label={t.languageLabel}>
          <button
            className={language === 'it' ? 'language-chip active' : 'language-chip'}
            type="button"
            aria-pressed={language === 'it'}
            onClick={() => setLanguage('it')}
          >
            IT
          </button>
          <button
            className={language === 'en' ? 'language-chip active' : 'language-chip'}
            type="button"
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>

        <p className="hero-intro">{t.intro}</p>

        <h1>Riccardo Agostini</h1>

        <h2>{t.role}</h2>

        <p className="hero-description">{t.description}</p>
      </div>

      <div className="tabs-row">
        <button
          className={activeSection === 'projects' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveSection('projects')}
        >
          {t.projects}
        </button>

        <button
          className={activeSection === 'resume' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveSection('resume')}
        >
          {t.resume}
        </button>

        <button
          className={activeSection === 'contact' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveSection('contact')}
        >
          {t.contact}
        </button>
      </div>
    </section>
  )
}

export default Hero
