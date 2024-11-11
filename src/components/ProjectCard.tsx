import { useEffect, useState } from "react";
import ProjectWindow from "./ProjectWindow";
import type { Project } from "../types/Project";

interface Props {
  project: Project;
  children: React.ReactNode;
}

const ProjectCard: React.FC<Props> = ({ project, children }) => {
  const [showWindow, setShowWindow] = useState(false);

  useEffect(() => {
    if (showWindow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showWindow]);

  return (
    <>
      <article
        onClick={() => setShowWindow(true)}
        className="group relative flex cursor-pointer flex-col items-center rounded-xl border-2 border-gray-800"
      >
        <h2 className="m-3 text-center text-2xl font-medium group-hover:text-gray-400">
          {project.name}
        </h2>
        {children}
      </article>
      {showWindow && (
        <ProjectWindow project={project} setShowWindow={setShowWindow} />
      )}
    </>
  );
};

export default ProjectCard;
