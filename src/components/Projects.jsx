import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState(null);
  const [expandedAcademic, setExpandedAcademic] = useState(null);

    const projects = [
    {
      title: "LearnDeutsch — German Learning Platform",
      description: "Live German vocabulary and typing-practice platform, built and deployed end to end.",
      details: "Flask REST API with SQLAlchemy over PostgreSQL, schema evolution managed through Alembic migrations, JWT authentication protecting admin CRUD routes. Bidirectional German–English search, deterministic daily vocabulary selection, timed typing practice with accuracy scoring, and draft/published states for content. React + Vite + TailwindCSS frontend. Deployed via Docker Compose with Gunicorn serving the API and Nginx serving the static build.",
      stack: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Alembic", "JWT", "React", "Docker", "Nginx"],
      category: "Full-Stack",
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/Selvam-DG/learn-german",
      demo: "https://learndeutsch.selvam-dg.xyz",
      icon: "fas fa-book-open"
    },
    {
      title: "Book Review Platform — REST API on Kubernetes",
      description: "REST API with role-based access control, deployed to a Kubernetes cluster.",
      details: "Deployed to a K0s Kubernetes cluster from images published on Docker Hub. Five related entities with cascading deletes and a database-level constraint enforcing one review per user per book. JWT authentication with role-based access control separating admin and user permissions, Werkzeug password hashing, token expiry handling. Centralized error handling and a health-check endpoint for cluster probes; stateless API pods with environment-based configuration.",
      stack: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT", "Docker", "Kubernetes", "TypeScript"],
      category: "Backend",
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/Selvam-DG/book_review_platform",
      demo: null,
      icon: "fas fa-server"
    },
    {
      title: "LearnPulse — Concept-Card Learning Platform",
      description: "Live concept-card learning platform with a tested admin API.",
      details: "Flask REST API with MongoDB, request validation via Pydantic, JWT access and refresh token authentication guarding the admin panel, indexed collections for topic and full-text search. Test suite in pytest covering admin authentication, protected routes and health checks. React + Vite frontend with markdown rendering and PrismJS syntax highlighting, containerized with Docker Compose.",
      stack: ["Python", "Flask", "MongoDB", "Pydantic", "JWT", "pytest", "React", "Docker"],
      category: "Full-Stack",
      gradient: "from-indigo-500 to-blue-500",
      github: "https://github.com/Selvam-DG/learnPulse",
      demo: "https://learnpulse.selvam-dg.xyz",
      icon: "fas fa-book"
    },
    {
      title: "E-commerce API",
      description: "Django REST API for product catalog, cart and order workflows.",
      details: "Built with Django REST Framework over PostgreSQL. JWT authentication with role-based access across customer, vendor and admin roles; product catalog with category hierarchies and inventory tracking; cart and order workflows. Dockerized with a pytest test suite and OpenAPI documentation via drf-spectacular.",
      stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Docker", "pytest"],
      category: "Backend",
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/Selvam-DG/ecommerce-api",
      demo: null,
      icon: "fas fa-shop"
    },
    {
      title: "RAG Document Search",
      description: "Retrieval-augmented search over PDF documents, comparing two vector stores.",
      details: "Text extraction with PyMuPDF, configurable chunking, sentence embeddings indexed in both FAISS and ChromaDB for comparison, and answer generation through Groq LLMs via LangChain. Persistent vector indices with incremental document addition, and relevance scoring on retrieved chunks.",
      stack: ["Python", "LangChain", "FAISS", "ChromaDB", "Groq", "PyMuPDF"],
      category: "AI",
      gradient: "from-green-500 to-purple-500",
      github: "https://github.com/Selvam-DG/RAG-project1-langchain",
      demo: null,
      icon: "fas fa-magnifying-glass"
    },
    {
      title: "Neo4j GraphRAG Movie Assistant",
      description: "Graph-backed retrieval assistant combining Cypher traversal with LLM generation.",
      details: "Cypher queries traverse relationships between users, films, genres and people in a movie knowledge graph to retrieve context, which is then passed to an LLM for answer generation — combining graph traversal with generative retrieval rather than relying on vector similarity alone.",
      stack: ["Python", "Neo4j", "Cypher", "LangChain", "LLM APIs"],
      category: "AI",
      gradient: "from-cyan-500 to-blue-500",
      github: "https://github.com/Selvam-DG/neo4j-graphrag-movie-assistant",
      demo: null,
      icon: "fas fa-project-diagram"
    },
    {
      title: "Photogrammetry Image Preprocessing",
      description: "OpenCV pipeline that scores and preprocesses scan images before 3D reconstruction.",
      details: "Modular OpenCV and scikit-image pipeline improving lighting, contrast and noise in raw scan images, with automated quality scoring for sharpness and redundancy. Developed as part of Master's thesis work on optimizing photogrammetric reconstruction.",
      stack: ["Python", "OpenCV", "scikit-image", "NumPy", "Computer Vision"],
      category: "AI",
      gradient: "from-pink-500 to-rose-500",
      github: "https://github.com/Selvam-DG/photogrammetry-image-preprocessing",
      demo: null,
      icon: "fas fa-camera"
    }
  ];

    const academicProjects = [
    {
      title: "Optimizing Photogrammetric Reconstruction through Preprocessing of Raw Images",
      period: "October 2025 – April 2026",
      type: "Master's Thesis · 25 ECTS · Defended May 2026",
      institution: "TH Rosenheim, in collaboration with Think3DDD GbR, Berlin",
      description: "Automated image-quality assessment to improve 3D reconstruction from raw scan data.",
      details: "Photogrammetric reconstruction degrades when input images are blurred or redundant, and the cost only becomes visible after a long reconstruction run. I built quality gates in OpenCV and NumPy that score frames for sharpness and similarity before reconstruction, rejecting unusable input up front rather than after. Alongside this, preprocessing stages for sharpening, normalization and enhancement improve the images that do pass. Performance was evaluated across multiple datasets using Python, OpenCV, scikit-image and custom evaluation pipelines.",
      github: "https://github.com/Selvam-DG/Master-Thesis",
      stack: ["Python", "OpenCV", "scikit-image", "NumPy", "Photogrammetry"]
    },
    {
      title: "Stereo Vision-Based Depth Estimation for Part Localization",
      period: "February 2024 – July 2024",
      type: "Master's Project · 12 ECTS",
      institution: "Technische Hochschule Rosenheim",
      description: "Stereo camera system for locating jumbled, occluded parts in a bin for robotic picking.",
      details: "Robotic bin-picking needs 3D coordinates for objects that are non-oriented, overlapping and partially hidden. I configured a stereo camera setup using Alvium G1-240m/c cameras, calibrated it with OpenCV chessboard-pattern calibration to correct lens distortion, and built a pipeline computing disparity maps through stereo matching. From the 2D disparity data the pipeline extracts 3D spatial coordinates for each detected part. The system was validated for accuracy and reliability across a range of real-world test scenarios.",
      github: "https://github.com/Selvam-DG/Stereo_Vision_3d",
      stack: ["Python", "OpenCV", "C++", "NumPy", "Computer Vision"]
    }
  ];

  const categories = ['All', 'Full-Stack', 'Backend', 'AI'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);
  
  const handleCategoryChange = (category) => {
  setActiveCategory(category);
  setExpanded(null);
  };

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
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    {project.details && (
                      <>
                        {expanded === idx && (
                          <p className="text-gray-400 text-sm mb-3 leading-relaxed border-l-2 border-slate-700 pl-3">
                            {project.details}
                          </p>
                        )}
                        <button
                          onClick={() => setExpanded(expanded === idx ? null : idx)}
                          className="text-blue-400 text-xs font-semibold mb-4 hover:text-blue-300 transition-colors"
                        >
                          {expanded === idx ? 'Show less' : 'Technical details →'}
                        </button>
                      </>
                    )}
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
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-blue-400 font-semibold mb-1">{project.institution}</p>
                    <p className="text-sm text-gray-400 mb-4">
                      <i className="fas fa-calendar mr-2"></i>
                      {project.period} · {project.type}
                    </p>

                    <p className="text-gray-300 mb-3 leading-relaxed">{project.description}</p>

                    {expandedAcademic === idx && (
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed border-l-2 border-slate-700 pl-3">
                        {project.details}
                      </p>
                    )}

                    <button
                      onClick={() => setExpandedAcademic(expandedAcademic === idx ? null : idx)}
                      className="text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors"
                    >
                      {expandedAcademic === idx ? 'Show less' : 'Technical details →'}
                    </button>

                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      {project.stack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <i className="fab fa-github"></i>
                        View on GitHub
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
  </section>
  );

}