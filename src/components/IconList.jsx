import { trackExternalLink } from '../utils/analytics'

function IconList({ className = '' }) {
  const socialLinks = [
    {
      href: 'https://github.com/dipesh55',
      icon: '/images/icon-github.png',
      alt: 'GitHub link',
      ariaLabel: 'Visit GitHub profile'
    },
    {
      href: 'https://linkedin.com/in/dipeshbhatta4',
      icon: '/images/linkedin.png',
      alt: 'LinkedIn link',
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      href: 'https://twitter.com/dipeshbhatta55',
      icon: '/images/icon-twitter.png',
      alt: 'Twitter link',
      ariaLabel: 'Visit Twitter profile'
    }
  ]

  const handleLinkClick = (url) => {
    trackExternalLink(url)
  }

  return (
    <div className={`icon-list ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          onClick={() => handleLinkClick(social.href)}
        >
          <img
            src={social.icon}
            alt={social.alt}
            className="icon-list-img"
          />
        </a>
      ))}
    </div>
  )
}

export default IconList
