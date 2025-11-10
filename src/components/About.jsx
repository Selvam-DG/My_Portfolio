export default function About() {
  const highlights = [
    {
      icon: '🎓',
      title: 'Education',
      description: "Master's in Engineering Sciences",
      subtitle: 'Technische Hochschule Rosenheim',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💼',
      title: 'Experience',
      description: 'Software Engineer Intern',
      subtitle: 'fischer group - Digital Twin',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🚀',
      title: 'Experience',
      description: '3+ Years',
      subtitle: 'Data Analysis & Engineering',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '🎯',
      title: 'Specialization',
      description: 'AI & ML Systems',
      subtitle: 'Computer Vision & Data Science',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-blue-400 font-semibold mb-1">{item.description}</p>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              <span className="text-blue-400 font-semibold">🎓 Academic Background:</span> I'm a passionate Master's student in Engineering Sciences (Mechatronics) at Technische Hochschule Rosenheim, driven by a strong interest in bridging intelligent software with real-world systems. My academic journey has equipped me with a solid foundation in machine learning, computer vision, image processing, and data science.
            </p>

            <p className="text-lg">
              <span className="text-purple-400 font-semibold">💻 Professional Experience:</span> Currently working as a Software Engineer Intern - Digital Twin at fischer group, where I contribute to developing internal tools that support data-driven decision-making. This hands-on role has enhanced my skills in Python, Django, web development, and database management using SQL Server and SSMS.
            </p>

            <p className="text-lg">
              <span className="text-green-400 font-semibold">🔍 Passion & Interests:</span> I'm especially excited by the intersection of AI, automation, and intelligent systems. I enjoy applying my engineering mindset to solve technical challenges in innovative ways, from developing machine learning models to building scalable full-stack applications.
            </p>

            <p className="text-lg">
              <span className="text-orange-400 font-semibold">🌟 What Sets Me Apart:</span> My hybrid profile combines a mechanical engineering background, strong coding skills, and growing expertise in intelligent technologies — all aimed at building smarter, more autonomous systems that make a real-world impact.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Technologies' },
              { number: '100%', label: 'Dedication' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group cursor-default">
                <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}