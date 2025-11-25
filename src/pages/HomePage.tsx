import React from "react";
import illustration from "../assets/images/arpan.png";

const HomePage: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
        <div className="md:w-1/2 p-4 flex justify-center">
          <img
            src={illustration}
            alt="Arpan Nyati Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-color)" }}>
            <p className="mb-4">I'm a product-minded software engineer based in Bengaluru, IN. </p>
            <p>
              I'm currently open to exploring new opportunities in the
              AI/startup/developer tooling space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
