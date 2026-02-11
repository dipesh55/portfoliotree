function TestPage() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      color: 'white',
      minHeight: '100vh',
      background: 'radial-gradient(circle, rgb(13, 89, 99), white)'
    }}>
      <h1>Portfolio Website is Working!</h1>
      <p>If you see this, React is rendering correctly.</p>
      <a href="/" style={{ color: 'white', textDecoration: 'underline' }}>
        Go to Portfolio
      </a>
    </div>
  )
}

export default TestPage
