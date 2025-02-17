import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "./utils/Themes"
import NavBar from "./components/NavBar"
import HeroSection from "./components/sections/HeroSection"
import { BrowserRouter } from "react-router-dom"
import Skills from "./components/sections/Skills"
import Education from "./components/sections/Education"
import StyledStarsCanvas from "./components/canvas/Stars"
import Projects from "./components/sections/Project"

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {


  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
        <Body>
        <StyledStarsCanvas/>
          <div>
            <HeroSection />
            <Wrapper>
              <Skills />
            </Wrapper>
            <Projects/>
            <Wrapper>
            <Education />
            </Wrapper>
          </div>
        </Body>
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
