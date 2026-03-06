function Hero({ activeSection, setActiveSection }) {
  return (
    <section className="hero-section">
      <div className="hero-card">
        <p className="hero-intro">Ciao, sono</p>

        <h1>Riccardo Agostini</h1>

        <h2>Mobile & Web Developer</h2>

        <p className="hero-description">
          Realizzo applicazioni mobile e web moderne, con attenzione a
          usabilità, struttura del frontend e integrazione con backend e
          servizi cloud.
        </p>
      </div>

      <div className="tabs-row">
        <button
          className={activeSection === 'resume' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveSection('resume')}
        >
          CV
        </button>

        <button
          className={activeSection === 'projects' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveSection('projects')}
        >
          Progetti
        </button>

        <button
          className={activeSection === 'contact' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveSection('contact')}
        >
          Contattami
        </button>
      </div>
    </section>
  )
}

export default Hero