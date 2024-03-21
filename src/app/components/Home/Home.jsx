import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <>
      <section id="about">
        <div className="bg-[#fffcf7] font-Inconsolata flex  flex-col-reverse lg:flex-col justify-center items-center py-40 gap-14">
          <div className="flex flex-col md:flex-row justify-center text-lg items-center gap-3 text-[#151b3f] flex-wrap p-4">
            <div className="relative w-48 h-48">
              <Image
                src="/bubbles.jpg"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-start">
              <p>
                I became interested in programming due to my general fascination
                with languages. Over time, I've immersed myself in web
                development, learning and deepening my skills. I'm enthusiastic
                about blending creativity with logic, which is why I enjoy
                crafting websites and web apps.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center  gap-10">
            <div className="flex flex-col lg:items-start justify-center items-center gap-2 p-5">
              <h1 className="text-[#70aea2] text-4xl font-bold">
                Petra Paulin
              </h1>
              <label className="text-[#F0E3CA] text-3xl">React Developer</label>
              <span className="text-[#F0E3CA] text-lg text-center lg:text-start">
                React developer looking for an internship where I can continue
                to learn more about Web Development.
              </span>
            </div>
            <div className="relative w-96 h-96 bg-cover">
              <div className="w-56 h-56 absolute left-20  top-24">
                <Image
                  src="/pp.png"
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
