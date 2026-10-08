const copy = {
  it: {
    eyebrow: 'Contatti',
    title: 'Parliamone',
    lead: 'Sono disponibile per opportunità lavorative, collaborazioni su progetti software e contatti professionali in ambito mobile e web.',
    emailDescription: 'Il modo migliore per un primo contatto professionale.',
    emailCta: 'Scrivimi →',
    githubDescription: 'Repository, codice e progetti mobile e web.',
    githubCta: 'Visita profilo →',
    linkedinDescription: 'Profilo professionale, percorso e connessioni.',
    linkedinCta: 'Vai al profilo →',
  },
  en: {
    eyebrow: 'Contact',
    title: 'Let’s talk',
    lead: 'I’m open to job opportunities, software collaborations and professional conversations across mobile and web development.',
    emailDescription: 'The best way to start a professional conversation.',
    emailCta: 'Email me →',
    githubDescription: 'Repositories, code and mobile and web projects.',
    githubCta: 'View profile →',
    linkedinDescription: 'Professional profile, experience and connections.',
    linkedinCta: 'Open profile →',
  },
}

function Contact({ language }) {
  const t = copy[language]

  return (
    <div className="contact-layout">
      <section className="contact-panel">
        <p className="contact-eyebrow">{t.eyebrow}</p>
        <h3>{t.title}</h3>
        <p className="contact-lead">{t.lead}</p>
      </section>

      <div className="contact-grid">
        <a href="mailto:r.agos1998@gmail.com" className="contact-preview-card">
          <div className="contact-preview-top">
            <div className="contact-logo-placeholder">✉</div>
            <div>
              <h4>Email</h4>
              <p>r.agos1998@gmail.com</p>
            </div>
          </div>

          <p className="contact-preview-desc">{t.emailDescription}</p>

          <span className="contact-cta">{t.emailCta}</span>
        </a>

        <a
          href="https://github.com/RiccardoAgos"
          target="_blank"
          rel="noreferrer"
          className="contact-preview-card"
        >
          <div className="contact-preview-top">
            <div className="contact-logo-placeholder">GH</div>
            <div>
              <h4>GitHub</h4>
              <p>@RiccardoAgos</p>
            </div>
          </div>

          <p className="contact-preview-desc">{t.githubDescription}</p>

          <span className="contact-cta">{t.githubCta}</span>
        </a>

        <a
          href="https://www.linkedin.com/in/riccardo-agostini-ago"
          target="_blank"
          rel="noreferrer"
          className="contact-preview-card"
        >
          <div className="contact-preview-top">
            <div className="contact-logo-placeholder">in</div>
            <div>
              <h4>LinkedIn</h4>
              <p>Riccardo Agostini</p>
            </div>
          </div>

          <p className="contact-preview-desc">{t.linkedinDescription}</p>

          <span className="contact-cta">{t.linkedinCta}</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
