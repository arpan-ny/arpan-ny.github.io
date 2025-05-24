import React from "react";
import illustration from "../assets/images/arpan.png"; // Make sure this path is correct

const HomePage: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 mt-20 md:mt-0">
      {" "}
      {/* mt-20 to push content down below header */}
      <div className="flex flex-col items-center max-w-4xl w-full text-center">
        {/* Illustration */}
        <img
          src={illustration}
          alt="Arpan Nyati Illustration"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-12"
        />

        {/* Text Content */}
        <div className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-2xl">
          <p className="mb-4">
            I'm a product-minded software engineer based in Bengaluru, IN. I've
            been working on{" "}
            <a href="#" className="underline">
              some project
            </a>{" "}
            something{" "}
            <a href="#" className="underline">
              some link
            </a>
            .
          </p>
          <p>
            I'm currently open to exploring new opportunities in the
            startup/developer tooling space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
