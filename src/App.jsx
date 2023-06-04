import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        {/* <About />
        <Skills />
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
