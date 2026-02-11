import IconList from './IconList'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Building innovative digital solutions</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <IconList />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dipesh Bhatta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
