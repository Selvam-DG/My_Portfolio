import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90, icon: "fab fa-python" },
        { name: "JavaScript", level: 85, icon: "fab fa-js" },
        { name: "C/C++", level: 75, icon: "fas fa-code" },
        { name: "SQL", level: 80, icon: "fas fa-database" }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 85, icon: "fab fa-react" },
        { name: "Django", level: 85, icon: "fas fa-server" },
        { name: "HTML/CSS", level: 90, icon: "fab fa-html5" },
        { name: "Tailwind CSS", level: 85, icon: "fas fa-palette" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      gradient: "from-green-500 to-teal-500",
      skills: [
        { name: "TensorFlow", level: 80, icon: "fas fa-brain" },
        { name: "OpenCV", level: 80, icon: "fas fa-camera" },
        { name: "Scikit-Learn", level: 85, icon: "fas fa-chart-line" },
        { name: "Hugging Face Transformers", level: 75, icon: "fas fa-table" },
        { name: "MCPs", level: 70, icon: "fas fa-rss" },
        { name: "Pandas/NumPy", level: 90, icon: "fas fa-table" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: "📊",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Tableau", level: 80, icon: "fas fa-chart-bar" },
        { name: "Power BI", level: 85, icon: "fas fa-chart-pie" },
        { name: "PostgreSQL", level: 80, icon: "fas fa-database" },
        { name: "KNIME", level: 70, icon: "fas fa-project-diagram" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "⚙️",
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git/GitHub", level: 85, icon: "fab fa-github" },
        { name: "Docker", level: 70, icon: "fab fa-docker" },
        { name: "VS Code", level: 90, icon: "fas fa-code" },
        { name: "Jupyter", level: 85, icon: "fas fa-book" }
      ]
    },
    {
      title: "Specializations",
      icon: "🎯",
      gradient: "from-pink-500 to-rose-500",
      skills: [
        { name: "Computer Vision", level: 80, icon: "fas fa-eye" },
        { name: "Data Analysis", level: 90, icon: "fas fa-chart-area" },
        { name: "Digital Twin", level: 75, icon: "fas fa-cube" },
        { name: "REST APIs", level: 80, icon: "fas fa-plug" }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Technologies & Tools I Master</p>
        </div>

        {/* Skills Grid with Moving Frame Effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Moving Border Frame */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r opacity-75 rounded-2xl blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"
                style={{
                  backgroundImage: `linear-gradient(45deg, ${category.gradient.replace('from-', '#').replace(' to-', ', #')})`
                }}
              ></div>

              {/* Card Content */}
              <div className="relative bg-slate-900 rounded-2xl p-6 h-full">
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <i className={`${skill.icon} text-gray-400 group-hover/skill:text-blue-400 transition-colors`}></i>
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${idx * 0.1 + skillIdx * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-white">Additional </span>
            <span className="text-gradient">Technologies</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'NumPy', 'Matplotlib', 'Seaborn', 'Flask', 'FastAPI',
              'MongoDB', 'MySQL', 'Redis', 'AWS', 'Linux',
              'Bash', 'CI/CD', 'Agile', 'Scrum', 'REST API',
              'Minitab', 'Excel', 'SAP', 'MES', 'Lean Six Sigma'
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 text-gray-300 rounded-full text-sm font-medium border border-slate-600 hover:border-blue-500 hover:text-white transition-all hover:scale-110 cursor-default"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}