import styled, { ThemeProvider } from "styled-components"
import {darkTheme} from "./utils/Themes"
import NavBar from "./components/NavBar"
import HeroSection from "./components/sections/HeroSection"
import { BrowserRouter } from "react-router-dom"
import Skills from "./components/sections/Skills"
import Education from "./components/sections/Education"

const Body = styled.div`
  background-color: ${({theme})=>theme.bg};
  color: ${({theme})=>theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`

function App() {
  

  return (
   <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
    <NavBar/>
    <Body>
      <HeroSection/>
      <Skills/>
      <Education/>
    </Body>
    </BrowserRouter>
    
   </ThemeProvider>
  )
}

export default App
