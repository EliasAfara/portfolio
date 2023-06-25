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
import Plum from "./components/Plum";

// pages
import PageNotFound from "./pages/PageNotFound";
import GuestBook from "./pages/GuestBook";

// import ScrollUp from "./components/scrollup/ScrollUp";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/styles";
import { Routes, Route, Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
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

      <main className='fillHeight'>
        <Outlet />
      </main>

      <Footer />
      <Plum />
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
            <Route path='/guestbook' element={<GuestBook />} />

            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
