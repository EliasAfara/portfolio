import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/styles";

// Components
import Header from "./components/header/Header";
import Email from "./components/Email";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import Plum from "./components/Plum";

// Sections
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

// Pages
import PageNotFound from "./pages/PageNotFound";
import GuestBook from "./pages/GuestBook";

// Utils
import ScrollToTop from "./utils/scrollToTop";

import "./App.css";

const MainContent = () => (
  <>
    <Home />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
  </>
);

const Layout = () => (
  <>
    <Header />
    <Socials />
    <Email />
    <main className='fillHeight'>
      <Outlet />
    </main>
    <Footer />
    <Plum />
  </>
);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainContent />} />
            <Route
              path='/guestbook'
              element={
                <>
                  <ScrollToTop />
                  <GuestBook />
                </>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
