import { styles } from './styles'
import { ThemeContext } from './context/ThemeContext'
import useSetTheme from './hooks/useSetTheme'

function App () {
  const { theme } = useSetTheme()

  return (
    <ThemeContext.Provider value={theme}>
      <main className={`${styles.page} relative bg-slate-100 dark:bg-slate-800`}>
      </main>
    </ThemeContext.Provider>
  )
}

export default App
