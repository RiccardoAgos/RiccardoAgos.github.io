function CV() {
    const experiences = [
      {
        role: 'Software Developer',
        company: 'STOL COMPUTER',
        period: '2024',
        description:
          'Sviluppo di applicazioni mobile per iOS e Android con React Native, integrazione API e utilizzo di AWS Amplify.',
        tech: ['React Native', 'AWS Amplify', 'API Integration'],
      },
      {
        role: 'Software Developer',
        company: 'CENTER GAME',
        period: '2022 – 2023',
        description:
          'Sviluppo frontend con AngularJS, backend con C# e SQL, con esperienza anche in un progetto IoT su ESP32.',
        tech: ['AngularJS', 'C#', 'SQL', 'ESP32'],
      },
      {
        role: 'Docente di Informatica',
        company: 'Liceo Laurana Baldi',
        period: '2024 – 2025',
        description:
          'Progettazione di lezioni teoriche e pratiche, supporto agli studenti e promozione del pensiero computazionale.',
        tech: ['Didattica', 'Problem Solving', 'Digital Skills'],
      },
    ]
  
    const skills = {
      Frontend: ['React Native', 'AngularJS', 'JavaScript'],
      Backend: ['Node.js', 'C#', 'SQL'],
      Cloud: ['AWS Amplify', 'Amazon Aurora'],
      Other: ['ESP32', 'IoT', 'MacOS'],
    }
  
    return (
      <div className="cv-layout">
        <section className="cv-panel">
          <p className="cv-eyebrow">Curriculum</p>
          <h3>Profilo professionale</h3>
          <p className="cv-lead">
            Software Developer con esperienza nello sviluppo di applicazioni
            mobile e web. Ho lavorato su progetti con React Native, AngularJS,
            backend services e integrazioni cloud, maturando competenze anche in
            ambito IoT e didattica informatica.
          </p>
  
          <div className="cv-highlights">
            <div className="cv-highlight-card">
              <span>Mobile</span>
              <strong>React Native</strong>
            </div>
            <div className="cv-highlight-card">
              <span>Web</span>
              <strong>Frontend & Backend</strong>
            </div>
            <div className="cv-highlight-card">
              <span>Extra</span>
              <strong>Cloud & IoT</strong>
            </div>
          </div>
        </section>
  
        <section className="cv-panel">
          <h3>Esperienza</h3>
  
          <div className="cv-experience-list">
            {experiences.map((item) => (
              <article className="cv-exp-card" key={`${item.company}-${item.period}`}>
                <div className="cv-exp-top">
                  <div>
                    <h4>{item.role}</h4>
                    <p className="cv-exp-company">{item.company}</p>
                  </div>
                  <span className="cv-period">{item.period}</span>
                </div>
  
                <p className="cv-exp-description">{item.description}</p>
  
                <div className="cv-tags">
                  {item.tech.map((tech) => (
                    <span className="cv-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
  
        <div className="cv-grid-2">
          <section className="cv-panel">
            <h3>Formazione</h3>
  
            <div className="cv-edu-item">
              <h4>Laurea in Informatica Applicata</h4>
              <p>Università di Urbino · 2022</p>
            </div>
  
            <div className="cv-edu-item">
              <h4>Erasmus+ a Budapest</h4>
              <p>Università di Tecnologia e di Economia di Budapest · 2023</p>
            </div>
  
            <div className="cv-edu-item">
              <h4>Magistrale in Informatica Applicata</h4>
              <p>Università di Urbino · in corso</p>
            </div>
          </section>
  
          <section className="cv-panel">
            <h3>Competenze tecniche</h3>
  
            <div className="cv-skills-groups">
              {Object.entries(skills).map(([group, items]) => (
                <div className="cv-skill-group" key={group}>
                  <h4>{group}</h4>
                  <div className="cv-tags">
                    {items.map((item) => (
                      <span className="cv-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    )
  }
  
  export default CV