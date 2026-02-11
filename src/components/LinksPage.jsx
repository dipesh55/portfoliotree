import { useEffect } from 'react'
import ProfilePicture from './ProfilePicture'
import LinkList from './LinkList'
import IconList from './IconList'
import BackgroundDecoration from './BackgroundDecoration'
import { trackPageView, trackExternalLink } from '../utils/analytics'
import '../styles/LinksPage.css'

function LinksPage() {
  useEffect(() => {
    trackPageView('links')
  }, [])

  return (
    <div className="links-page">
      <BackgroundDecoration />
      <div className="container">
        <ProfilePicture />
        <a
          href="https://www.instagram.com/dipesh.90s/"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-link"
          onClick={() => trackExternalLink('https://www.instagram.com/dipesh.90s/')}
        >
          @Dipesh-Bhatta
        </a>
        
        <LinkList />
        <IconList />
      </div>
    </div>
  )
}

export default LinksPage
