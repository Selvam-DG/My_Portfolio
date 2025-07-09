const experiences = [
    {
        title: "Software Engineer Intern - Digital Twin",
        company : "fischer group, Waldachtal, Germany",
        period: 'Mar 2025 - Sept 2025',
        type : "Internship",
        location: "On-Site",
        tasks : [
            "Designed and implemented a structured SQL Server database using SSMS for storing organizational data.",
            "Applied data normalization principles to optimize data relationships and scalability.",
            "Developed Python scripts for automating data ingestion and processing.",
            "Built a web application using Django (backend) and HTML, CSS, JavaScript (frontend).",  
        ],
    },
    {
        title: "Data & Process Analyst",
        company : "MRF Tyres Ltd., India",
        period : "Oct 2021 - Aug 2023",
        type : "Full-time",
        location : "On-Site",
        tasks: [
            "Analyzed machine performance and delay data from MES and SAP using SQL and Excel to improve KPIs (MTTR, MTBF).",
            "Created dashboards with Power BI, Tableau, and Python for operational insights.",
            "Managed material master data and spare parts in SAP, improving resource planning.",
            "Applied Lean principles to reduce machine downtime and improve OEE.",
        ],
    },
    {
        title: 'Intern',
        company : 'Indian Institute of Science (IISc), Bengaluru, India',
        period: 'May 2018 – Aug 2018 ',
        type :'Internship',
        location : 'On-Site',
        tasks: [
            'Gained hands-on experience in applied research and engineering data analysis.'
        ]
    },
]

export default function Experience() {
    return (
        <section id="experience" className="space-y-2 scroll-mt-24"> 
            <h2 className="text-3xl font-semibold text-blue-900 flex items-center gap-2">
                <i className="fas fa-briefcase text-blue-700"></i>
                <span>Experience</span>
            </h2>
            <hr className="border-gray-300 mb-6"/>
            {experiences.map( (job, idx) => (
                <article
                    key={idx}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <h4 className="text-md font-medium text-gray-700">{job.company}</h4>
                    <p className="text-sm text-gray-500 mb-3"> {job.period} | {job.type} | {job.location}</p>
                    <ul className="list-disc list-inside space-y-1 ">
                        {job.tasks.map( (task, i) => (
                            <li key={i}>{task}</li>
                        ))}

                    </ul>

                </article>
            )) }

        </section>
    );
    
};
