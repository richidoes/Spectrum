import { useState, useEffect } from 'react'

export default function useSetTheme() {
  const appTheme = localStorage.getItem('spectrumAppTheme')
  const [theme, setTheme] = useState(appTheme)

  const handleThemeChange =  () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('spectrumAppTheme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('spectrumAppTheme', 'light')
    }
  }, [theme])

  return {
    theme, handleThemeChange
  }

}