
// https://weather-forecast-g4wg.onrender.com
export default function DjangoProject() {
    const projects = [
    {
        title: "Weather Forecast App",
        description:
        "A Django-powered web application that displays real-time weather data for any city using the Weather API. Users can search for a location and receive live temperature, humidity, and conditions.",
        image: "/images/weather_forecast.jpg",
        github: "https://github.com/Selvam-DG/Weather-Dashboard-Django-Project-",
        demo: "https://weather-dashboard-django.onrender.com",
    },
    {
        title: "Personal Blog CMS",
        description:
        "A full-featured blogging platform with user authentication, post creation, editing, and comments.",
        image: "/images/blog.png",
        github: "https://github.com/Selvam-DG/Django_Blog",
        demo: null,
    },
    {
        title: "Efficio -Project Management ",
        description:
        "Django To-Do app to manage tasks with priority labels, deadlines, and user-based access.",
        image: "/images/project-management.jpg",
        github: "https://github.com/Selvam-DG/Efficio",
        demo: null,
    },
    ];
    
    ;
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
            <section className="mb-12">
                <h1 className="text-4xl font-bold text-center bg-gray-400 p-3 ">Django Projects</h1>
            </section>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm border border-gray-400 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
     );

    
};
