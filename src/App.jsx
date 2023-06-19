import "./App.css";
import Header from "./components/header/Header";

// sections
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

// components
import Email from "./components/Email";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

// import ScrollUp from "./components/scrollup/ScrollUp";

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
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </StyledMainContainer>

        <Footer />
        {/* <ScrollUp /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
