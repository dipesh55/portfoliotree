import { useEffect } from 'react'

/**
 * Custom hook to load and initialize Facebook SDK
 */
export function useFacebookSDK() {
  useEffect(() => {
    // Check if SDK is already loaded
    if (window.FB) {
      window.FB.XFBML.parse()
      return
    }

    // Create fb-root if it doesn't exist
    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div')
      fbRoot.id = 'fb-root'
      document.body.appendChild(fbRoot)
    }

    // Load Facebook SDK script
    const script = document.createElement('script')
    script.id = 'facebook-jssdk'
    script.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5'
    script.async = true
    script.defer = true
    
    script.onload = () => {
      if (window.FB) {
        window.FB.XFBML.parse()
      }
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script on unmount
      const existingScript = document.getElementById('facebook-jssdk')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])
}
