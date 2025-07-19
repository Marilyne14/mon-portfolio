import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPalette,
  faCode,
  faBolt,
  faServer,
  faSitemap,
  faChartLine,
  faProjectDiagram,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const Competences: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const skills = [
    {
      title: "HTML",
      icon: faGlobe,
      gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
      hoverGradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      mastery: 100,
      category: "Frontend",
    },
    {
      title: "CSS",
      icon: faPalette,
      gradient: "linear-gradient(135deg, #4f7dfd 0%, #6875f5 100%)",
      hoverGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      mastery: 100,
      category: "Frontend",
    },
    {
      title: "Tailwind CSS",
      icon: faPalette,
      gradient: "linear-gradient(135deg, #14aaf5 0%, #3ea1f0 100%)",
      hoverGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      mastery: 100,
      category: "Frontend",
    },
    {
      title: "JavaScript",
      icon: faCode,
      gradient: "linear-gradient(135deg, #f0b90b 0%, #eab308 100%)",
      hoverGradient: "linear-gradient(135deg, #ca8a04 0%, #a16207 100%)",
      mastery: 80,
      category: "Frontend",
    },
    {
      title: "React",
      icon: faBolt,
      gradient: "linear-gradient(135deg, #2dd4bf 0%, #22d3ee 100%)",
      hoverGradient: "linear-gradient(135deg, #0d9488 0%, #0e7490 100%)",
      mastery: 80,
      category: "Frontend",
    },
    {
      title: "Laravel",
      icon: faServer,
      gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
      hoverGradient: "linear-gradient(135deg, #15803d 0%, #14532d 100%)",
      mastery: 80,
      category: "Backend",
    },
    {
      title: "Php",
      icon: faServer,
      gradient: "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
      hoverGradient: "linear-gradient(135deg, #2d3748 0%, #1f2937 100%)",
      mastery: 80,
      category: "Backend",
    },
    {
      title: "SQL",
      icon: faDatabase,
      gradient: "linear-gradient(135deg, #34d399 0%, #2dd4bf 100%)",
      hoverGradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
      mastery: 70,
      category: "Backend",
    },
    {
      title: "UML",
      icon: faSitemap,
      gradient: "linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)",
      hoverGradient: "linear-gradient(135deg, #6b21a8 0%, #581c87 100%)",
      mastery: 70,
      category: "Outils",
    },
    {
      title: "Algorithme",
      icon: faChartLine,
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6b46c1 100%)",
      hoverGradient: "linear-gradient(135deg, #6b21a8 0%, #553c9a 100%)",
      mastery: 70,
      category: "Soft Skills",
    },
    {
      title: "UI/UX Design",
      icon: faPalette,
      gradient: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
      hoverGradient: "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
      mastery: 70,
      category: "Outils",
    },
    {
      title: "Analyse de Projet",
      icon: faProjectDiagram,
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      hoverGradient: "linear-gradient(135deg, #047857 0%, #064e3b 100%)",
      mastery: 70,
      category: "Soft Skills",
    },
  ];

  const filteredSkills =
    selectedCategory === "Toutes"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="text-black bg-white dark:bg-black dark:text-white">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <h1 className="mb-2 text-4xl font-extrabold text-center">
          Mes compétences
        </h1>
        <div className="w-20 h-1 bg-[#3b6de7] mx-auto rounded mb-8"></div>
        <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-center text-gray-500 dark:text-white">
          Voici les technologies et compétences que j'ai acquises au cours de ma
          formation et que j'utilise pour créer des applications web modernes et
          performantes.
        </p>

        <nav className="flex flex-wrap justify-center gap-3 mb-12 space-x-6">
          <button
            onClick={() => setSelectedCategory("Toutes")}
            className={`${
              selectedCategory === "Toutes"
                ? "bg-[#3b6de7] text-white"
                : "bg-gray-300 dark:bg-[#1f2937] dark:text-[#b0b8c1] text-white"
            } rounded-full px-6 py-2 text-base font-normal min-w-[90px] text-center transition-colors duration-300`}
          >
            Toutes
          </button>
          <button
            onClick={() => setSelectedCategory("Frontend")}
            className={`${
              selectedCategory === "Frontend"
                ? "bg-[#3b6de7] text-white"
                : "bg-gray-300 dark:bg-[#1f2937] dark:text-[#b0b8c1] text-white"
            } rounded-full px-6 py-2 text-base font-normal min-w-[90px] text-center transition-colors duration-300`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSelectedCategory("Backend")}
            className={`${
              selectedCategory === "Backend"
                ? "bg-[#3b6de7] text-white"
                : "bg-gray-300 dark:bg-[#1f2937] dark:text-[#b0b8c1] text-white"
            } rounded-full px-6 py-2 text-base font-normal min-w-[90px] text-center transition-colors duration-300`}
          >
            Backend
          </button>
          <button
            onClick={() => setSelectedCategory("Outils")}
            className={`${
              selectedCategory === "Outils"
                ? "bg-[#3b6de7] text-white"
                : "bg-gray-300 dark:bg-[#1f2937] dark:text-[#b0b8c1] text-white"
            } rounded-full px-6 py-2 text-base font-normal min-w-[90px] text-center transition-colors duration-300`}
          >
            Outils
          </button>
          <button
            onClick={() => setSelectedCategory("Soft Skills")}
            className={`${
              selectedCategory === "Soft Skills"
                ? "bg-[#3b6de7] text-white"
                : "bg-gray-300 dark:bg-[#1f2937] dark:text-[#b0b8c1] text-white"
            } rounded-full px-6 py-2 text-base font-normal min-w-[90px] text-center transition-colors duration-300`}
          >
            Soft Skills
          </button>
        </nav>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="relative p-8 text-white transition-all duration-300 rounded-lg cursor-pointer group hover:scale-105 hover:shadow-lg"
              style={{ background: skill.gradient }}
            >
              <div className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full top-6 left-6 bg-opacity-20 group-hover:bg-opacity-30">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-lg text-white transition-colors group-hover:text-gray-100"
                />
              </div>
              <h2 className="mb-4 text-xl font-bold transition-colors mt-14 group-hover:text-gray-200">
                {skill.title}
              </h2>
              <div className="flex space-x-2">
                {Array.from({ length: 3 }, (_, i) => {
                  const masteryLevel = Math.floor((skill.mastery / 100) * 3);
                  return (
                    <span
                      key={i}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        i < masteryLevel
                          ? "bg-white"
                          : "bg-white bg-opacity-20 dark:bg-gray-600 dark:bg-opacity-20"
                      }`}
                    ></span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competences;
