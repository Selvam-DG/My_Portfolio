import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiTensorflow, SiTableau, SiOpencv } from "react-icons/si";

const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "C/C++", icon: <span className="font-bold text-blue-500">C++</span> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-blue-300" /> },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    ],
  },
  {
    title: "Data & Visualization Tools",
    items: [
      { name: "Tableau", icon: <SiTableau className="text-purple-400" /> },
      { name: "Power BI", icon: <span className="font-bold text-yellow-400">PBI</span> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
    ],
  },
  {
    title: "Version Control & Others",
    items: [
      { name: "GitHub", icon: <FaGitAlt className="text-gray-700" /> },
      { name: "Jupyter", icon: <span className="font-bold text-orange-400">Jupyter</span> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
