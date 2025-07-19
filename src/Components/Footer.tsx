import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900">
      <div>
        <h1 className="text-lg font-bold">
          <span className="text-[#3B82F6] dark:text-blue-400">Marilyne </span>
          <span className="text-[#8B5CF6] dark:text-purple-400">Ashley </span>
        </h1>
      </div>
      <div className="text-right">
        <p className="text-black text-sm dark:text-gray-300">
          © 2025{" "}
          <span className="font-semibold text-black dark:text-gray-200">
            Marilyne Ashley . Tous droits réservés.
          </span>
        </p>
        <p className="text-[#6B7280] text-xs mt-1 dark:text-gray-400">
          Pentesteuse & Développeuse Web
        </p>
      </div>
    </footer>
  );
};

export default Footer;
