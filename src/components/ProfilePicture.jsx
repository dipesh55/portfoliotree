import { trackExternalLink } from '../utils/analytics'

function ProfilePicture() {
  const handleClick = () => {
    trackExternalLink('https://www.instagram.com/dipesh.90s/')
  }

  return (
    <div className="circle-shape">
      <a
        href="https://www.instagram.com/dipesh.90s/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram profile"
        onClick={handleClick}
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%',
          borderRadius: '50%',
          overflow: 'hidden'
        }}
      >
        <img 
          src="/images/img.jpg" 
          alt="Dipesh Bhatta Profile Picture" 
          className="profile-pic" 
        />
      </a>
    </div>
  )
}

export default ProfilePicture
