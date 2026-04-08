import Button from "./button";

interface CardProps {
  projects: {
    title: string;
    description: string;
    imageUrl: string;
    id: number;
  }[];
}

function CardList({ projects = [] }: CardProps) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {projects.map((project) => (
        <div
          className="bg-neutral-primary-soft block max-w-sm border border-gray-300 rounded-2xl shadow-xs hover:shadow-lg transition-shadow duration-300"
          key={project.id}
        >
          <a href="#">
            <img
              className="rounded-t-2xl"
              src={project.imageUrl}
              alt={project.title}
            />
          </a>
          <div className="p-6 text-center">
            <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
              <svg
                className="w-3 h-3 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
                />
              </svg>
              Trending
            </span>
            <a href="#">
              <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-heading">
                {project.title}
              </h5>
            </a>
            <p className="mb-6 text-sm text-gray-500">{project.description}</p>
            <a
              href="#"
            >
              <Button text="Voir Plus ->" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
