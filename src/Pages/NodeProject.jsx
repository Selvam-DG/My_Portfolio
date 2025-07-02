import React from "react";

const nodeProjects = [
  {
    title: "SpendSense",
    description:
      "A smart budgeting and expense tracking app built with React (Vite), Tailwind CSS, and Firebase. Real-time sync, analytics, and authentication included.",
    image: "/images/spendsense.jpg",
    github: "https://github.com/yourusername/spendsense",
    demo: "https://spendsense.web.app",
    tech: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "Weather Forecast (React)",
    description:
      "A modern weather app using React (Vite), Tailwind, and Weather API. Shows real-time forecasts for searched locations with temperature, conditions, and more.",
    image: "/images/weather_react.jpg",
    github: "https://github.com/yourusername/weather-react",
    demo: "https://weather-react-demo.netlify.app",
    tech: ["React", "Tailwind", "WeatherAPI"],
  },
  {
    title: "Task CLI Tool",
    description:
      "A Node.js CLI task management tool with custom commands and JSON storage. Perfect for quick local task tracking from your terminal.",
    image: "/images/node_task_cli.jpg",
    github: "https://github.com/yourusername/node-task-cli",
    demo: null,
    tech: ["Node.js", "CLI", "JSON"],
  },
];

export default function nodeProject() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Node.js Projects</h1>
        <p className="text-gray-400 text-sm">Modern fullstack & CLI projects powered by Node.js</p>
      </section>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {nodeProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white text-sm px-3 py-1 rounded hover:bg-white/10"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
