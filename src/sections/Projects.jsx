const appStoreUrl = 'https://apps.apple.com/app/id6792808041'

const copy = {
  it: {
    featured: 'Progetto in evidenza',
    available: 'Disponibile su iOS',
    tagline: 'Pianifica. Registra. Comprendi.',
    description:
      'Un’app mobile che trasforma viaggi, progetti e vita quotidiana in periodi di spesa chiari. L’utente può pianificare un budget, registrare ogni movimento e capire subito dove stanno andando i suoi soldi.',
    features: [
      'Periodi attivi e programmati',
      'Budget e spese per categoria',
      'Analisi e storico dei periodi',
      'Esperienza localizzata IT / EN',
    ],
    appStoreSmall: 'Disponibile su',
    appStoreLabel: 'Scarica ExpenseMate dall’App Store',
    android: 'Android',
    comingSoon: 'In arrivo',
    androidLabel: 'Versione Android in arrivo',
    technologiesLabel: 'Tecnologie utilizzate',
    previewLabel: 'Anteprima dell’app ExpenseMate',
    imageAlt: {
      home: 'Dashboard principale di ExpenseMate con budget e spese per categoria',
      planning: 'Schermata di pianificazione dei periodi in ExpenseMate',
      expense: 'Inserimento di una nuova spesa e selezione della categoria',
      analytics: 'Ricerca e analisi dei periodi conclusi in ExpenseMate',
    },
    productEyebrow: 'Dentro il prodotto',
    productTitle: 'Dalla pianificazione all’analisi',
    productDescription:
      'Un flusso pensato per essere rapido quando si registra una spesa e completo quando arriva il momento di comprenderla.',
    screens: [
      {
        number: '01',
        title: 'Pianifica',
        description: 'Organizza in anticipo viaggi, progetti e spese ricorrenti.',
        image: 'planning',
      },
      {
        number: '02',
        title: 'Registra',
        description: 'Aggiungi importo, categoria e descrizione in pochi secondi.',
        image: 'expense',
      },
      {
        number: '03',
        title: 'Analizza',
        description: 'Filtra i periodi e osserva l’andamento delle tue spese.',
        image: 'analytics',
      },
    ],
    roadmapEyebrow: 'Evoluzione del prodotto',
    roadmapTitle: 'Una roadmap concreta',
    roadmapDescription:
      'La prima versione è pubblicata. Le prossime portano l’interazione dalla grafica alla conversazione, fino alla voce.',
    roadmap: [
      {
        version: 'V1',
        status: 'Disponibile',
        title: 'ExpenseMate',
        description:
          'Gestione completa di periodi, budget, categorie e spese, con analisi visuali e pianificazione.',
        state: 'live',
      },
      {
        version: 'V2',
        status: 'In sviluppo',
        title: 'AI Assistant',
        description:
          'Un assistente conversazionale per creare periodi, registrare spese e ottenere analisi con richieste naturali.',
        state: 'building',
      },
      {
        version: 'V3',
        status: 'Roadmap',
        title: 'Voice AI',
        description:
          'La stessa esperienza dell’assistente, estesa alla voce per gestire le spese senza interrompere ciò che stai facendo.',
        state: 'next',
      },
    ],
  },
  en: {
    featured: 'Featured project',
    available: 'Available on iOS',
    tagline: 'Plan. Track. Understand.',
    description:
      'A mobile app that turns trips, projects and everyday life into clear spending periods. Users can plan a budget, track every expense and immediately understand where their money is going.',
    features: [
      'Active and scheduled periods',
      'Budgets and category spending',
      'Analytics and period history',
      'Localized Italian / English UX',
    ],
    appStoreSmall: 'Download on the',
    appStoreLabel: 'Download ExpenseMate on the App Store',
    android: 'Android',
    comingSoon: 'Coming soon',
    androidLabel: 'Android version coming soon',
    technologiesLabel: 'Technologies used',
    previewLabel: 'ExpenseMate app preview',
    imageAlt: {
      home: 'ExpenseMate dashboard showing budget and spending by category',
      planning: 'ExpenseMate scheduled-period planning screen',
      expense: 'Adding a new expense and selecting its category',
      analytics: 'Searching and reviewing closed periods in ExpenseMate',
    },
    productEyebrow: 'Inside the product',
    productTitle: 'From planning to insight',
    productDescription:
      'A flow designed to stay fast while recording an expense and become thorough when it is time to understand it.',
    screens: [
      {
        number: '01',
        title: 'Plan',
        description: 'Organize trips, projects and recurring expenses in advance.',
        image: 'planning',
      },
      {
        number: '02',
        title: 'Track',
        description: 'Add an amount, category and description in seconds.',
        image: 'expense',
      },
      {
        number: '03',
        title: 'Analyze',
        description: 'Filter completed periods and understand spending patterns.',
        image: 'analytics',
      },
    ],
    roadmapEyebrow: 'Product evolution',
    roadmapTitle: 'A concrete roadmap',
    roadmapDescription:
      'The first version is live. The next releases move interaction from visual controls to conversation and, finally, voice.',
    roadmap: [
      {
        version: 'V1',
        status: 'Available',
        title: 'ExpenseMate',
        description:
          'Complete management of periods, budgets, categories and expenses, with visual analytics and planning.',
        state: 'live',
      },
      {
        version: 'V2',
        status: 'In development',
        title: 'AI Assistant',
        description:
          'A conversational assistant for creating periods, recording expenses and requesting analytics in natural language.',
        state: 'building',
      },
      {
        version: 'V3',
        status: 'Roadmap',
        title: 'Voice AI',
        description:
          'The same assistant experience extended to voice, making expense management possible without interrupting the task at hand.',
        state: 'next',
      },
    ],
  },
}

