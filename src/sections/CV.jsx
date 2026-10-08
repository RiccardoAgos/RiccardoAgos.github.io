const copy = {
  it: {
    eyebrow: 'Curriculum',
    profileTitle: 'Profilo professionale',
    profile:
      'Software Developer con esperienza nello sviluppo di applicazioni mobile e web. Ho lavorato su progetti con React Native, AngularJS, backend services e integrazioni cloud. Ho seguito ExpenseMate dalla progettazione alla pubblicazione su App Store, maturando competenze anche in ambito IoT e didattica informatica.',
    highlights: [
      ['Mobile', 'React Native'],
      ['Web', 'Frontend & Backend'],
      ['Extra', 'Cloud & IoT'],
    ],
    experienceTitle: 'Esperienza',
    experiences: [
      {
        role: 'Mobile Product Developer',
        company: 'ExpenseMate · Progetto indipendente',
        period: '2026 – oggi',
        description:
          'Progettazione, sviluppo e pubblicazione di un’app mobile per la pianificazione delle spese, dall’esperienza React Native al backend AWS fino alla distribuzione su App Store.',
        tech: ['React Native', 'Expo', 'AWS', 'App Store Connect'],
      },
      {
        role: 'Docente di Informatica',
        company: 'Liceo Laurana Baldi',
        period: '2024 – 2026',
        description:
          'Progettazione di lezioni teoriche e pratiche, supporto agli studenti e promozione del pensiero computazionale.',
        tech: ['Didattica', 'Problem Solving', 'Digital Skills'],
      },
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
    ],
    educationTitle: 'Formazione',
    education: [
      ['Laurea in Informatica Applicata', 'Università di Urbino'],
      ['Erasmus+ a Budapest', 'Università di Tecnologia e di Economia di Budapest'],
    ],
    skillsTitle: 'Competenze tecniche',
  },
  en: {
    eyebrow: 'Resume',
    profileTitle: 'Professional profile',
    profile:
      'Software Developer experienced in building mobile and web applications. I have worked with React Native, AngularJS, backend services and cloud integrations. I took ExpenseMate from product design to App Store release, while also developing experience in IoT and computer science education.',
    highlights: [
      ['Mobile', 'React Native'],
      ['Web', 'Frontend & Backend'],
      ['Beyond', 'Cloud & IoT'],
    ],
    experienceTitle: 'Experience',
    experiences: [
      {
        role: 'Mobile Product Developer',
        company: 'ExpenseMate · Independent project',
        period: '2026 – present',
        description:
          'Designed, developed and published a mobile expense-planning product, from its React Native experience and AWS backend to its App Store release.',
        tech: ['React Native', 'Expo', 'AWS', 'App Store Connect'],
      },
      {
        role: 'Computer Science Teacher',
        company: 'Liceo Laurana Baldi',
        period: '2024 – 2026',
        description:
          'Designed theoretical and practical lessons, supported students and promoted computational thinking.',
        tech: ['Education', 'Problem Solving', 'Digital Skills'],
      },
      {
        role: 'Software Developer',
        company: 'STOL COMPUTER',
        period: '2024',
        description:
          'Developed iOS and Android applications with React Native, integrating APIs and AWS Amplify services.',
        tech: ['React Native', 'AWS Amplify', 'API Integration'],
      },
      {
        role: 'Software Developer',
        company: 'CENTER GAME',
        period: '2022 – 2023',
        description:
          'Worked on AngularJS frontend development, C# and SQL backend systems, and an ESP32-based IoT project.',
        tech: ['AngularJS', 'C#', 'SQL', 'ESP32'],
      },
    ],
    educationTitle: 'Education',
    education: [
      ['BSc in Applied Computer Science', 'University of Urbino'],
      ['Erasmus+ in Budapest', 'Budapest University of Technology and Economics'],
    ],
    skillsTitle: 'Technical skills',
  },
}

const skills = {
  Frontend: ['React Native', 'React', 'AngularJS', 'JavaScript'],
  Backend: ['Node.js', 'C#', 'SQL'],
  Cloud: ['AWS Lambda', 'API Gateway', 'AWS Amplify'],
  Product: ['Expo', 'EAS', 'App Store Connect'],
  Other: ['ESP32', 'IoT', 'macOS'],
}

function CV({ language }) {
  const t = copy[language]

  return (
    <div className="cv-layout">
      <section className="cv-panel">
        <p className="cv-eyebrow">{t.eyebrow}</p>
        <h3>{t.profileTitle}</h3>
        <p className="cv-lead">{t.profile}</p>

        <div className="cv-highlights">
          {t.highlights.map(([label, value]) => (
            <div className="cv-highlight-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-panel">
        <h3>{t.experienceTitle}</h3>

        <div className="cv-experience-list">
          {t.experiences.map((item) => (
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
                {item.tech.map((technology) => (
                  <span className="cv-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="cv-grid-2">
        <section className="cv-panel">
          <h3>{t.educationTitle}</h3>

          {t.education.map(([title, detail]) => (
            <div className="cv-edu-item" key={title}>
              <h4>{title}</h4>
              <p>{detail}</p>
            </div>
          ))}
        </section>

        <section className="cv-panel">
          <h3>{t.skillsTitle}</h3>

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
