export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Python", "Django", "Flask", "REST APIs", "SQLAlchemy", "Pydantic", "JWT Authentication", "Gunicorn"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      gradient: "from-indigo-500 to-purple-500",
      skills: ["PostgreSQL", "MS SQL Server", "MongoDB", "Neo4j", "SQL", "Cypher", "Schema Design", "Alembic Migrations"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-500",
      skills: ["Docker", "Docker Compose", "Kubernetes", "CI/CD", "Azure DevOps", "Git", "Nginx", "Linux"]
    },
    {
      title: "Frontend",
      icon: "🌐",
      gradient: "from-cyan-500 to-blue-500",
      skills: ["React", "Vite", "TypeScript", "JavaScript", "TailwindCSS", "HTML/CSS"]
    },
    {
      title: "Data",
      icon: "📊",
      gradient: "from-orange-500 to-red-500",
      skills: ["Pandas", "NumPy", "Matplotlib", "Data Migration", "Data Validation", "Power BI", "SAP", "MES"]
    },
    {
      title: "Applied AI & Computer Vision",
      icon: "🔬",
      gradient: "from-green-500 to-teal-500",
      skills: ["OpenCV", "scikit-image", "LangChain", "RAG", "FAISS", "ChromaDB", "LLM APIs", "Photogrammetry"]
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all card-hover group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-slate-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-700 hover:border-blue-500 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Prior industrial experience: Siemens PLC systems, Lean methods, MATLAB, Minitab.
        </p>
      </div>
    </section>
  );
}