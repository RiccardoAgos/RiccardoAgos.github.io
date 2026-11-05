const appStoreUrl = 'https://apps.apple.com/app/id6792808041'
const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.riccardoagostini.expensemate'

const copy = {
  it: {
    featured: 'Progetto in evidenza',
    available: 'Disponibile su iOS e Android',
    tagline: 'Scrivi. Parla. Gestisci.',
    description:
      'Un’app mobile per organizzare viaggi, progetti e spese quotidiane in periodi con un budget dedicato. La versione 2 aggiunge un assistente AI: puoi scrivere o parlare per gestire i dati, analizzare le spese e confrontare periodi, con card interattive a supporto delle scelte.',
    features: [
      'Periodi attivi e programmati',
      'Budget e spese per categoria',
      'Analisi e storico dei periodi',
      'Assistente AI in chat e a voce, in IT / EN',
    ],
    appStoreSmall: 'Disponibile su',
    appStoreLabel: 'Scarica ExpenseMate dall’App Store',
    playStoreSmall: 'Disponibile su',
    androidLabel: 'Scarica ExpenseMate da Google Play',
    technologiesLabel: 'Tecnologie utilizzate',
    previewLabel: 'Anteprima dell’app ExpenseMate',
    imageAlt: {
      home: 'Dashboard principale di ExpenseMate con budget e spese per categoria',
      planning: 'Schermata di pianificazione dei periodi in ExpenseMate',
      expense: 'Inserimento di una nuova spesa e selezione della categoria',
      analytics: 'Ricerca e analisi dei periodi conclusi in ExpenseMate',
    },
    productEyebrow: 'Dentro il prodotto',
    productTitle: 'Ogni spesa trova il suo posto.',
    productDescription:
      'Prima decidi cosa vuoi organizzare. Poi registri le spese e ritrovi i dettagli quando ti servono. Periodi, budget e analisi restano collegati in un’unica esperienza.',
    screens: [
      {
        number: '01',
        title: 'Pianifica',
        description: 'Un viaggio a dicembre, un progetto a gennaio: prepara date e budget e ritrova i periodi futuri in una timeline dedicata.',
        image: 'planning',
      },
      {
        number: '02',
        title: 'Registra',
        description: 'Seleziona il periodo, inserisci l’importo e scegli la categoria. Anche la spesa del supermercato entra nel budget in pochi tocchi.',
        image: 'expense',
      },
      {
        number: '03',
        title: 'Analizza',
        description: 'Filtra per date, categoria o periodo. Riapri i periodi conclusi e consulta le spese che compongono il totale.',
        image: 'analytics',
      },
    ],
    assistantEyebrow: 'ExpenseMate 2',
    assistantTitle: 'Dalle parole alle operazioni',
    assistantDescription:
      'ExpenseMate 2 porta la gestione delle spese nella conversazione. Scrivi una richiesta o dilla a voce: l’assistente lavora sui tuoi periodi, ti chiede solo le informazioni mancanti e ti restituisce risultati chiari. Un’esperienza disponibile su iOS e Android, in italiano e inglese.',
    assistantVisuals: [
      { image: 'assistant-chat', title: 'Un messaggio. Operazioni concrete.', description: 'Crea un periodo con date e budget, poi aggiungi la spesa del supermercato. L’assistente esegue la richiesta e conferma quando ha concluso.', alt: 'Chat ExpenseMate: creazione del periodo Milano e aggiunta di una spesa, con conferme di operazione completata' },
      { image: 'assistant-voice', title: 'Parla. Ascolta. Tieni tutto sotto controllo.', description: 'Chiedi l’analisi di Milano: ascolti il totale e le categorie in cui hai speso di più e di meno. La card rimane visibile per consultare i dettagli.', alt: 'Assistente vocale ExpenseMate con riepilogo di Milano, totale speso e categorie' },
      { image: 'assistant-intro', title: 'Sai subito da dove iniziare.', description: 'Una guida compatta mostra cosa puoi chiedere. Gestione di periodi, spese e note, analisi e confronti: scegli tu se scrivere o usare la voce.', alt: 'Guida iniziale dell’assistente con esempi di richieste, analisi e scelte guidate' },
    ],
    engineeringTitle: 'Il lavoro dietro l’esperienza',
    engineeringDescription: 'Ho integrato l’AI nel backend dell’app: gli agenti interpretano le richieste, mentre workflow e controlli applicativi governano l’esecuzione sui dati dell’utente.',
    voicePipeline: ['Voce', 'Trascrizione', 'Agenti e workflow', 'Risposta vocale e card'],
    pipelineLabel: 'Il percorso di una richiesta vocale',
    assistantCapabilities: [
      {
        title: 'Scrivi o parla',
        description:
          'Crea periodi, aggiungi spese e note oppure chiedi un’analisi. In modalità vocale ricevi una risposta parlata e card con i dati utili.',
      },
      {
        title: 'Più richieste, un unico flusso',
        description:
          'Un orchestratore coordina agenti specializzati e un piano di esecuzione. Se manca un’informazione, l’assistente la chiede e poi riprende le operazioni in coda.',
      },
      {
        title: 'Scelte e conferme guidate',
        description:
          'Card interattive permettono di risolvere nomi ambigui, inserire dati mancanti e confermare modifiche o eliminazioni prima dell’esecuzione.',
      },
      {
        title: 'Voce integrata nel prodotto',
        description:
          'Trascrizione audio, assistente esistente e sintesi vocale compongono un flusso unico. Quote mensili e conteggio delle operazioni completate gestiscono l’utilizzo tra i piani Free e Premium.',
      },
    ],
  },
  en: {
    featured: 'Featured project',
    available: 'Available on iOS and Android',
    tagline: 'Type. Speak. Manage.',
    description:
      'A mobile app for organizing trips, projects and everyday expenses into periods with a dedicated budget. Version 2 adds an AI assistant: type or speak to manage data, analyze spending and compare periods, with interactive cards to guide your choices.',
    features: [
      'Active and scheduled periods',
      'Budgets and category spending',
      'Analytics and period history',
      'AI chat and voice assistant in Italian / English',
    ],
    appStoreSmall: 'Download on the',
    appStoreLabel: 'Download ExpenseMate on the App Store',
    playStoreSmall: 'Get it on',
    androidLabel: 'Download ExpenseMate on Google Play',
    technologiesLabel: 'Technologies used',
    previewLabel: 'ExpenseMate app preview',
    imageAlt: {
      home: 'ExpenseMate dashboard showing budget and spending by category',
      planning: 'ExpenseMate scheduled-period planning screen',
      expense: 'Adding a new expense and selecting its category',
      analytics: 'Searching and reviewing closed periods in ExpenseMate',
    },
    productEyebrow: 'Inside the product',
    productTitle: 'A place for every expense.',
    productDescription:
      'Start with what you want to organize. Track your expenses, then find the details when you need them. Periods, budgets and analysis stay connected in one experience.',
    screens: [
      {
        number: '01',
        title: 'Plan',
        description: 'A trip in December, a project in January: set dates and budgets and find your future periods in a dedicated timeline.',
        image: 'planning',
      },
      {
        number: '02',
        title: 'Track',
        description: 'Choose a period, enter the amount and pick a category. Even your grocery shopping becomes part of the budget in a few taps.',
        image: 'expense',
      },
      {
        number: '03',
        title: 'Analyze',
        description: 'Filter by date, category or period. Revisit closed periods and review the expenses behind each total.',
        image: 'analytics',
      },
    ],
    assistantEyebrow: 'ExpenseMate 2',
    assistantTitle: 'From words to actions',
    assistantDescription:
      'ExpenseMate 2 brings expense management into the conversation. Type a request or say it aloud: the assistant works with your periods, asks only for missing details and returns clear results. Available on iOS and Android, in Italian and English.',
    assistantVisuals: [
      { image: 'assistant-chat', title: 'One message. Real actions.', description: 'Create a period with dates and a budget, then add your grocery expense. The assistant handles the request and confirms when it is complete.', alt: 'ExpenseMate chat creating the Milano period and adding an expense, with operation-completed confirmations' },
      { image: 'assistant-voice', title: 'Speak. Listen. Stay in control.', description: 'Ask for a Milano summary: hear the total and the highest and lowest spending categories. The card stays visible so you can check the details.', alt: 'ExpenseMate voice assistant showing a Milano spending summary with total and categories' },
      { image: 'assistant-intro', title: 'Know where to start.', description: 'A compact guide shows what you can ask. Manage periods, expenses and notes, explore analyses and comparisons: choose text or voice.', alt: 'Assistant welcome guide with example requests, analysis and guided choices' },
    ],
    engineeringTitle: 'The engineering behind the experience',
    engineeringDescription: 'I integrated AI into the app’s backend: agents interpret requests, while application workflows and checks govern execution on the user’s data.',
    voicePipeline: ['Voice', 'Transcription', 'Agents and workflows', 'Speech and cards'],
    pipelineLabel: 'How a voice request is handled',
    assistantCapabilities: [
      {
        title: 'Type or speak',
        description:
          'Create periods, add expenses and notes, or request an analysis. Voice mode responds aloud and displays cards with the relevant data.',
      },
      {
        title: 'Multiple requests, one flow',
        description:
          'An orchestrator coordinates specialized agents and an execution plan. When information is missing, the assistant asks for it and then resumes the queued operations.',
      },
      {
        title: 'Guided choices and confirmations',
        description:
          'Interactive cards help resolve ambiguous names, collect missing details and confirm changes or deletions before execution.',
      },
      {
        title: 'Voice built into the product',
        description:
          'Audio transcription, the existing assistant and speech synthesis form a single workflow. Monthly quotas and completed-operation counting manage usage across Free and Premium plans.',
      },
    ],
  },
}

