export default function ProjectCard({ project }) {

    return (
        <div className="bg-white rounded-xl shadow-md transition hover:shadow-xl ">
            <div className="h-48 bg-cover bg-center rounded" style={{backgroundImage: `url(${project.image ||"/My_Portfolio/images/smooth-dark-blue.jpg" })`}}></div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-1"> {project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                    { project.stack.map( (tech, idx) =>(
                        <span key={idx} className="bg-gray-200 px-2 py-1 text-xs rounded">{tech}</span>
                    ))}
                </div>
                <div className="flex gap-3">
                    {project.github && <a href={project.github} className=" px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">GitHub</a>}
                    {project.demo && <a href={project.demo} className="px-4 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition">Live Demo</a>}
                </div>
            </div>
            

        </div>
    )
    
};
