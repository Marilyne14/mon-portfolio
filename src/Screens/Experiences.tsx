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
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-tight text-center text-gray-900 dark:text-white">
          Expérience
        </h2>
        <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-blue-600 rounded"></div>
        <p className="max-w-2xl mx-auto mb-16 text-base text-center text-gray-600 dark:text-white sm:text-lg">
          Mon parcours académique et professionnel dans le domaine du
          développement web et mobile.
        </p>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="flex items-center mb-8">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="mr-3 text-2xl text-blue-600"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Formation
              </h3>
            </div>

            <div className="relative ml-6 space-y-10 border-l border-blue-200">
              <div className="relative flex items-start">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 top-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                </span>
                <div className="p-6 pr-20 ml-8 bg-white rounded-lg shadow-md dark:bg-gray-600">
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg font-semibold leading-tight text-gray-900 dark:text-blue-400">
                      Formation Ethical Hacking
                    </h4>
                    <span className="ml-4 text-sm text-gray-500 dark:text-white whitespace-nowrap">
                      2024 - 2025
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-700 dark:text-white">
                    Centre de Formation <strong>GetSmarter</strong>
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-700 capitalize list-disc list-inside dark:text-white">
                    <li>test d'intrusions</li>
                    <li>Analyse des vulnérabilités</li>
                    <li>Sécurisation des réseaux</li>
                    <li>Social engineering</li>
                  </ul>
                </div>
              </div>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 top-56">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
              </span>
              <div className="p-6 pr-20 ml-8 bg-white rounded-lg shadow-md dark:bg-gray-600">
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-semibold leading-tight text-gray-900 capitalize dark:text-blue-400">
                    Formation Develeppement web & mobile
                  </h4>
                  <span className="ml-4 text-sm text-gray-500 dark:text-white whitespace-nowrap">
                    2023 - 2024
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-white">
                  Centre de Formation <strong>GetSmarter</strong>
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside dark:text-white">
                  <li>HTML, CSS, JavaScript, TypeScript</li>
                  <li>React, Laravel, Php, TailwindCss</li>
                  <li>Modélisation UML et analyse de projets</li>
                  <li>Conception UI/UX</li>
                </ul>
              </div>
              <div className="relative flex items-start">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 top-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                </span>
                <div className="p-4 sm:p-6 pr-6 sm:pr-20 ml-4 sm:ml-8 bg-white rounded-lg shadow-md dark:bg-gray-600 w-full overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-lg font-semibold leading-tight text-gray-900 dark:text-blue-400">
                      Baccalauréat Scientifique
                    </h4>
                    <span className="mt-2 sm:mt-0 sm:ml-4 text-sm text-gray-500 dark:text-white whitespace-nowrap">
                      2022 - 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Expérience */}
          <div>
            <div className="flex items-center mb-8">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="mr-3 text-2xl text-blue-600"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Expérience
              </h3>
            </div>

            <div className="relative ml-6 space-y-10 border-l border-blue-200">
              <div className="relative flex items-start">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 top-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                </span>
                <div className="p-6 pr-20 ml-8 bg-white rounded-lg shadow-md dark:bg-gray-500">
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg font-semibold leading-tight text-gray-900 dark:text-blue-400">
                      Projet d'entreprise
                    </h4>
                    <span className="ml-4 text-sm text-gray-500 dark:text-white whitespace-nowrap">
                      2025
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-700 dark:text-white">
                    Entreprise <strong>EyesOne</strong>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-white">
                    Porjet de fin de formation où j'ai participé au
                    développement d'une application fullstack web et mobile en
                    utilisant les technologies React,Tailwind, React Native et
                    TypeScript.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside dark:text-white">
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
