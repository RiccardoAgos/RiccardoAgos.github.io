function Contact() {
  return (
    <div className="contact-layout">
      <section className="contact-panel">
        <p className="contact-eyebrow">Contatti</p>
        <h3>Parliamone</h3>
        <p className="contact-lead">
          Sono disponibile per opportunità lavorative, collaborazioni su
          progetti software e contatti professionali in ambito mobile e web.
        </p>
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

          <p className="contact-preview-desc">
            Il modo migliore per un primo contatto professionale.
          </p>

          <span className="contact-cta">Scrivimi →</span>
        </a>

        <a
          href="https://www.linkedin.com/in/riccardo-agostini-ago"
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

          <p className="contact-preview-desc">
            Repository, codice e progetti mobile e web.
          </p>

          <span className="contact-cta">Visita profilo →</span>
        </a>

        <a
          href="https://www.linkedin.com/"
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

          <p className="contact-preview-desc">
            Profilo professionale, percorso e connessioni.
          </p>

          <span className="contact-cta">Vai al profilo →</span>
        </a>
      </div>
    </div>
  )
}

export default Contact

