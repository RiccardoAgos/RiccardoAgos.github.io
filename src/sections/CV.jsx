const copy = {
  it: {
    eyebrow: 'Curriculum',
    profileTitle: 'Profilo professionale',
    profile:
      'Software Developer con esperienza nello sviluppo di applicazioni mobile e web. Ho lavorato su progetti con React Native, AngularJS, backend services e integrazioni cloud. Ho seguito ExpenseMate dalla progettazione alla pubblicazione su iOS e Android, sviluppando un assistente AI testuale e vocale con agenti specializzati e backend serverless. Ho esperienza anche in IoT e didattica informatica.',
    highlights: [
      ['Mobile', 'React Native'],
      ['Web', 'Frontend & Backend'],
      ['AI', 'Agenti & Voice UX'],
    ],
    experienceTitle: 'Esperienza',
    experiences: [
      {
        role: 'Mobile Product Developer',
        company: 'ExpenseMate · Progetto indipendente',
        period: '2026 – oggi',
        description:
          'Progettazione, sviluppo e pubblicazione di un’app mobile per la gestione delle spese. Nella V2 ho integrato un assistente AI con orchestrazione di agenti, piani per richieste multiple, workflow deterministici e conferme interattive. Ho sviluppato la pipeline di trascrizione e sintesi vocale, separato le memorie di chat e voce e implementato quote mensili e integrazione degli abbonamenti. Validazione con test automatici e prove su dispositivi iOS e Android.',
        tech: ['React Native', 'TypeScript', 'OpenAI API', 'AWS Lambda', 'DynamoDB', 'RevenueCat'],
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
    skillsTitle: 'Competenze applicate',
    skillsIntro: 'Dall’interfaccia al backend, fino alla voce: competenze messe in pratica nello sviluppo e nell’evoluzione di ExpenseMate.',
    otherSkills: 'Altre esperienze: ESP32, IoT e didattica informatica.',
  },
  en: {
    eyebrow: 'Resume',
    profileTitle: 'Professional profile',
    profile:
      'Software Developer experienced in building mobile and web applications. I have worked with React Native, AngularJS, backend services and cloud integrations. I took ExpenseMate from product design to iOS and Android release, building a text and voice AI assistant with specialized agents and a serverless backend. I also have experience in IoT and computer science education.',
    highlights: [
      ['Mobile', 'React Native'],
      ['Web', 'Frontend & Backend'],
      ['AI', 'Agents & Voice UX'],
    ],
    experienceTitle: 'Experience',
    experiences: [
      {
        role: 'Mobile Product Developer',
        company: 'ExpenseMate · Independent project',
        period: '2026 – present',
        description:
          'Designed, developed and published a mobile expense-management product. In V2, I integrated an AI assistant with agent orchestration, execution plans for multiple requests, deterministic workflows and interactive confirmations. I built the transcription and speech-synthesis pipeline, separated chat and voice memory, and implemented monthly quotas and subscription integration. Validated through automated tests and testing on iOS and Android devices.',
        tech: ['React Native', 'TypeScript', 'OpenAI API', 'AWS Lambda', 'DynamoDB', 'RevenueCat'],
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
    skillsTitle: 'Skills in practice',
    skillsIntro: 'From the interface to the backend and voice: skills applied while building and evolving ExpenseMate.',
    otherSkills: 'Additional experience: ESP32, IoT and computer science education.',
  },
}

const skills = [
  { title: { it: 'Mobile e interfacce', en: 'Mobile and interfaces' }, description: { it: 'Interfacce multipiattaforma, componenti riutilizzabili e flussi adattati a iOS e Android.', en: 'Cross-platform interfaces, reusable components and flows adapted to iOS and Android.' }, items: ['React Native', 'Expo', 'React', 'TypeScript', 'JavaScript', 'AngularJS'] },
  { title: { it: 'Agenti AI', en: 'AI agents' }, description: { it: 'Orchestrazione di agenti specializzati, tool calling e piani di esecuzione per richieste multiple.', en: 'Specialized agent orchestration, tool calling and execution plans for multiple requests.' }, items: ['OpenAI API', 'Function calling', 'Multi-agent orchestration', 'Deterministic workflows'] },
  { title: { it: 'Esperienza vocale', en: 'Voice experience' }, description: { it: 'Trascrizione, gestione dei turni, sintesi vocale e card interattive; sessioni voce e chat separate.', en: 'Transcription, turn handling, speech synthesis and interactive cards; separate voice and chat sessions.' }, items: ['Speech-to-text', 'Text-to-speech', 'Audio recording', 'Conversation state'] },
  { title: { it: 'Backend e cloud', en: 'Backend and cloud' }, description: { it: 'API serverless, autenticazione, persistenza e permessi per operare sui dati del singolo utente.', en: 'Serverless APIs, authentication, persistence and permissions for working with each user’s data.' }, items: ['Node.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'IAM', 'AWS Amplify', 'C#', 'SQL'] },
  { title: { it: 'Qualità e affidabilità', en: 'Quality and reliability' }, description: { it: 'Test di workflow e integrazioni, gestione delle ambiguità, timeout e conferme prima delle modifiche.', en: 'Workflow and integration tests, ambiguity resolution, timeouts and confirmation before changes.' }, items: ['Jest', 'Integration testing', 'Error handling', 'iOS / Android testing'] },
  { title: { it: 'Prodotto e distribuzione', en: 'Product and delivery' }, description: { it: 'Build e distribuzione mobile, abbonamenti e quote mensili basate sulle operazioni completate.', en: 'Mobile builds and distribution, subscriptions and monthly quotas based on completed operations.' }, items: ['EAS', 'App Store Connect', 'Google Play Console', 'RevenueCat', 'Usage quotas'] },
]


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

      <div className="cv-education-section">
        <section className="cv-panel">
          <h3>{t.educationTitle}</h3>

          {t.education.map(([title, detail]) => (
            <div className="cv-edu-item" key={title}>
              <h4>{title}</h4>
              <p>{detail}</p>
            </div>
          ))}
        </section>

      </div>

        <section className="cv-panel cv-skills-panel">
          <h3>{t.skillsTitle}</h3>
          <p className="cv-skills-intro">{t.skillsIntro}</p>

          <div className="cv-skills-groups">
            {skills.map((group) => (
              <div className="cv-skill-group" key={group.title.en}>
                <h4>{group.title[language]}</h4>
                <p>{group.description[language]}</p>
                <div className="cv-tags">
                  {group.items.map((item) => (
                    <span className="cv-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="cv-other-skills">{t.otherSkills}</p>
        </section>
    </div>
  )
}

export default CV
