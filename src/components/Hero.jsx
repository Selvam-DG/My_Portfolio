import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Software Engineer', 'AI Explorer', 'ML Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="space-y-2 fade-in-1">
              <p className="text-blue-400 text-lg font-medium tracking-wide">
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Selvam DG</span>
                <br />
                
              </h1>
            </div>

            <div className="h-16 fade-in-2">
              <p className="text-2xl md:text-3xl text-gray-300">
                <span className="text-blue-400 font-semibold">{displayText}</span>
                <span className="cursor-blink text-purple-400">|</span>
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl fade-in-3">
              Passionate about bridging intelligent software with real-world systems through 
              <span className="text-blue-400 font-semibold"> Artificial Intelligence</span>, 
              <span className="text-cyan-400 font-semibold"> Machine Learning</span>, and 
              <span className="text-green-400 font-semibold"> Full-Stack Development</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start fade-in-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 ripple"
              >
                <i className="fas fa-rocket mr-2"></i>
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all hover:scale-105"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start fade-in-5">
              {[
                { icon: 'fab fa-github', url: 'https://github.com/Selvam-DG', color: 'hover:text-white' },
                { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/selvamdasari55/', color: 'hover:text-blue-400' },
                { icon: 'fab fa-kaggle', url: 'https://www.kaggle.com/dgselvam', color: 'hover:text-cyan-400' },
                { icon: 'fab fa-medium', url: 'https://medium.com/@dasariselvam321', color: 'hover:text-green-400' },
                { icon: 'fab fa-twitter', url: 'https://x.com/selvamdg', color: 'hover:text-sky-400' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all hover:scale-125 text-2xl`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image/Animation */}
          <div className="lg:w-1/2 flex justify-center fade-in-3">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              
              {/* Main Circle */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-2 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl md:text-9xl font-bold text-gradient">
                    SD
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
             {[
                { icon: 'fab fa-python', position: 'top-0 left-10', delay: '0s', color: 'text-yellow-400' },
                { icon: 'fab fa-react', position: 'top-0 right-10', delay: '0.5s', color: 'text-cyan-400' },
                { icon: 'fas fa-database', position: 'bottom-0 left-12', delay: '1s', color: 'text-green-400' },
                { icon: 'fas fa-brain', position: 'bottom-5 right-5', delay: '1.5s', color: 'text-purple-400' },
                { icon: 'fab fa-github', position: 'top-1/2 left-0', delay: '2s', color: 'text-orange-400' },
                { icon: 'fab fa-docker', position: 'top-1/3 right-0', delay: '2.5s', color: 'text-red-500' },
                
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute ${item.position} w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center shadow-lg float-icon border-2 border-slate-700 animate-float`}
                  style={{ animationDelay: item.delay }}
                >
                  <i className={`${item.icon} text-2xl ${item.color} animate-spin-slow`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
      >
        <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </button>
    </section>
  );
}