import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Screens/home";
import About from "./Screens/about";
import Competences from "./Screens/competences";
import Experiences from "./Screens/Experiences";
import Contacts from "./Screens/contacts";

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
          className=" w-10 fixed bottom-6 right-6  bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
