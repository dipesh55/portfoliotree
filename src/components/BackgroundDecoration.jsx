import { useEffect, useRef } from 'react'
import anime from 'animejs'

function BackgroundDecoration() {
  const svgRef = useRef(null)

  useEffect(() => {
    if (svgRef.current) {
      const polygon = svgRef.current.querySelector('polygon')
      const feTurbulence = svgRef.current.querySelector('feTurbulence')
      const feDisplacementMap = svgRef.current.querySelector('feDisplacementMap')

      if (polygon && feTurbulence && feDisplacementMap) {
        anime({
          targets: [polygon, feTurbulence, feDisplacementMap],
          baseFrequency: [0, 0.02],
          scale: [1, 1.1],
          loop: true,
          duration: 5000,
          direction: 'alternate',
          easing: 'easeInOutExpo'
        })
      }
    }
  }, [])

  return (
    <div className="bg-decoration">
      <svg 
        ref={svgRef}
        className="bg-decoration__svg" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="turbulence" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence baseFrequency="0.02" numOctaves="3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" />
          </filter>
        </defs>
        <polygon 
          points="0,0 1200,0 1200,800 0,800" 
          fill="rgba(108, 92, 231, 0.1)" 
          filter="url(#turbulence)" 
        />
      </svg>
    </div>
  )
}

export default BackgroundDecoration
