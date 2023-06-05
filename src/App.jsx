import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Email from "./components/Email";

function App() {
  return (
    <>
      <Header />
      <Email />
      <main className='main'>
        <Home />
        <About />
        {/*<Skills />
        <Qualification />
        <Portfolio />
        <Contact /> */}
      </main>
      {/* <Footer />
      <ScrollUp /> */}
    </>
  );
}

export default App;
