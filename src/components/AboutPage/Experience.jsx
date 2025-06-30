const experiences = [
    {
        title: "Software Engineer Intern - Digital Twin",
        company : "fischer group, Waldachtal, Germany",
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
]

export default function Experience() {
    return (
        <section id="experience" className="space-y-8 scroll-mt-24"> 
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2  text-white">
                <i className="fas fa-briefcase"></i>
                <span>Experience</span>
            </h2>
            <hr className="border-gray-300 mb-6"/>
            {experiences.map( (job, idx) => (
                <article
                    key={idx}
                    className="p-6 border-gray-200 rounded-lg shadow-sm shadow-gray-900 hover:shadow-lg transition-shadow  text-white"
                    >
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <h4 className="text-md font-medium ">{job.company}</h4>
                    <p className="text-sm  mb-2"> {job.period} | {job.type} | {job.location}</p>
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
