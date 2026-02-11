import { useState } from 'react'
import emailjs from '@emailjs/browser'
import IconList from './IconList'
import { resumeData } from '../data/resumeData'
import '../styles/Contact.css'

function Contact() {
  const { personal } = resumeData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status message when user types
    if (submitStatus) setSubmitStatus('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('Please fill in all fields.')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('Sending message...')
    
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'your_service_id' || 
          templateId === 'your_template_id' || 
          publicKey === 'your_public_key') {
        throw new Error('EmailJS not configured. Please set up environment variables.')
      }
      
      console.log('Sending email with EmailJS...', { serviceId, templateId, publicKey: publicKey.substring(0, 5) + '...' })
      
      // Send email using EmailJS
      // The recipient email must be set in EmailJS template settings OR passed as to_email parameter
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        to_email: personal.email, // Your email address - recipient
        to_name: personal.name || 'Dipesh Bhatta'
      }
      
      console.log('Template params:', { ...templateParams, to_email: '***' })
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      console.log('EmailJS success:', result)
      
      // Success
      setSubmitStatus('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status
      })
      
      // Show specific error message
      let errorMessage = 'Failed to send message. '
      if (error.message && error.message.includes('not configured')) {
        errorMessage += 'EmailJS is not configured. Please check your .env file and restart the server.'
      } else if (error.text) {
        errorMessage += `Error: ${error.text}`
        // Add helpful message for common Gmail errors
        if (error.text.includes('insufficient authentication scopes')) {
          errorMessage += ' Please re-authenticate your Gmail service in EmailJS dashboard. See GMAIL_AUTH_FIX.md for instructions.'
        }
      } else if (error.message) {
        errorMessage += `Error: ${error.message}`
        if (error.message.includes('insufficient authentication scopes')) {
          errorMessage += ' Please re-authenticate your Gmail service in EmailJS dashboard. See GMAIL_AUTH_FIX.md for instructions.'
        }
      } else {
        errorMessage += 'Please try again or email directly.'
      }
      
      setSubmitStatus(errorMessage)
      
      // Fallback to mailto if EmailJS fails
      const subject = encodeURIComponent(`Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      const mailtoLink = `mailto:${personal.email}?subject=${subject}&body=${body}`
      
      // Don't automatically open mailto, let user decide
      // window.location.href = mailtoLink
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">I'd love to hear from you. Send me a message!</p>
        <div className="contact-content">
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && (
              <div className={`submit-status ${submitStatus.includes('Error') ? 'error' : 'success'}`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
