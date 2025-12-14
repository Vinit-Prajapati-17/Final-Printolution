import { useEffect, useRef, useState } from 'react'
import '../styles/smooth-cursor.css'

const SmoothCursor = () => {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const animationRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0
    let isInitialized = false

    const updateCursor = () => {
      // Initialize positions on first run
      if (!isInitialized) {
        cursorX = mouseX
        cursorY = mouseY
        dotX = mouseX
        dotY = mouseY
        isInitialized = true
      }

      // Smooth cursor movement with easing
      const ringEasing = 0.08
      const dotEasing = 0.12
      
      cursorX += (mouseX - cursorX) * ringEasing
      cursorY += (mouseY - cursorY) * ringEasing
      
      dotX += (mouseX - dotX) * dotEasing
      dotY += (mouseY - dotY) * dotEasing
      
      // Use transform3d for better performance and prevent glitches
      cursor.style.transform = `translate3d(${cursorX - 15}px, ${cursorY - 15}px, 0)`
      dot.style.transform = `translate3d(${dotX - 5}px, ${dotY - 5}px, 0)`
      
      animationRef.current = requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      
      // Check if hovering over interactive elements
      if (target.matches('a, button, [role="button"], input, textarea, select, .clickable')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      
      // Only set to false if we're actually leaving an interactive element
      if (!target.matches('a, button, [role="button"], input, textarea, select, .clickable')) {
        setIsHovering(false)
      }
    }

    // Initialize cursor position to current mouse position
    const initializePosition = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursorX = mouseX
      cursorY = mouseY
      dotX = mouseX
      dotY = mouseY
    }

    // Get initial mouse position
    document.addEventListener('mousemove', initializePosition, { once: true })
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(updateCursor)

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      // Clean up animation frame
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`cursor-ring ${isHovering ? 'cursor-hover' : ''}`}
      />
      <div 
        ref={dotRef} 
        className="cursor-dot"
      />
    </>
  )
}

export default SmoothCursor