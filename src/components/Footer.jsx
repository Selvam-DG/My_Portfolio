export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-400 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">

        <p>© {new Date().getFullYear()} Selvam Dasari Gnanaprakash</p>

        <div className="flex gap-5 text-lg">
          <a href="https://github.com/Selvam-DG" target="_blank" rel="noopener noreferrer"
             aria-label="GitHub" className="hover:text-white transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/selvamdasari55/" target="_blank" rel="noopener noreferrer"
             aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:dasariselvam321@gmail.com"
             aria-label="Email" className="hover:text-blue-400 transition-colors">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p className="text-gray-500">Built with React, Vite and TailwindCSS</p>

      </div>
    </footer>
  );
}