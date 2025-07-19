import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub as faGithubBrand,
  faTwitter as faTwitterBrand,
} from "@fortawesome/free-brands-svg-icons";

const Contacts: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé avec succès ! Je vous répondrai dès que possible.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="min-h-screen py-20 bg-gray-100 dark:bg-black">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-bold text-center dark:text-white">
          Contactez-moi
        </h2>
        <div className="w-20 h-1 mx-auto mb-12 bg-blue-500"></div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold dark:text-white">
              Disponible pour de nouvelles opportunités
            </h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              Si vous souhaitez discuter d'une opportunité ou d'une
              collaboration, n'hésitez pas à me contacter. Je serai ravie
              d'échanger avec vous !
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-500"
                  />
                </div>
                <div>
                  <p className="font-medium dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    marilyneashley407@email.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-100 rounded-full dark:bg-green-900">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="text-green-500"
                  />
                </div>
                <div>
                  <p className="font-medium dark:text-white">Téléphone</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    +237 652 651 336
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 mr-4 bg-purple-100 rounded-full dark:bg-purple-900">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-purple-500"
                  />
                </div>
                <div>
                  <p className="font-medium dark:text-white">Localisation</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Douala, Cameroun
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://linkedin.com"
                className="flex items-center justify-center w-10 h-10 text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com"
                className="flex items-center justify-center w-10 h-10 text-white transition bg-gray-800 rounded-full hover:bg-gray-900"
              >
                <FontAwesomeIcon icon={faGithubBrand} />
              </a>
              <a
                href="https://twitter.com"
                className="flex items-center justify-center w-10 h-10 text-white transition bg-red-500 rounded-full hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faTwitterBrand} />
              </a>
            </div>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-medium text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
