import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import GlobalStyle from './styles/globals'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Menu from './components/Menu'
import Header from './views/Header'
import About from './views/About'
import Skills from './views/Skills'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
`

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
        <CardWrapper>
          <About />
          <Skills />
        </CardWrapper>
      </ThemeProvider>
    </div>
  )
}

export default App
