"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm-text-left">
          <h1
            className="text-col mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold s"
            style={{ color: "#F3EEEA" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3EEEA] to-[#F3EEEA] ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Christine", 1000, "a Computer Science Student", 500]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#F3EEEA] text-base sm:text-lg mb-6 lg:text-xl">
            Aspiring to Build and Create
          </p>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#B0A695] via-[#B0A695] to-[#EBE3D5] hover:bg-slate-200 text-white "
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/christine-mae-bagazin-851a2427a/",
                  "_blank"
                )
              }
            >
              Contact Me
            </button>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#B0A695] via-[#B0A695] to-[#EBE3D5]
                 hover:bg-[#EBE3D5] hover:text-[#776B5D] border mt-3"
            >
              <a
                href="https://drive.google.com/file/d/1LzggULp4eQ9fJTNkCvLvfXCobZq8CSFA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="block bg-[#776B5D] 
                    hover:bg-[#EBE3D5]
                    rounded-full px-5 py-2"
                >
                  Resume
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Pic.png"
              alt="Profile Picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
