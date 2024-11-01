"use client";
import React from "react";
import Link from "next/link";

const sliderData = [
  {
    id: 1,
    title: "css web dev",
    host: "freecodecamp",
    description: "something something",
    // image: "",
    // url: "",
  },
];

const Slider = () => {
  return (
    <div id="slider" className="w-3/4 mt-10 m-auto  bg-[#EBE3D5]">
      <h2>Awards & Certifications</h2>
    </div>
  );
};

export default Slider;
