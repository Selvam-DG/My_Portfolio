export default function About() {
  const highlights = [
    {
      icon: '🎓',
      title: 'Education',
      description: "M.Sc. Engineering Sciences",
      subtitle: 'TH Rosenheim, 2026',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💼',
      title: 'Software Experience',
      description: '14 months in Germany',
      subtitle: 'fischer group · Think3DDD',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '⚙️',
      title: 'Prior Career',
      description: '4 years engineering',
      subtitle: 'Process analytics & production systems',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '🎯',
      title: 'Focus',
      description: 'Backend Systems',
      subtitle: 'Python · APIs · Databases · Docker',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Background and how I work</p>
        </div>

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

        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p className="text-lg">
              I'm a software engineer working mainly in Python — REST APIs, relational
              schemas, authentication, containers, deployment. I finished my Master's
              in Engineering Sciences at TH Rosenheim in 2026, and spent most of that
              degree building software rather than only studying it.
            </p>

            <p className="text-lg">
              <span className="text-blue-400 font-semibold">At fischer group</span>, I worked
              on the Digital Twin project as a Software Engineer Intern. I designed the
              relational schema for a new MS SQL Server database, wrote the Python workflows
              that migrated and validated over a million records from scattered SharePoint
              and Excel sources, and built the Django application the R&D team uses to work
              with that data — role-based access, Entra ID authentication, containerized with
              Docker and deployed through Azure DevOps.
            </p>

            <p className="text-lg">
              <span className="text-purple-400 font-semibold">At Think3DDD</span>, I built
              backend modules that receive orthopedic video data and orchestrate reconstruction
              workflows, and wrote my Master's thesis on improving photogrammetric 3D
              reconstruction. The core of it was an automated image-quality gate in OpenCV —
              scoring frames for sharpness and similarity so unusable input is rejected before
              reconstruction runs rather than after.
            </p>

            <p className="text-lg">
              <span className="text-orange-400 font-semibold">Before software</span>, I spent
              four years at MRF in mechanical engineering and process analytics — Python
              analysis of MES and SAP data, Power BI dashboards for machine performance, and
              PLC-controlled production systems. That's where I learned what happens when data
              is wrong and when a system fails at three in the morning, which still shapes how
              I build things.
            </p>

            <p className="text-lg">
              <span className="text-green-400 font-semibold">Currently</span> I'm building
              backend projects end to end — API design, database schema, authentication,
              tests, Docker, deployment, documentation — and looking for full-time software
              engineering roles in Germany and the EU.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}