export default function Experience() {
  const experiences = [
    {
      title: "Independent Software Projects",
      company: "Self-employed",
      location: "Germany",
      period: "May 2026 - Present",
      type: "Freelance",
      icon: "🛠️",
      gradient: "from-blue-500 to-purple-600",
      tasks: [
        "Built and deployed LearnDeutsch — Flask REST API with SQLAlchemy over PostgreSQL, Alembic migrations, JWT authentication, React frontend, running live via Docker Compose with Gunicorn and Nginx",
        "Built LearnPulse — Flask REST API with MongoDB and Pydantic validation, JWT access/refresh token authentication, pytest suite covering admin auth and protected routes",
        "Deployed a Flask REST API with role-based access control to a K0s Kubernetes cluster from Docker Hub images",
        "Ongoing work with RAG and LLM-backed services (LangChain, FAISS, ChromaDB) and Neo4j graph databases"
      ]
    },
    {
      title: "Python Developer (Master's Thesis)",
      company: "Think3DDD GbR",
      location: "Berlin, Germany",
      period: "Oct 2025 - Apr 2026",
      type: "Internship",
      icon: "🎓",
      gradient: "from-green-500 to-cyan-500",
      tasks: [
        "Developed backend server modules that receive orthopedic video data, trigger reconstruction workflows, and return output files to the client",
        "Implemented automated image-quality gates in OpenCV and NumPy — blur detection and duplicate filtering — so unusable frames are rejected before reconstruction runs rather than after",
        "Built preprocessing stages (sharpening, normalization, enhancement) that improved reconstruction quality on raw scan data",
        "Evaluated reconstruction performance across multiple datasets using Python, OpenCV and scikit-image",
        "Master's thesis on optimizing photogrammetric reconstruction through preprocessing of raw images. Defended May 2026"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "fischer group",
      location: "Waldachtal, Germany",
      period: "Mar 2025 - Sep 2025",
      type: "Internship · Digital Twin project",
      icon: "💼",
      gradient: "from-blue-500 to-cyan-500",
      tasks: [
        "Built a Django web application for the R&D team with role-based access — an admin portal for creating, updating and deleting records, and a read-only view for standard users",
        "Integrated Microsoft Entra ID (Azure AD) authentication",
        "Migrated 1M+ records from SharePoint and Excel sources into MS SQL Server using Python workflows, including validation and reconciliation of inconsistent source data",
        "Designed the relational schema for the target MS SQL Server database",
        "Containerized the application with Docker and deployed it through Azure DevOps CI/CD pipelines",
        "Managed repositories and DevOps workflows in Azure DevOps; documented architecture and handover in Azure Boards and Wiki"
      ]
    },
    {
      title: "Executive – Mechanical Engineering",
      company: "MRF Limited",
      location: "Hyderabad, India",
      period: "Sep 2019 - Aug 2023",
      type: "Full-time",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
      tasks: [
        "Analyzed machine performance and downtime data from MES and SAP using Python (Pandas, Matplotlib) to improve MTTR and MTBF",
        "Built operational dashboards in Power BI and Tableau for production monitoring",
        "Maintained material master data and spare-part codes in SAP",
        "Supported commissioning of tyre building and bead apexing machines, analyzing PLC-driven data",
        "Applied Lean methods to reduce downtime and improve overall equipment effectiveness (OEE)"
      ]
    }
  ];

  const education = [
    {
      degree: "M.Sc. Engineering Sciences",
      school: "Technische Hochschule Rosenheim",
      location: "Germany",
      period: "Oct 2023 - 2026",
      icon: "🎓",
      gradient: "from-blue-500 to-purple-600",
      highlights: [
        "Master's thesis: Optimizing Photogrammetric Reconstruction through Preprocessing of Raw Images Using Sharpness and Similarity Analysis",
        "Master's project: Stereo Vision for Part Localization (12 ECTS)",
        "Coursework: Image Processing for Automated Production, Machine Learning for Engineers, Model-Based Development"
      ]
    },
    {
      degree: "B.Tech. Mechanical Engineering",
      school: "Pondicherry Engineering College",
      location: "India",
      period: "Aug 2015 - Apr 2019",
      icon: "🎓",
      gradient: "from-orange-500 to-red-500",
      highlights: [
        "First Class with Distinction"
      ]
    },
    {
      degree: "Berufssprachkurs Deutsch B2",
      school: "PetersBILDUNGS Gruppe",
      location: "Germany",
      period: "Jun 2026 - Nov 2026",
      icon: "🗣️",
      gradient: "from-green-500 to-teal-500",
      highlights: [
        "Professional German language course, B2 level"
      ]
    }
  ];

  const certifications = [
    { name: "Docker and Kubernetes", issuer: "Udemy", date: "Oct 2025", icon: "fab fa-docker" },
    { name: "SQL and PostgreSQL", issuer: "Udemy", date: "Nov 2023", icon: "fas fa-database" },
    { name: "Neo4j Certified Professional", issuer: "Neo4j", date: "Jul 2026", icon: "fas fa-project-diagram" },
    { name: "Neo4j & Generative AI Fundamentals", issuer: "Neo4j", date: "Jul 2026", icon: "fas fa-robot" },
    { name: "Machine Learning for Engineers", issuer: "FAU Erlangen-Nürnberg", date: "Apr 2024", icon: "fas fa-brain" },
    { name: "Data Science and AI Certification", issuer: "IBM", date: "Mar 2024", icon: "fas fa-certificate" }
  ];


  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">💼</span>
            Work Experience
          </h3>
          
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all card-hover"
              >
                {/* Gradient Top Border */}
                <div className={`h-1 bg-gradient-to-r ${exp.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}>
                      {exp.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                          <p className="text-gray-400 text-sm">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            {exp.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="inline-block bg-slate-800 px-4 py-2 rounded-full">
                            <p className="text-sm text-gray-300">
                              <i className="fas fa-calendar mr-2"></i>
                              {exp.period}
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">{exp.type}</p>
                        </div>
                      </div>

                      {/* Tasks */}
                      <ul className="space-y-2">
                        {exp.tasks.map((task, taskIdx) => (
                          <li key={taskIdx} className="flex items-start gap-3 text-gray-300">
                            <i className="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🎓</span>
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all card-hover"
              >
                <div className={`h-1 bg-gradient-to-r ${edu.gradient}`}></div>
                
                <div className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${edu.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                    {edu.icon}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-4">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {edu.location} | {edu.period}
                  </p>
                  
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <i className="fas fa-star text-yellow-400 mt-1 flex-shrink-0"></i>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">📜</span>
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all hover:scale-105 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${cert.icon} text-white text-xl`}></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.issuer} | {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}