import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMapMarkerAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCode,
  faDatabase,
  faThLarge,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-[#040b1a] py-20">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-bold text-center dark:text-white">
          À propos de moi
        </h2>
        <div className="w-20 h-1 mx-auto mb-12 bg-blue-500"></div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <section className="w-full max-w-xl p-6 bg-gray-200 rounded-lg dark:bg-gray-800">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-gray-100">
                Ce que je fais
              </h2>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 dark:bg-[#0f2a5a] rounded-md p-3 mr-4 mt-1 bg-gray-700">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-[#4a7ad9] text-xl dark:text-blue-400"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-black dark:text-gray-200">
                    Développement Frontend
                  </h3>
                  <p className="text-base leading-relaxed text-gray-500 max-w-prose dark:text-gray-400">
                    Création d'interfaces utilisateur réactives et intuitives
                    avec HTML, CSS, TailwindCss et React.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 dark:bg-[#0f2a5a] rounded-md p-3 mr-4 mt-1 bg-gray-700">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-[#4a7ad9] text-xl dark:text-blue-400"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-black dark:text-gray-200">
                    Développement Backend
                  </h3>
                  <p className="text-base leading-relaxed text-gray-500 max-w-prose dark:text-gray-400">
                    Conception d'APIs robustes et évolutives avec Node.js,
                    Express et NestJS.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 dark:bg-[#0f2a5a] rounded-md p-3 mr-4 mt-1 bg-gray-700">
                  <FontAwesomeIcon
                    icon={faThLarge}
                    className="text-[#4a7ad9] text-xl dark:text-blue-400"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-black dark:text-gray-200">
                    UI/UX Design
                  </h3>
                  <p className="text-base leading-relaxed text-gray-500 max-w-prose dark:text-gray-400">
                    Création d'expériences utilisateur fluides et esthétiques,
                    centrées sur l'utilisateur.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 dark:bg-[#0f2a5a] rounded-md p-3 mr-4 mt-1 bg-gray-700">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-[#4a7ad9] text-xl dark:text-blue-400"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-black dark:text-gray-200">
                    Analyse de Projets
                  </h3>
                  <p className="text-base leading-relaxed text-gray-500 max-w-prose dark:text-gray-400">
                    Modélisation UML et analyse efficace des besoins pour des
                    solutions adaptées.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              Qui suis-je ?
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
              Je suis Marilyne Ashley, une Développeuse web et mobile passionnée
              par la Cybersécurité et tout ce qui a trait à l'informatique. Avec
              une formation en Développement Web & Mobile et en Ethical Hacking,
              je me spécialise dans le Pentest et .
            </p>
            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
              Mon approche combine une solide compréhension technique avec un
              souci du détail pour créer des expériences utilisateur
              exceptionnelles. Je m'intéresse particulièrement aux technologies
              émergentes et j'aime partager mes connaissances avec la
              communauté.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-3 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Nom :</strong> Marilyne Ashley
                </span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-3 text-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Email :</strong> marilyneashley407@email.com
                </span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 text-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Localisation :</strong> Douala, Cameroun
                </span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="mr-3 text-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Disponibilité :</strong> Disponible
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
