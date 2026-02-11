import { useFacebookSDK } from '../hooks/useFacebookSDK'

function FacebookEmbed() {
  useFacebookSDK()

  return (
    <div className="container">
      <div 
        className="fb-page" 
        data-href="https://www.facebook.com/dipesh.bhatta.18/" 
        data-width="360" 
        data-small-header="false" 
        data-adapt-container-width="true" 
        data-hide-cover="false" 
        data-show-facepile="true"
      >
        <div className="fb-xfbml-parse-ignore">
          <blockquote cite="https://www.facebook.com/dipesh.bhatta.18/">
            <a href="https://www.facebook.com/dipesh.bhatta.18/">Dipesh Bhatta</a>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default FacebookEmbed
