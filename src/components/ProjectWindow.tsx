import { useEffect } from "react";
import type { Project } from "../types/Project";

interface Props {
  project: Project;
  setShowWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectWindow: React.FC<Props> = ({ project, setShowWindow }) => {
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key == "Escape") {
        setShowWindow(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setShowWindow(false)}
        className="fixed size-full z-10 top-[3.5rem] left-0 bg-black opacity-30"
      ></div>
      <article className="fixed text-boneDark flex flex-col space-y-4 min-w-96 p-4 bg-darkp border-gray-400 border-2 rounded-xl z-20 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
        <div className="flex flex-row items-baseline justify-between">
          <h1 className="text-2xl font-medium  text-bone">{project.name}</h1>
          <svg
            onClick={() => setShowWindow(false)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="size-6 cursor-pointer hover:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div className="break-words max-w-2xl">
          <p>{project.description}</p>
          <p>
            Languages -
            {project.languages.map((language) => (
              <span className="mx-1 p-1 bg-lightp rounded-lg font-bold">{language}</span>
            ))}
          </p>
          <p>
            Tools -
            {project.tools.map((tool) => (
              <span className="mx-1 p-1 bg-amethyst rounded-lg font-bold">{tool}</span>
            ))}
          </p>
        </div>
      </article>
    </>
  );
};

export default ProjectWindow;
