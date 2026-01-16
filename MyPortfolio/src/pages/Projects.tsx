import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  vercel: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("./data.json").then((response) =>
      response
        .json()
        .then((data: Project[]) => {
          setProjects(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch projects:", error);
          setLoading(false);
        })
    );
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading Projects...</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-20 px-4">
      <div>
        <header className="text-center bg-amber-300 mb-5 py-4">
          <h1 className="text-4xl font-bold mb-2">My Project</h1>
          <p>Projects I have done to learn and practice</p>
        </header>
        <section className=" mb-5 py-5 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div key={project.id}className="bg-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-2xl text-center font-bold text-gray-800 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((techno, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium"
                      >
                        {techno}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Projects;
