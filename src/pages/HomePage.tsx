import React from "react";
import illustration from "../assets/images/arpan.png";

const HomePage: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-4 sm:p-6 mt-20 md:mt-0">
      <div className="flex flex-col items-center max-w-4xl w-full text-center">
        <img
          src={illustration}
          alt="Arpan Nyati Illustration"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mb-8 sm:mb-12"
        />
        <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl px-2 sm:px-0">
          <p className="mb-4">I'm a product-minded software engineer based in Bengaluru, IN. </p>
          <p>
            I'm currently open to exploring new opportunities in the
            startup/developer tooling space.
          </p>
          {/* <p className="mb-4">
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
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
