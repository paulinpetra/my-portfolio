import React from "react";
import Image from "next/image";
import Link from "next/link";
const Contacts = () => {
  return (
    <>
      <section id="contact">
        <div className="bg-[#88a296] flex flex-col  xl:flex-row justify-center p-20 gap-5 font-Inconsolata ">
          <div className="flex flex-col  gap-4 p-6">
            <h1 className="text-3xl text-[#151b3f]">
              <span className="text-white">&lt;/P</span>etra
              <span className="text-white">&gt;</span>
            </h1>
            <p className="text-white text-xl">
              If you want to reach out, I&apos;m ready to talk to you.
            </p>
          </div>
          <div className="flex flex-col  items-start gap-5  flex-wrap">
            <h1 className="text-white text-3xl font-bold">Contacts</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/mail.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-white text-xl text-center"
                  href="mailto:petra.oster.paulin@gmail.com"
                >
                  petra.oster.paulin@gmail.com
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/github.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-white text-2xl text-center"
                  href="https://github.com/paulinpetra"
                >
                  Petra Paulin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
