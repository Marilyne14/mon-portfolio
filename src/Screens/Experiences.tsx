import React from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const FormationExperience: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#040b1a] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center leading-tight">
          Expérience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-2 mb-6 rounded"></div>
        <p className="text-center text-gray-600 max-w-2xl dark:text-white mx-auto mb-16 text-base sm:text-lg">
          Mon parcours académique et professionnel dans le domaine du
          développement web et mobile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-8">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-blue-600 text-2xl mr-3"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Formation
              </h3>
            </div>

            <div className="relative border-l border-blue-200 ml-6 space-y-10">
              <div className="relative flex items-start">
                <span className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                </span>
                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-6 pr-20 ml-8">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-blue-400 leading-tight">
                      Formation Ethical Hacking
                    </h4>
                    <span className="text-sm text-gray-500  dark:text-white ml-4 whitespace-nowrap">
                      2024 - 2025
                    </span>
                  </div>
                  <p className="mt-1 text-gray-700 dark:text-white text-sm">
                    Centre de Formation <strong>GetSmarter</strong>
                  </p>
                  <ul className=" capitalize list-disc list-inside mt-3 text-gray-700 dark:text-white text-sm space-y-1">
                    <li>test d'intrusions</li>
                    <li>Analyse des vulnérabilités</li>
                    <li>Sécurisation des réseaux</li>
                    <li>Social engineering</li>
                  </ul>
                </div>
              </div>
              <span className="absolute -left-3 top-56 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
              </span>
              <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-6 pr-20 ml-8">
                <div className="flex justify-between items-start">
                  <h4 className=" capitalize text-lg font-semibold text-gray-900 dark:text-blue-400 leading-tight">
                    Formation Develeppement web & mobile
                  </h4>
                  <span className="text-sm text-gray-500  dark:text-white ml-4 whitespace-nowrap">
                    2023 - 2024
                  </span>
                </div>
                <p className="mt-1 text-gray-700 dark:text-white text-sm">
                  Centre de Formation <strong>GetSmarter</strong>
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-white text-sm space-y-1">
                  <li>HTML, CSS, JavaScript, TypeScript</li>
                  <li>React, Laravel, Php, TailwindCss</li>
                  <li>Modélisation UML et analyse de projets</li>
                  <li>Conception UI/UX</li>
                </ul>
              </div>
              <div className="relative flex items-start">
                <span className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                </span>
                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-6 pr-20 ml-8">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-blue-400 leading-tight">
                      Baccalauréat Scientifique
                    </h4>

                    <span className="text-sm text-gray-500 dark:text-white ml-4 whitespace-nowrap">
                      2022 - 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-8">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-blue-600 text-2xl mr-3"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Expérience
              </h3>
            </div>

            <div className="relative border-l border-blue-200 ml-6 space-y-10">
              <div className="relative flex items-start">
                <span className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                </span>
                <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-6 pr-20 ml-8">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-blue-400 leading-tight">
                      Projet d'entreprise
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-white ml-4 whitespace-nowrap">
                      2025
                    </span>
                  </div>
                  <p className="mt-1 text-gray-700 text-sm dark:text-white">
                    Entreprise <strong>EyesOne</strong>
                  </p>
                  <p className="mt-3 text-gray-700 dark:text-white text-sm leading-relaxed">
                    Porjet de fin de formation où j'ai participé au
                    développement d'une application fullstack web et mobile en
                    utilisant les technologies React,Tailwind, React Native et
                    TypeScript.
                  </p>
                  <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-white text-sm space-y-1">
                    <li>
                      Developpement des fontionnalites avec React native ,
                      TypeScript (FrontEnd)
                    </li>
                    <li>Utilisation d'API en laravel (BackEnd)</li>
                    <li>Integration des bases de donnees avec MYSQL</li>
                    <li>
                      Participation aux réunions d'équipe et aux revues de code
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationExperience;
