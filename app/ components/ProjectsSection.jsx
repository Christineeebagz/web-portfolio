import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Notes Web Application",
        techstack:"JavaScript, CSS",
        description: "A web application designed for organizing and managing personal notes",
        image: "/images/projects/project1.png",
        gitUrl: "https://github.com/Christineeebagz/notes-app",
        previewUrl: "https://notes-app-seven-lovat.vercel.app"
    },
    {
        id: 2,
        title: "CompSciCollections",
        techstack:"HTML, CSS",
        description: "Centralized Repository for UP Cebu’s Computer Science Subjects",
        image: "/images/projects/project2.png",
        gitUrl: "https://github.com/Christineeebagz/compscicollections",
        previewUrl: "https://christineeebagz.github.io/compscicollections/"
    },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold mt-10 mb-8">
            Projects</h2>
        <div>
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
  )
} 
export default ProjectsSection