/**
 * Analytics utility functions
 */

/**
 * Track external link clicks
 */
export function trackExternalLink(url) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'External Link',
      event_label: url,
      transport_type: 'beacon'
    })
  }
  console.log('External link clicked:', url)
}

/**
 * Track page views
 */
export function trackPageView(pageName) {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'UA-177429414-1', {
      page_path: `/${pageName}`
    })
  }
}
