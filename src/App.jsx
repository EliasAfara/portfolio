import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Email from "./components/Email";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import Jobs from "./components/jobs/Jobs";

// import ScrollUp from "./components/scrollup/ScrollUp";

import Education from "./components/education/Education";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/styles";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <Socials />
        <Email />

        <StyledMainContainer className='fillHeight'>
          <Home />
          <About />
          {/* <Experience />*/}
          <Education />
          <Skills />
          {/* <Projects />
        <Contact /> */}
          <Jobs />
        </StyledMainContainer>

        <Footer />
        {/* <ScrollUp /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
