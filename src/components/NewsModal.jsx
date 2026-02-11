import { useEffect, useState } from 'react'
import '../styles/NewsModal.css'

function NewsModal({ isOpen, onClose }) {
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        if (selectedArticle) {
          setSelectedArticle(null)
        } else {
          onClose()
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, selectedArticle])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      if (selectedArticle) {
        setSelectedArticle(null)
      } else {
        onClose()
      }
    }
  }

  const newsArticles = [
    {
      id: 1,
      date: 'December 29, 2024',
      author: 'Dipesh Bhatta',
      title: 'Portfolio Website Launched',
      image: null,
      content: `Excited to announce the launch of my new portfolio website! This site showcases my projects, skills, and experience as a software engineer. The website features a modern, responsive design built with React.js and includes sections for my professional background, technical skills, and recent projects.`,
      upvotes: 24,
      comments: 5
    },
    {
      id: 2,
      date: 'November 15, 2024',
      author: 'Dipesh Bhatta',
      title: 'New Project: BPM Solutions',
      image: null,
      content: `Successfully delivered a major BPM solution that improved process efficiency by 45% for our client, resulting in significant cost savings. The solution was built using Nintex and K2 platforms, implementing automated workflows that reduced manual processing time and eliminated errors.`,
      upvotes: 18,
      comments: 3
    },
    {
      id: 3,
      date: 'October 10, 2024',
      author: 'Dipesh Bhatta',
      title: 'Team Leadership Achievement',
      image: null,
      content: `Led a team of 5 developers in deploying a large-scale Nintex & K2 application, achieving a 50% reduction in manual tasks. The project involved complex business process automation for a financial services firm, requiring close collaboration with stakeholders and meticulous attention to detail.`,
      upvotes: 32,
      comments: 8
    },
    {
      id: 4,
      date: 'September 5, 2024',
      author: 'Dipesh Bhatta',
      title: 'Training Program Success',
      image: null,
      content: `Conducted customized Nintex training programs for over 100 users across multiple organizations with a 90% satisfaction rate. The training covered advanced workflow design, form development, and best practices for BPM implementation.`,
      upvotes: 15,
      comments: 2
    }
  ]

  if (selectedArticle) {
    const article = newsArticles.find(a => a.id === selectedArticle)
    return (
      <div className="news-modal-overlay" onClick={handleBackdropClick}>
        <div className="news-modal-content news-article-view">
          <button 
            className="news-modal-close" 
            onClick={() => setSelectedArticle(null)}
            aria-label="Back to news list"
          >
            ←
          </button>
          <div className="news-article-header">
            <div className="news-article-meta">
              <div className="news-author-info">
                <div className="news-author-avatar">DB</div>
                <div className="news-author-details">
                  <div className="news-author-name">{article.author}</div>
                  <div className="news-article-date">{article.date}</div>
                </div>
              </div>
            </div>
            <h1 className="news-article-title">{article.title}</h1>
          </div>
          <div className="news-article-body">
            <div className="news-article-content">
              <p>{article.content}</p>
            </div>
            <div className="news-article-stats">
              <button className="news-stat-btn">{article.upvotes} Upvotes</button>
              <span>{article.comments} Comments</span>
            </div>
            <div className="news-article-actions">
              <button className="news-action-btn upvote" aria-label="Upvote">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115z" fill="currentColor"/>
                </svg>
              </button>
              <button className="news-action-btn comment" aria-label="Comment">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8.084 3.217a35.447 35.447 0 017.05-.078l.782.078.279.031c1.089.121 1.885.372 2.606.828a4.516 4.516 0 011.664 1.86c.336.69.5 1.423.53 2.361l.005.321v3.975a4.493 4.493 0 01-3.545 4.392l-.207.04-2.089.346-2.86 2.992-.147.135c-.986.789-2.399.623-3.205-.324-.532-.625-.616-1.34-.51-2.29l.029-.224.038-.254.033-.187-1.332-.189a5.011 5.011 0 01-1.677-.55l-.253-.146-.243-.16a4.777 4.777 0 01-1.491-1.721 4.935 4.935 0 01-.532-1.972l-.009-.3V8.618c0-1.096.162-1.915.535-2.683.375-.77.94-1.4 1.664-1.859.649-.41 1.359-.655 2.288-.788l.318-.04.28-.031z" fill="currentColor"/>
                </svg>
                <span>Comment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="news-modal-overlay" onClick={handleBackdropClick}>
      <div className="news-modal-content">
        <button 
          className="news-modal-close" 
          onClick={onClose}
          aria-label="Close news modal"
        >
          ×
        </button>
        <div className="news-modal-header">
          <h2>News & Updates</h2>
        </div>
        <div className="news-modal-body">
          <div className="news-grid">
            {newsArticles.map((article) => (
              <article 
                key={article.id} 
                className="news-item"
                onClick={() => setSelectedArticle(article.id)}
              >
                <div className="news-item-header">
                  <div className="news-author-avatar-small">DB</div>
                  <div className="news-item-meta">
                    <div className="news-author-name-small">{article.author}</div>
                    <div className="news-date">{article.date}</div>
                  </div>
                </div>
                <h3 className="news-item-title">{article.title}</h3>
                <p className="news-item-excerpt">{article.content.substring(0, 120)}...</p>
                <div className="news-item-footer">
                  <span className="news-item-stat">{article.upvotes} Upvotes</span>
                  <span className="news-item-stat">{article.comments} Comments</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsModal
