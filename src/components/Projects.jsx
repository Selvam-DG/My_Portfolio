import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: "Book Review Platform",
      description: "A Web application to view, post or update Review of the Books.",
      stack: ["Flask API", "React-TypeScript", "Postgres", "Kubernetes"],
      category: "Full-Stack",
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/Selvam-DG/book_review_platform",
      demo: null,
      icon: "fas fa-tasks"
    },
    {
      title: "RAG-LangChain-GroqLLMs",
      description: "A Retrival Augmetented Generative AI project using LangChain Groq LLMs with custom dataset.",
      stack: ["Python", "LangChain", "GROQ-LLMs", "ChromaDB"],
      category: "AI",
      gradient: "from-green-500 to-purple-500",
      github: "https://github.com/Selvam-DG/RAG-project1-langchain",
      demo: null,
      icon: "fas fa-database"
    },
    {
      title: "API Mastery",
      description: "A basic projects to understand different types of APIs.",
      stack: ["Python","APIs"],
      category: "Backend",
      gradient: "from-pink-500 to-purple-500",
      github: "https://github.com/Selvam-DG/API-mastery",
      demo: null,
      icon: "fas fa-rss"
    },
    {
      title: "Efficio - Project Management",
      description: "A role-based project management platform for tracking projects and tasks across all employees in an organization with real-time updates.",
      stack: ["Django REST", "React", "SQLite", "REST API"],
      category: "Full-Stack",
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/Selvam-DG/Efficio",
      demo: null,
      icon: "fas fa-tasks"
    },
    {
      title: "MCP-Demo",
      description: "A small demo mcp project to make mcp servers and clients, and give responses to user queries.",
      stack: ["Python", "LangChain", "OpenRouter", "Groq-llms"],
      category: "AI",
      gradient: "from-red-500 to-orange-500",
      github: "https://github.com/Selvam-DG/mcp-project-openrouter",
      icon: "fa fa-desktop"
    },
    {
      title: "SpendaliQ - Expense Tracker",
      description: "An intuitive personal expense tracker with user authentication, real-time data sync and cloud storage using Firebase.",
      stack: ["React", "Firebase", "Tailwind CSS", "Authentication"],
      category: "Full-Stack",
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/Selvam-DG/SpendaliQ",
      demo: null,
      icon: "fas fa-wallet"
    },
    {
      title: "Blog Platform - DSRT",
      description: "A modern blog application with decoupled architecture using Django APIs, Supabase for backend services, and React frontend.",
      stack: ["Django REST", "Supabase", "React", "PostgreSQL"],
      category: "Full-Stack",
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/Selvam-DG/Blog-DSRT",
      demo: "https://blog-drp.vercel.app/",
      icon: "fas fa-blog"
    },
    {
      title: "Weather Dashboard",
      description: "A weather visualization dashboard that fetches real-time weather data via OpenMeteo API with responsive and modern UI design.",
      stack: ["React", "Tailwind CSS", "OpenMeteo API", "Charts"],
      category: "Frontend",
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/Selvam-DG/Weather-Dashboard",
      demo: "https://weather-om.vercel.app/",
      icon: "fas fa-cloud-sun"
    },
    {
      title: "Stereo Vision Depth Estimation",
      description: "Master's project for part localization using stereo camera system, calibration with OpenCV, and 3D coordinate extraction.",
      stack: ["Python", "OpenCV", "Computer Vision", "NumPy"],
      category: "AI",
      gradient: "from-indigo-500 to-purple-500",
      github: null,
      demo: null,
      icon: "fas fa-camera"
    },
    {
      title: "ML Models - Titanic Dataset",
      description: "Implemented comprehensive EDA and RandomForest classification models on Titanic Dataset as part of Kaggle competitions.",
      stack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      category: "Data Science",
      gradient: "from-pink-500 to-rose-500",
      github: null,
      kaggle: "https://www.kaggle.com/code/dgselvam/titanic-dataset",
      icon: "fas fa-ship"
    }
  ];

  const academicProjects = [
    {
      title: "Stereo Vision-Based Depth Estimation for Part Localization",
      period: "February 2024 - July 2024",
      type: "Master's Project",
      institution: "Technische Hochschule Rosenheim, Germany",
      points: [
        "Installed and configured a stereo camera system for depth estimation",
        "Performed stereo camera calibration using OpenCV to correct distortion",
        "Developed pipeline to compute disparity maps using stereo match algorithms",
        "Extracted 3D spatial coordinates (X,Y,Z) from 2D disparity data"
      ]
    },
    {
      title: "Failure Analysis of Starter Motor using Statistical Data Analysis",
      period: "January 2019 - May 2019",
      type: "Bachelor Thesis",
      institution: "Lucas TVS Ltd., Puducherry, India",
      points: [
        "Conducted failure analysis of starter motors based on surge fail test",
        "Utilized Minitab for statistical data analysis and process capability studies",
        "Applied DMAIC methodology to structure root cause analysis process",
        "Recommended corrective actions to improve manufacturing quality"
      ]
    }
  ];

  const categories = ['All','AI', 'Full-Stack', 'Frontend', 'Backend', 'Data Science'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);
    

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg">Showcasing my recent work and innovations</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all card-hover"
                >
                  {/* Gradient Top Border with Animation */}
                  <div className={`h-1 bg-gradient-to-r ${project.gradient} animate-gradient`}></div>

                  <div className="p-6">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                        <i className={`${project.icon} text-white`}></i>
                      </div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-700 hover:border-blue-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 bg-gradient-to-r ${project.gradient} text-white py-2 px-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2`}
                        >
                          <i className="fab fa-github"></i>
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-800 text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-slate-700 transition-all text-sm flex items-center justify-center gap-2"
                        >
                          <i className="fas fa-external-link-alt"></i>
                          Demo
                        </a>
                      )}
                      {project.kaggle && (
                        <a
                          href={project.kaggle}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-all text-sm flex items-center justify-center gap-2"
                        >
                          <i className="fab fa-kaggle"></i>
                          Kaggle
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Projects Section */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-4xl">📘</span>
                Academic Projects
              </h3>
              
              <div className="space-y-6">
                {academicProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/50 rounded-xl p-6 border-l-4 border-blue-500 hover:bg-slate-800 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                        <p className="text-blue-400 font-semibold mb-1">{project.institution}</p>
                        <p className="text-sm text-gray-400">
                          <i className="fas fa-calendar mr-2"></i>
                          {project.period} | {project.type}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {project.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start gap-3 text-gray-300">
                          <i className="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
  </section>
  );

}