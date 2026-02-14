import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600); // Match loader animation duration
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-slate-950">
          <Header />
          <main>
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <CodingProfiles />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
