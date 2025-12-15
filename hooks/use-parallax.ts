import { useEffect, useRef, useState } from 'react'

export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top
        const windowHeight = window.innerHeight
        
        // Only apply parallax when element is in view
        if (elementTop < windowHeight && elementTop + rect.height > 0) {
          setOffset(elementTop * speed)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}
