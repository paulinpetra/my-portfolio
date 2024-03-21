import React from "react";

const MyWork = () => {
  return (
    <>
      <section id="services">
        <div className="bg-[#ffdebc] flex flex-col justify-center items-center font-Inconsolata gap-12 py-52">
          <div className="flex justify-center items-center">
            <h1 className="text-[#151b3f] text-3xl font-semibold">My Work</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
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
              <button className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold">
                <label>See More</label>
              </button>
            </div>

            <div className="bg-white flex flex-col justify-center items-center py-8 px-4  gap-4 opacity-95">
              <h1 className="text-[#151b3f] text-3xl font-semibold">
                Todo-list App
              </h1>
              <label className="text-[#151b3f]  text-base">
                HTML, Tailwind CSS, JS, React
              </label>
              <span className="underline w-[200px] border border-solid border-[#88a296]"></span>
              <p className="text-[#151b3f]  text-base text-left px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-[#88a296] py-2 px-2 rounded-md text-white hover:font-bold">
                <label>See More</label>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
