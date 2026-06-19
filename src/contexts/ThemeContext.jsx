import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export const themes = [
  { key: 'dark',       label: 'Dark'  },
  { key: 'light',      label: 'Light' },
  { key: 'soft-light', label: 'Soft'  },
]

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  )

  const setTheme = (t) => {
    setThemeState(t)
    localStorage.setItem('portfolio-theme', t)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
