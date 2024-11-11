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
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
  }, [showWindow]);

  return (
    <>
      <article
        onClick={() => setShowWindow(true)}
        className="border-gray-800 rounded-xl border-2 flex flex-col items-center relative cursor-pointer group"
      >
        <h2 className="text-2xl font-medium m-3 group-hover:text-gray-400">{project.name}</h2>
        {children}
      </article>
      {showWindow && (
        <ProjectWindow
          project={project}
          setShowWindow={setShowWindow}
        />
      )}
    </>
  );
};

export default ProjectCard;
