function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          © 2026 Riccardo Agostini —{' '}
          {language === 'it' ? 'Realizzato con React & Vite' : 'Built with React & Vite'}
        </p>
      </div>
    </footer>
  )
}

export default Footer
