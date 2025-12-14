import { useState, useEffect } from 'react'

const TypingEffect = () => {
  const phrases = ['Software Engineer', 'Public Speaker', 'Matcha Lover 🍵💚', 'Story Teller']
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))
          setTypingSpeed(150)
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 2000)
          return
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1))
          setTypingSpeed(75)
        } else {
          // Move to next phrase
          setIsDeleting(false)
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
          setTypingSpeed(150)
          return
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed])

  return (
    <h5 className="text-light typing-container" style={{ display: 'inline-block', minHeight: '1.5em' }}>
      <span className="typing-text" style={{ display: 'inline-block' }}>{currentText}</span>
      <span className="cursor" style={{ 
        display: 'inline-block',
        marginLeft: '2px',
        animation: 'blink 0.7s infinite',
        fontWeight: 400
      }}>|</span>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </h5>
  )
}

export default TypingEffect