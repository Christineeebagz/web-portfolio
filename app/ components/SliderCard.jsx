import React from "react";

const SliderCard = ({ title, host, description, image, url, buttonText }) => {
  return (
    <div className="bg-white rounded-xl h-full w-full flex flex-col justify-between overflow-hidden">
      <div className="rounded-t-xl">
        <img src={image} alt="" className="rounded-xl" />
      </div>

      <div className="flex flex-col justify-center items-center  p-4 text-[#776B5D]">
        <p className="text-lg font-bold justify-center text-center pb-1  ">
          {title}
        </p>
        <p className="text-center text-sm pb-1  text-[#B0A695]">{host}</p>
        <p className="text-xs text-justify h-full w-full overflow-hidden text-ellipsis p-2">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="bg-[#EBE3D5] rounded-lg text-sm mt-2 w-full p-2 hover:bg-[#776B5D] hover:text-white">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};
export default SliderCard;
