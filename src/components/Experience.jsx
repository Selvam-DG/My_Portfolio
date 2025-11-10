export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern - Digital Twin",
      company: "fischer group",
      location: "Waldachtal, Germany",
      period: "Mar 2025 - Sept 2025",
      type: "Internship",
      icon: "💼",
      gradient: "from-blue-500 to-cyan-500",
      tasks: [
        "Designed and implemented structured SQL Server database using SSMS for organizational data",
        "Applied data normalization principles to optimize data relationships and scalability",
        "Developed Python scripts for automating data ingestion and processing",
        "Built web application using Django (backend) and HTML, CSS, JavaScript (frontend)"
      ]
    },
    {
      title: "Data & Process Analyst",
      company: "MRF Tyres Ltd.",
      location: "India",
      period: "Oct 2021 - Aug 2023",
      type: "Full-time",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
      tasks: [
        "Analyzed machine performance and delay data from MES and SAP using SQL and Excel to improve KPIs",
        "Created dashboards with Power BI, Tableau, and Python for operational insights",
        "Managed material master data and spare parts in SAP, improving resource planning",
        "Applied Lean principles to reduce machine downtime and improve OEE"
      ]
    },
    {
      title: "Research Intern",
      company: "Indian Institute of Science (IISc)",
      location: "Bengaluru, India",
      period: "May 2018 - Aug 2018",
      type: "Internship",
      icon: "🔬",
      gradient: "from-green-500 to-teal-500",
      tasks: [
        "Gained hands-on experience in applied research and engineering data analysis",
        "Worked on experimental data collection and statistical analysis projects"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Engineering Sciences ",
      school: "Technische Hochschule Rosenheim",
      location: "Germany",
      period: "Oct 2023 - Dec 2025",
      icon: "🎓",
      gradient: "from-blue-500 to-purple-600",
      highlights: [
        "Specialization in Mechatronics (AI, ML, CV)",
        "Focus: Machine Learning, Computer Vision, Image Processing",
        "Advanced Mathematics, Statistics, Data Science"
      ]
    },
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      school: "Pondicherry University",
      location: "India",
      period: "Aug 2015 - Apr 2019",
      icon: "🎓",
      gradient: "from-orange-500 to-red-500",
      highlights: [
        "First Class with Distinction",
        "Thesis: Failure Analysis of Starter Motor using Statistical Data Analysis"
      ]
    }
  ];

  const certifications = [
    { name: "Data Science and AI Certification", issuer: "IBM", date: "Mar 2024", icon: "fas fa-certificate" },
    { name: "Machine Learning for Engineers", issuer: "FAU Erlangen", date: "Aug 2023", icon: "fas fa-robot" },
    { name: "Complete Data Science Bootcamp", issuer: "Udemy", date: "Feb 2024", icon: "fas fa-graduation-cap" },
    { name: "SQL & PostgreSQL", issuer: "Udemy", date: "Mar 2023", icon: "fas fa-database" }
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