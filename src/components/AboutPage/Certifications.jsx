
export default function Certifications() {
  const certifications = [
    "Data Science and AI Certification – IBM | Mar 2024",
    "Machine Learning for Engineers – FAU Erlangen | Aug 2023",
    "Complete Data Science Bootcamp – Udemy | Feb 2024",
    "SQL & PostgreSQL – Udemy | Mar 2023",
  ];

  return (
    <section id="certifications" className="scroll-mt-24 mt-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        <i className="fas fa-certificate text-yellow-500"></i> Certifications
      </h2>
      <hr className="mb-6" />
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        {certifications.map((cert, index) => (
          <li key={index} className="bg-white border border-gray-200 rounded-md p-3 shadow-sm hover:shadow-md transition">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}
