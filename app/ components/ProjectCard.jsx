import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, techstack, description,gitUrl, previewUrl  }) => {
  return (
    <div className="flex  group flex-wrap mb-4 mx-auto " >
      <div
        className="relative group flex-shrink-0 h-72 md:h-96 md:w-2/3 w-full rounded-tl-xl rounded-bl-xl min-w-[400px] p-20"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}
      >
        <div className="overlay  hidden items-center justify-center absolute top-0 left-0 w-full h-full
        rounded-tl-xl rounded-bl-xl bg-[#B0A695] bg-opacity-0  group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link href={gitUrl} className="h-14 mr-5 w-14 border-2 relative rounded-full border-[#776B5D] hover:border-white group/link">
              <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#776B5D] cursor-pointer  group-hover/link:text-white"/>

              </Link>
              <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#776B5D] hover:border-white group/link">
              <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#776B5D] cursor-pointer  group-hover/link:text-white"/>

              </Link>
            
        </div>
      </div>

      <div className="flex-1 text-[#776B5D] rounded-tr-xl  rounded-br-xl min-w-[267px] bg-white py-6 px-4 items-center justify-center">
       <div>
       <h5 className="font-xl font-semibold ">{title}</h5> 
        <h6 className="text-[#B0A695] text-center mb-2">{techstack}</h6>
        <p className="text-[#776B5D]">{description}</p>
    </div>
      </div>
    </div>
  );
};

export default ProjectCard;