const screenshotPaths = {
  it: {
    home: '/expensemate/v2/it/home.jpg',
    expense: '/expensemate/v2/it/add-expense.jpg',
    analytics: '/expensemate/v2/it/analytics.jpg',
    planning: '/expensemate/v2/it/planning.jpg',
    'assistant-chat': '/expensemate/v2/it/assistant-chat.jpg',
    'assistant-voice': '/expensemate/v2/it/assistant-voice.jpg',
    'assistant-intro': '/expensemate/v2/it/assistant-intro.jpg',
  },
  en: {
    home: '/expensemate/v2/en/home.jpg',
    expense: '/expensemate/v2/en/add-expense.jpg',
    analytics: '/expensemate/v2/en/analytics.jpg',
    planning: '/expensemate/v2/en/planning.jpg',
    'assistant-chat': '/expensemate/v2/en/assistant-chat.jpg',
    'assistant-voice': '/expensemate/v2/en/assistant-voice.jpg',
    'assistant-intro': '/expensemate/v2/en/assistant-intro.jpg',
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
              className="store-download-badge"
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t.appStoreLabel}
            >
              <img src={`/store-badges/app-store-${language}.svg`} alt={t.appStoreLabel} width="180" height="60" />
            </a>

            <a className="store-download-badge" href={googlePlayUrl}
              target="_blank" rel="noreferrer" aria-label={t.androidLabel}>
              <img src={`/store-badges/google-play-${language}.png`} alt={t.androidLabel} width="206" height="80" />
            </a>
          </div>

          <div className="project-tech-row" aria-label={t.technologiesLabel}>
            {['React Native', 'Expo', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'OpenAI API'].map(
              (technology) => (
                <span key={technology}>{technology}</span>
              ),
            )}
          </div>
        </div>

        <div className="project-device-stage" aria-label={t.previewLabel}>
          <img className="project-hero-art" src={screenshots.home}
            alt={t.imageAlt.home} loading="eager" width="1206" height="2622" />
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
          {t.screens.map((screen) => (
            <article
              className="project-screen-card"
              key={screen.number}
            >
              <div className="project-screen-frame">
                <img
                  src={screenshots[screen.image]}
                  alt={t.imageAlt[screen.image]}
                  loading="lazy"
                  width="1206"
                  height="2622"
                />
              </div>
              <div>
                <h4>{screen.title}</h4>
                <p>{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-assistant" aria-labelledby="assistant-title">
        <div className="project-section-heading">
          <div>
            <p className="project-eyebrow">{t.assistantEyebrow}</p>
            <h3 id="assistant-title">{t.assistantTitle}</h3>
          </div>
          <p>{t.assistantDescription}</p>
        </div>

        <div className="assistant-visuals-grid">
          {t.assistantVisuals.map((item) => (
            <figure className="assistant-visual" key={item.image}>
              <img src={screenshots[item.image]} alt={item.alt} loading="lazy" width="1206" height="2622" />
              <figcaption>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="assistant-engineering">
          <h4>{t.engineeringTitle}</h4>
          <p>{t.engineeringDescription}</p>
          <ol className="assistant-pipeline" aria-label={t.pipelineLabel}>
            {t.voicePipeline.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>

        <div className="assistant-capabilities-grid">
          {t.assistantCapabilities.map((item) => (
            <article className="assistant-capability-card" key={item.title}>
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
