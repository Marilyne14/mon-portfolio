import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-indigo-600 dark:bg-black">
      <div className="max-w-4xl px-6 py-20 mx-auto text-center">
        <img
          src="/ashley4.jpg"
          alt="Portrait de Marilyne Ashley"
          className="object-cover w-48 h-48 mx-auto mb-8 border-4 border-white rounded-full"
        />
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Bonjour, je suis Marilyne Ashley
        </h1>
        <p className="mb-8 text-xl md:text-2xl">
          Developpeuse Web Passionnée De CyberSecurite
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="px-6 py-3 font-medium text-blue-600 transition bg-white rounded-full hover:bg-gray-100"
          >
            En savoir plus
          </a>
          <a
            href="#contacts"
            className="px-6 py-3 font-medium text-white transition border-2 border-white rounded-full hover:bg-white hover:text-blue-600"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