const screenshotPaths = {
  it: {
    home: '/expensemate/home.jpg',
    expense: '/expensemate/add-expense.jpg',
    analytics: '/expensemate/analytics.jpg',
    planning: '/expensemate/planning.jpg',
  },
  en: {
    home: '/expensemate/home-en.jpg',
    expense: '/expensemate/add-expense-en.jpg',
    analytics: '/expensemate/analytics-en.jpg',
    planning: '/expensemate/planning-en.jpg',
  },
}

function Projects({ language }) {
  const t = copy[language]
  const screenshots = screenshotPaths[language]

  return (
    <div id="projects" className="projects-layout">
      <section className="project-hero">
        <div className="project-copy">
          <div className="project-kicker-row">
            <span className="project-kicker">{t.featured}</span>
            <span className="project-live-badge">
              <span className="project-live-dot" aria-hidden="true" />
              {t.available}
            </span>
          </div>

          <div className="project-title-row">
            <img
              className="project-app-icon"
              src="/expensemate/icon.png"
              alt="ExpenseMate app icon"
              width="84"
              height="84"
            />
            <div>
              <h3>ExpenseMate</h3>
              <p className="project-subtitle">{t.tagline}</p>
            </div>
          </div>

          <p className="project-description">{t.description}</p>

          <div className="project-feature-grid">
            {t.features.map((feature) => (
              <div className="project-feature" key={feature}>
                <span aria-hidden="true">✓</span>
                {feature}
              </div>
            ))}
          </div>

          <div className="project-actions">
            <a
              className="store-button store-button-primary"
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t.appStoreLabel}
            >
              <span className="store-button-small">{t.appStoreSmall}</span>
              <strong>App Store</strong>
            </a>

            <div className="store-button store-button-disabled" aria-label={t.androidLabel}>
              <span className="store-button-small">{t.android}</span>
              <strong>{t.comingSoon}</strong>
            </div>
          </div>

          <div className="project-tech-row" aria-label={t.technologiesLabel}>
            {['React Native', 'Expo', 'Node.js', 'AWS', 'App Store'].map(
              (technology) => (
                <span key={technology}>{technology}</span>
              ),
            )}
          </div>
        </div>

        <div className="project-device-stage" aria-label={t.previewLabel}>
          <div className="project-device project-device-main">
            <img src={screenshots.home} alt={t.imageAlt.home} loading="eager" />
          </div>
          <div className="project-device project-device-side" aria-hidden="true">
            <img src={screenshots.expense} alt="" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="project-showcase" aria-labelledby="showcase-title">
        <div className="project-section-heading">
          <div>
            <p className="project-eyebrow">{t.productEyebrow}</p>
            <h3 id="showcase-title">{t.productTitle}</h3>
          </div>
          <p>{t.productDescription}</p>
        </div>

        <div className="project-screens-grid">
          {t.screens.map((screen, index) => (
            <article
              className={
                index === 1
                  ? 'project-screen-card project-screen-card-featured'
                  : 'project-screen-card'
              }
              key={screen.number}
            >
              <div className="project-screen-frame">
                <img
                  src={screenshots[screen.image]}
                  alt={t.imageAlt[screen.image]}
                  loading="lazy"
                />
              </div>
              <div>
                <span>{screen.number}</span>
                <h4>{screen.title}</h4>
                <p>{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-roadmap" aria-labelledby="roadmap-title">
        <div className="project-section-heading">
          <div>
            <p className="project-eyebrow">{t.roadmapEyebrow}</p>
            <h3 id="roadmap-title">{t.roadmapTitle}</h3>
          </div>
          <p>{t.roadmapDescription}</p>
        </div>

        <div className="roadmap-grid">
          {t.roadmap.map((item) => (
            <article className={`roadmap-card roadmap-card-${item.state}`} key={item.version}>
              <div className="roadmap-topline">
                <span className="roadmap-version">{item.version}</span>
                <span className="roadmap-status">{item.status}</span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
