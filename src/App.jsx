import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Email from "./components/Email";
import Socials from "./components/Socials";
// import ScrollUp from "./components/scrollup/ScrollUp";
import Footer from "./components/footer/Footer";
import Jobs from "./components/jobs/Jobs";

//
import Education from "./components/education/Education";

function App() {
  return (
    <>
      <Header />
      <Socials />
      <Email />
      <main className='main'>
        <Home />
        <About />
        {/* <Experience />*/}
        <Education />
        <Skills />
        {/* <Projects />
        <Contact /> */}
        <Jobs />
      </main>
      <Footer />
      {/* <ScrollUp /> */}
    </>
  );
}

export default App;
