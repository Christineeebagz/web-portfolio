"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Other Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="text-[#F5E8DD] font-bold">Invited Speaker</span>{" "}
          during the OSM Thome Scholars’ Leadership Summit - Cebu
        </li>
        <li>
          UPCSG Hackathon 2024{" "}
          <span className="text-[#F5E8DD] font-bold">Third Placer</span>
        </li>
        <li>
          USJR-SHS{" "}
          <span className="text-[#F5E8DD] font-bold">
            Josenian Pride of the Year
          </span>{" "}
          and{" "}
          <span className="text-[#F5E8DD] font-bold">
            Saint Augustine Debate Leadership
          </span>{" "}
          2022 Awardee
        </li>
        <li>
          <span className="text-[#F5E8DD] font-bold">Core Adjudicator</span> of
          JPIA Borderlands Cup 2023 and CIDA Novice Cup 2023
        </li>
        <li>
          <span className="text-[#F5E8DD] font-bold">Debate Championships</span>
          : 14th Visayas Universities Debating Championship, Visayas
          Intervarsity 2021, Dominis Canis Cup 2021, and 7th Visayas
          Universities Debating Championship - British Parliament
        </li>
      </ul>
    ),
  },
  {
    title: "Leadership",
    id: "leadership",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="text-[#F5E8DD] font-bold">Finance Committee</span> of
          UP SayawE [September 2022 - Present]
        </li>
        <li>
          <span className="text-[#F5E8DD] font-bold">Tournament Director</span>{" "}
          of Visayas Intervarsity 2022
        </li>
        <li>
          <span className="text-[#F5E8DD] font-bold">President</span> of Cebu
          Interschool Debating Association [2021 - 2022]
        </li>
        <li>
          <span className="text-[#F5E8DD] font-bold">Prime Minister</span> of
          Josenian Debate Varsity [Academic Year 2021-2022]
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="text-[#F5E8DD] font-bold">
            University of the Philippines Cebu
          </span>
        </li>
        <ul className="pl-2 ml-5">
          <li>2nd Year BS Computer Science</li>
        </ul>
        <li>
          <span className="text-[#F5E8DD] font-bold">
            University of San Jose - Recoletos
          </span>
        </li>
        <ul className="pl-2 ml-5">
          <li>Class of 2022 - Senior High School</li>
          <li>Class of 2020 - Junior High School</li>
          <li>Class of 2016 - Elementary School</li>
        </ul>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("leadership");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 md:gap-x-4 gap-y-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:order-1 flex justify-end">
          <Image
            src="/images/pic2.jpg"
            alt="Self museum picture with the Spolarium at the back"
            width={450}
            height={450}
            className="w-full h-auto md:w-auto rounded-lg"
          />
        </div>
        <div className="md:order-2 mt-4 md:mt-0 text-left flex flex-col flex-grow">
          <h2 className="text-4xl font-bold text-[#F3EEEA] mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            As a third-year BS Computer Science student, I&apos;m passionate
            about crafting innovative projects and love joining hackathons.
            Alongside coding, I enjoy debate and aspire to eagerly collaborate
            with others who share my goal of bringing remarkable ideas to life.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center text-center mt-8 space-x-5">
        <TabButton
          selectTab={() => handleTabChange("awards")}
          active={tab === "awards"}
        >
          Other Awards
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("leadership")}
          active={tab === "leadership"}
        >
          Leadership
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
      </div>
      <div className="mt-8 mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24 flex justify-center">
        <div className="self-center">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
