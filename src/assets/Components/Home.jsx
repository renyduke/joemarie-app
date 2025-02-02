import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/Blog");
  };

  return (
    <div className="h-screen">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-13">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                A platform for Shoes
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-6xl pb-4">
                Discover New Design and Good qulity
              </h1>
              <p className="mt-4 text-base text-black lg:mt-6 sm:text-xl">
                For Afordability meets the quality
              </p>

              <a
                onClick={handleExploreClick}
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-8 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Explore
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              <p className="mt-5 text-gray-600">
                <a
                  href="#"
                  title=""
                  className="text-black transition-all duration-200 hover:underline"
                ></a>
              </p>
            </div>

            <div>
              <img
                className="w-full bg-yellow-300 rounded-full"
                src="/joemariebg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
