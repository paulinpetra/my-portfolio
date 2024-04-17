import React from "react";

const MyWork = () => {
  return (
    <>
      <section
        id="services"
        className="bg-[#ffdebc] flex flex-col justify-center items-center font-Inconsolata gap-12 py-52"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-[#151b3f] text-3xl font-semibold">My Work</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4">
          {/* Zoom Redesign Card */}
          <div className="bg-white flex flex-col justify-between items-center py-8 px-4 gap-4 opacity-95 w-full sm:w-96 md:w-full lg:w-96 xl:w-full rounded-lg">
            <div>
              <h2 className="text-[#151b3f] text-3xl font-semibold text-center">
                Zoom Redesign
              </h2>
              <p className="text-[#151b3f] text-base font-meium leading-6 text-center py-2">
                HTML, Tailwind CSS, JS, React
              </p>
              <div className="underline w-full border border-solid border-[#88a296]"></div>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-left px-2 py-4">
                A redesign of the front page of zoom.us to make it more
                user-friendly and so that it follows design rules.
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="https://zoom-redesign-phi.vercel.app/"
                className="cursor-pointer"
              >
                <button className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold">
                  See More
                </button>
              </a>
            </div>
          </div>

          {/* Radio Player Card */}
          <div className="bg-white flex flex-col justify-between items-center py-8 px-4 gap-4 opacity-95 w-full sm:w-96 md:w-full lg:w-96 xl:w-full rounded-lg">
            <div>
              <h2 className="text-[#151b3f] text-3xl font-semibold text-center">
                Radio Player
              </h2>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-center py-2">
                HTML, Tailwind CSS, JS, React
              </p>
              <div className="underline w-full border border-solid border-[#88a296]"></div>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-left px-2 py-4">
                A Radio player using Sveriges Radio API.
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="https://radio-player-react-sandy.vercel.app/"
                className="cursor-pointer"
              >
                <button className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold">
                  See More
                </button>
              </a>
            </div>
          </div>

          {/* Clocks and Timers Card */}
          <div className="bg-white flex flex-col justify-between items-center py-8 px-4 gap-4 opacity-95 w-full sm:w-96 md:w-full lg:w-96 xl:w-full rounded-lg">
            <div>
              <h2 className="text-[#151b3f] text-3xl font-semibold text-center">
                Clocks and Timers
              </h2>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-center py-2">
                HTML, Tailwind CSS, JS, React
              </p>
              <div className="underline w-full border border-solid border-[#88a296]"></div>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-left px-2 py-4">
                Clock-component that uses a prop to show the city title of the
                clock and another prop to show time at that timezone.
                Timer-components with different starting time props.
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="https://clock-nine-iota.vercel.app/"
                className="cursor-pointer"
              >
                <button className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold">
                  See More
                </button>
              </a>
            </div>
          </div>

          {/* Shopping Cart App Card */}
          <div className="bg-white flex flex-col justify-between items-center py-8 px-4 gap-4 opacity-95 w-full sm:w-96 md:w-full lg:w-96 xl:w-full rounded-lg">
            <div>
              <h2 className="text-[#151b3f] text-3xl font-semibold text-center">
                Shopping Cart App
              </h2>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-center py-2">
                HTML, CSS, JS, Firebase
              </p>
              <div className="underline w-full border border-solid border-[#88a296]"></div>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-left px-2 py-4">
                Moolang shopping cart app using Firebase.
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="https://moolang-shopping-cart-app.vercel.app/"
                className="cursor-pointer"
              >
                <button className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold">
                  See More
                </button>
              </a>
            </div>
          </div>

          {/* React Component Library Card */}
          <div className="bg-white flex flex-col justify-between items-center py-8 px-4 gap-4 opacity-95 w-full sm:w-96 md:w-full lg:w-96 xl:w-full rounded-lg">
            <div>
              <h2 className="text-[#151b3f] text-3xl font-semibold text-center">
                React Component Library
              </h2>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-center py-2">
                React, Tailwind CSS
              </p>
              <div className="underline w-full border border-solid border-[#88a296]"></div>
              <p className="text-[#151b3f] text-base font-medium leading-6 text-left px-2 py-4">
                Reusable components like buttons, alerts, badges, and cards. To
                be used on many platforms and websites.
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="https://component-library-self-theta.vercel.app/"
                className="cursor-pointer"
              >
                <button className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold">
                  See More
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
