import React, { useState } from "react";

type Project = {
  id: number;
  title: string;
  image: string;
  category: "Frontend";
};

const projets: Project[] = [
  {
    id: 1,
    title: "Personnal Portfolio",
    image: "/home.png",
    category: "Frontend",
  },
];

const categories = ["Tous", "Frontend", "Backend", "Fullstack"] as const;

const Projets: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projets
      : projets.filter((projet) => projet.category === selectedCategory);

  return (
    <section className="py-16 text-center dark:bg-gray-900 bg-gray-50">
      <h2 className="mb-2 text-4xl font-bold text-gray-900">Mes projets</h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
        Découvrez une sélection de projets sur lesquels j'ai travaillé,
        démontrant mes compétences en développement web fullstack.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-8">
        {filteredProjects.map((projet) => (
          <div
            key={projet.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:scale-[1.02]"
          >
            <img
              src={projet.image}
              alt={projet.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {projet.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{projet.category}</p>
              <p className="">
                Mon portfolio développé avec les technologies telles que React,
                Typescript et TailwindCSS
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projets;
