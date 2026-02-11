import { useEffect } from 'react'
import FacebookEmbed from './FacebookEmbed'
import { trackPageView } from '../utils/analytics'
import '../styles/BlogPage.css'

function BlogPage() {
  useEffect(() => {
    trackPageView('blog')
  }, [])

  return (
    <div className="blog-page">
      <div className="facebook-box">
        <FacebookEmbed />
      </div>
    </div>
  )
}

export default BlogPage
