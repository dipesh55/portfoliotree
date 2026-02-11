import { trackExternalLink } from '../utils/analytics'

function LinkList() {
  const links = [
    {
      href: 'mailto:dipeshbhatta4@gmail.com',
      label: 'Contact me',
      ariaLabel: 'Contact via email',
      external: false
    },
    {
      href: 'https://nepseanalysis55.blogspot.com/',
      label: 'Blog',
      ariaLabel: 'Visit blog',
      external: true
    }
  ]

  const handleLinkClick = (link) => {
    if (link.external) {
      trackExternalLink(link.href)
    }
  }

  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="link-list">
          <a 
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            aria-label={link.ariaLabel}
            onClick={() => handleLinkClick(link)}
          >
            <div className="link-list-item dark">
              {link.label}
            </div>
          </a>
        </div>
      ))}
    </>
  )
}

export default LinkList
