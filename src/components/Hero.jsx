import profileImg from '../assets/selvam.jpg'
import { useState, useEffect } from 'react';
export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 200);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
const orbitIcons = [
  { icon: 'fab fa-python',   color: 'text-yellow-400' },
  { icon: 'fab fa-docker',   color: 'text-sky-400' },
  { icon: 'fas fa-database', color: 'text-green-400' },
  { icon: 'fab fa-react',    color: 'text-cyan-400' },
  { icon: 'fab fa-github',   color: 'text-gray-200' },
  { icon: 'fas fa-server',   color: 'text-purple-400' },
  { icon: 'fab fa-js',       color: 'text-yellow-300' },
  { icon: 'fab fa-git-alt',  color: 'text-orange-400' },
  { icon: 'fab fa-linux',    color: 'text-gray-300' },
];
  const socials = [
    { icon: 'fab fa-github',   url: 'https://github.com/Selvam-DG', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/selvamdasari55/', label: 'LinkedIn' },
    { icon: 'fab fa-xing',     url: 'https://www.xing.com/profile/Selvam_DasariGnanaprakash/web_profiles', label: 'Xing' },
    { icon: 'fas fa-envelope', url: 'mailto:dasariselvam321@gmail.com', label: 'Email' },
  ];

  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* gradient background — restored */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>

      {/* particles — restored */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Text */}
          <div className="lg:w-3/5 text-center lg:text-left space-y-5">
            <p className="text-blue-400 text-lg font-medium tracking-wide">Hello, I'm</p>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Selvam Dasari Gnanaprakash
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-blue-400">
              Software Engineer
            </p>

            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              I build backend systems in Python — REST APIs, relational schemas,
              authentication, Docker, deployment. Background in computer vision
              and industrial data systems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all hover:scale-105"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex gap-5 justify-center lg:justify-start pt-2 text-2xl">
              {socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="text-gray-400 hover:text-blue-400 transition-all hover:scale-125">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>


            <div className="lg:w-2/5 flex flex-col items-center gap-8 w-full">

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-40 animate-pulse"></div>
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1.5">
                  <img
                    src={profileImg}
                    alt="Selvam Dasari Gnanaprakash"
                    className="w-full h-full rounded-xl object-cover object-top"
                  />
                </div>
              </div>

              {/* flowing skill icons */}
              <div className="w-full max-w-sm overflow-hidden marquee-mask">
                <div className="flex gap-6 marquee-track">
                  {[...orbitIcons, ...orbitIcons].map((item, idx) => (
                    <div
                      key={idx}
                      className="w-14 h-14 flex-shrink-0 bg-slate-800/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg border-2 border-slate-700"
                    >
                      <i className={`${item.icon} text-2xl ${item.color}`}></i>
                    </div>
                  ))}
                </div>
              </div>

            </div>

        </div>
      </div>

      <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500 ${
            scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-bounce-slow'
          }`}
        >
        <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </button>
    </section>
  );
}