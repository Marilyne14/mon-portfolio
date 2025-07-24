import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Screens/home";
import About from "./Screens/about";
import Competences from "./Screens/competences";
import Experiences from "./Screens/Experiences";
import Contacts from "./Screens/contacts";
import ProjectsSection from "./Screens/projets";
import Projects from "./Screens/projets";
import Projets from "./Screens/projets";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 scroll-smooth" : "bg-gray-50 scroll-smooth"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="competences" className="min-h-screen">
          <Competences />
        </section>
        <section id="projets" className="min-h-screen">
          <Projets />
        </section>
        <section id="experiences" className="min-h-screen">
          <Experiences />
        </section>
        <section id="contacts" className="min-h-screen">
          <Contacts />
        </section>
      </main>
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed w-10 p-3 text-white transition bg-blue-500 rounded-full shadow-md bottom-6 right-6 hover:bg-blue-600"
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
