import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/globals'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Menu from './components/Menu'
import Header from './views/Header'
import About from './views/About'

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu theme={theme} toggleTheme={toggleTheme} />
        <Header />
        <About />
      </ThemeProvider>
    </div>
  )
}

export default App
