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

// pages
import PageNotFound from "./pages/PageNotFound";

// import ScrollUp from "./components/scrollup/ScrollUp";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/styles";
import { Routes, Route, Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <StyledMainContainer className='fillHeight'>
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </StyledMainContainer>
  );
};

const Layout = () => {
  return (
    <>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Header />
      <Socials />
      <Email />

      {/* An <Outlet> renders whatever child route is currently active */}
      <Outlet />

      <Footer />
      {/* <ScrollUp /> */}
    </>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainRoute />} />

            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default App;
