"use client";
import React from "react";
import Link from "next/link";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    id: 1,
    title: "UPCSG Hackathon 2024 - 3rd Place",
    host: "UP Computer Science Guild - University of the Philippines Cebu",
    description:
      "A competitive event where bonafide UP Cebu students developed innovative tech solutions, tackling real-world challenges like employment and education.",
    image: "/images/slider/csghackathon3rd.png",
    url: "https://web.facebook.com/share/PSXnPkQDTcUp78Ba/",
    buttonText: "Official Post",
  },
  {
    id: 3,
    title: "Responsive Web Design Certification",
    host: "freeCodeCamp",
    description: "Built webpages using HTML for content and CSS for styling.",
    image: "/images/slider/FCCResponsiveWebDesign.png",
    url: "https://www.freecodecamp.org/certification/fccbcb69179-7629-4946-bebb-3159c4a4f067/responsive-web-design",
    buttonText: "Show Certificate",
  },
  {
    id: 4,
    title: "Philippine Startup Challenge 9 - [Regional] 7th Place & Best Logo",
    host: "Department of Information and Communications Technology - Region 7",
    description:
      "An annual competition that encourages Filipino youth to develop innovative ICT solutions, fostering entrepreneurship, mentorship, and connections within the Philippine startup ecosystem.",
    image: "/images/slider/dict7th.png",
    url: "https://web.facebook.com/christinemae.bagazin",
    buttonText: "Congratulatory Post",
  },
  {
    id: 2,
    title: "YSES Week 2024: Hackathon Participant",
    host: "Young Software Engineers' Society - University of the Philippines Los Banos",
    description:
      "YSES Week 2024 Hackathon: A six-day national event where young innovators collaborate to develop impactful software solutions, championing the Filipino workforce and driving technological progress.",
    image: "/images/slider/lbhackathonparticipation.png",
    url: "https://drive.google.com/file/d/11ED8bThXb_giXcjseT3oSuM0f0RnCI00/view",
    buttonText: "Certification PDF",
  },
];

const SliderSection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="slider" className="w-6/7 mt-10 m-auto mb-10 pb-10">
      <h2 className="text-center text-4xl font-bold mt-10 mb-8">
        Awards & Certifications
      </h2>

      <div className="mt-10">
        <Slider {...settings}>
          {sliderData.map((slider) => (
            <SliderCard
              key={slider.id}
              title={slider.title}
              host={slider.host}
              description={slider.description}
              image={slider.image}
              url={slider.url}
              buttonText={slider.buttonText}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
