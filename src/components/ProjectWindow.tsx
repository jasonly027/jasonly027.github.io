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
        className="fixed left-0 top-[3.5rem] z-10 size-full bg-black opacity-30"
      ></div>
      <article className="fixed bottom-1/2 right-1/2 z-20 flex max-h-[75vh] translate-x-1/2 translate-y-1/2 flex-col space-y-2 overflow-auto rounded-lg border-2 border-gray-400 bg-darkp p-4 text-boneDark max-[425px]:w-full">
        <div className="flex flex-row items-baseline justify-between">
          <h1 className="text-2xl font-medium text-bone">{project.name}</h1>
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
        <p>{project.description}</p>
        <p className="flex flex-row flex-wrap items-baseline gap-y-1">
          Languages -
          {project.languages.map((language) => (
            <span className="mx-1 rounded-lg bg-lightp p-1 font-bold">
              {language}
            </span>
          ))}
        </p>
        <p className="flex flex-row flex-wrap items-baseline gap-y-1">
          Tools -
          {project.tools.map((tool) => (
            <span className="mx-1 rounded-lg bg-amethyst p-1 font-bold">
              {tool}
            </span>
          ))}
        </p>
        {project.github && (
          <a
            className="group flex items-center space-x-2 hover:text-gray-400"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 fill-current"
              viewBox="0 0 98 96"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              ></path>
            </svg>
            <span className="text-lightp underline group-visited:text-amethyst">
              GitHub
            </span>
          </a>
        )}
      </article>
    </>
  );
};

export default ProjectWindow;
