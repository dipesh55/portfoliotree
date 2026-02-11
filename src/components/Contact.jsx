import IconList from './IconList'
import { resumeData } from '../data/resumeData'
import '../styles/Contact.css'

function Contact() {
  const { personal } = resumeData

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Reach out via email or social links.</p>
        <div className="contact-content contact-content-info-only">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <a href={`tel:${personal.phone}`}>{personal.phone}</a>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>{personal.location}</p>
              {personal.permanentAddress && (
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
                  Permanent: {personal.permanentAddress}
                </p>
              )}
            </div>
            <div className="contact-item">
              <h3>Social Media</h3>
              <IconList />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
