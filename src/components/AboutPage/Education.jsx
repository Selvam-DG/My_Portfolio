export default function Education() {
    const educationData = [
    {
      degree: "Master of Engineering Sciences in Mechatronics",
      school: "Technische Hochschule Rosenheim, Germany",
      duration: "October 2023 – December 2025",
      details: [
        "Subjects of Interest: Advanced Mathematics, Statistics, Machine Learning, Image Processing, Computer Programming",
      ],
    },
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      school: "Pondicherry University, Puducherry, India",
      duration: "August 2015 –  April 2019",
      details: [
        "Graduated with First Class with Distinction.",
        "Thesis: Failure Analysis of Starter Motor using Statistical Data Analysis",
      ],
    },
    {
      degree: "HSC (Class XII)",
      school: "Krishnamalli Junior College",
      duration: "June 2013 – April 2015",
    },
    {
      degree: "SSLC (Class X)",
      school: "Jnana Jyothi Vidya Mandir",
      duration: "June 2012 – May 2013",
    },
  ];
  return (
    <section id="education" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        <i className="fas fa-graduation-cap text-blue-600"></i> Education
      </h2>
      <hr className="mb-6" />
      <div className="space-y-3">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700">{edu.degree}</h3>
            <p className="text-gray-700">{edu.school}</p>
            <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
            {edu.details && (
              <ul className="list-disc list-inside text-sm text-gray-700">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
    
};
