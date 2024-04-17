import React from "react";

const MyWork = () => {
  return (
    <>
      <section id="services">
        <div className="bg-[#ffdebc] flex flex-col justify-center items-center font-Inconsolata gap-12 py-52">
          <div className="flex justify-center items-center">
            <h1 className="text-[#151b3f] text-3xl font-semibold">My Work</h1>
          </div>

          <div className="bg-white flex flex-col justify-center items-center py-8 px-4  gap-4 opacity-95">
            <h1 className="text-[#151b3f] text-3xl font-semibold">
              Radio player
            </h1>
            <label className="text-[#151b3f]  text-base">
              HTML, Tailwind CSS, JS, React
            </label>
            <span className="underline w-[200px] border border-solid border-[#88a296]"></span>
            <p className="text-[#151b3f]  text-base text-left px-2">
              A Radio player using Sveriges Radio API.
            </p>
            <a
              href="https://radio-player-react-sandy.vercel.app/"
              className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold"
            >
              <label>See More</label>
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="bg-white flex flex-col justify-center items-center py-8 px-4 gap-4 opacity-95">
              <h1 className="text-[#151b3f] text-3xl font-semibold">
                Clocks and Timers
              </h1>
              <label className="text-[#151b3f] text-base">
                HTML, Tailwind CSS, JS, React
              </label>
              <span className="underline w-[200px] border border-solid border-[#88a296]"></span>
              <p className="text-[#151b3f] text-base text-left px-2">
                Clock-component that uses a prop to show the city title of the
                clock and another prop to show time at that timezone.
                Timer-components with different starting time props.
              </p>
              <a
                href="https://clock-nine-iota.vercel.app/"
                className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold"
              >
                <label>See More</label>
              </a>
            </div>

            <div className="bg-white flex flex-col justify-center items-center py-8 px-4 gap-4 opacity-95">
              <h1 className="text-[#151b3f] text-3xl font-semibold">
                Shopping Cart App
              </h1>
              <label className="text-[#151b3f] text-base">
                HTML, CSS, JS, Firebase
              </label>
              <span className="underline w-[200px] border border-solid border-[#88a296]"></span>
              <p className="text-[#151b3f] text-base text-left px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="https://moolang-shopping-cart-app.vercel.app/"
                className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold"
              >
                <label>See More</label>
              </a>
            </div>

            <div className="bg-white flex flex-col justify-center items-center py-8 px-4  gap-4 opacity-95">
              <h1 className="text-[#151b3f] text-3xl font-semibold">
                Zoom redesign
              </h1>
              <label className="text-[#151b3f]  text-base">
                HTML, Tailwind CSS, JS, React
              </label>
              <span className="underline w-[200px] border border-solid border-[#88a296]"></span>
              <p className="text-[#151b3f]  text-base text-left px-2">
                A redesign of the front page of zoom.us to make it more
                user-friendly and and so that it follows design rules.
              </p>
              <a
                href="https://zoom-redesign-phi.vercel.app/"
                className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold"
              >
                <label>See More</label>
              </a>
            </div>

            <div className="bg-white flex flex-col justify-center items-center py-8 px-4 gap-4 opacity-95">
              <h1 className="text-[#151b3f] text-3xl font-semibold">
                React Component Library
              </h1>
              <label className="text-[#151b3f] text-base">
                React, Tailwind CSS
              </label>
              <span className="underline w-[200px] border border-solid border-[#88a296]"></span>
              <p className="text-[#151b3f] text-base text-left px-2">
                Reusuable components like buttons, alerts, badges and cards. To
                be be used on many platforms and websites.
              </p>
              <a
                href="https://component-library-self-theta.vercel.app/"
                className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold"
              >
                <label>See More</label>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
