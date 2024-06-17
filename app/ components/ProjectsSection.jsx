import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 3,
    title: "PANTRYPAL",
    techstack: "React.js, Node.js, SQL, PHPMyAdmin",
    description: "A pantry management system.",
    image: "/images/projects/pantrypal-project.png",
    gitUrl: "https://github.com/Christineeebagz/pantrypal",
    // previewUrl is omitted for this project
  },
  {
    id: 4,
    title: "SNACKRIFICE",
    techstack: "React.js, Node.js, SQL, PHPMyAdmin",
    description: "A snack ordering system.",
    image: "/images/projects/snackrifice-project.png",
    gitUrl: "https://github.com/Christineeebagz/snackrifice",
    previewUrl: "https://snackrifice.vercel.app",
  },
  {
    id: 1,
    title: "NOTES WEB APPLICATION",
    techstack: "JavaScript, CSS",
    description:
      "A web application designed for organizing and managing personal notes",
    image: "/images/projects/project1.png",
    gitUrl: "https://github.com/Christineeebagz/notes-app",
    previewUrl: "https://notes-app-seven-lovat.vercel.app",
  },
  {
    id: 2,
    title: "COMPSI-COLLECTION",
    techstack: "HTML, CSS",
    description:
      "Centralized Repository for UP Cebu’s Computer Science Subjects",
    image: "/images/projects/project2.png",
    gitUrl: "https://github.com/Christineeebagz/compscicollections",
    previewUrl: "https://christineeebagz.github.io/compscicollections/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-10 mb-8">Projects</h2>
      <div className="flex flex-wrap">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            techstack={project.techstack}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

// import React from "react";
// import ProjectCard from "./ProjectCard";

// const projectsData = [
//   {
//     id: 1,
//     title: "NOTES WEB APPLICATION",
//     techstack: "JavaScript, CSS",
//     description:
//       "A web application designed for organizing and managing personal notes",
//     image: "/images/projects/project1.png",
//     gitUrl: "https://github.com/Christineeebagz/notes-app",
//     previewUrl: "https://notes-app-seven-lovat.vercel.app",
//   },
//   {
//     id: 2,
//     title: "COMPSI-COLLECTION",
//     techstack: "HTML, CSS",
//     description:
//       "Centralized Repository for UP Cebu’s Computer Science Subjects",
//     image: "/images/projects/project2.png",
//     gitUrl: "https://github.com/Christineeebagz/compscicollections",
//     previewUrl: "https://christineeebagz.github.io/compscicollections/",
//   },
//   // {
//   //   id: 3,
//   //   title: "PANTRYPAL",
//   //   techstack: "React.js, Node.js, SQL, PHPMyAdmin ",
//   //   description:
//   //     "",
//   //   image: "",
//   //   gitUrl: "",
//   //   previewUrl: "",
//   // },
//   // {
//   //   id: 4,
//   //   title: "SNACKRIFICE",
//   //   techstack: "React.js, Node.js, SQL, PHPMyAdmin ",
//   //   description:
//   //     "",
//   //   image: "",
//   //   gitUrl: "",
//   //   previewUrl: "",
//   // }
// ];

// const ProjectsSection = () => {
//   return (
//     <section id="projects">
//       <h2 className="text-center text-4xl font-bold mt-10 mb-8">Projects</h2>
//       <div className="flex flex-wrap">
//         {projectsData.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             techstack={project.techstack}
//             description={project.description}
//             imgUrl={project.image}
//             gitUrl={project.gitUrl}
//             previewUrl={project.previewUrl}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
// export default ProjectsSection;
