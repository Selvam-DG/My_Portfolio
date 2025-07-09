import  {Link} from 'react-router-dom';

export default function Projects(){
    const academicProjects = [
        {
            title: ' Stero Vision-Based Depth Estimation for Part Localization',
            type: "Academic Master's Project",
            period: 'February 2024 - July 2024 ', 
            location: 'Technische Hochschule Rosenhiem, Deutschland',
           tasks: [
                'Installed and configured a stereo camera system for depth estimation.',
                'Performed stereo camera calibration using OpenCV to correct distortion and  align camera parameters.',
                'Developed a pipeline to compute disparity maps using OpenCV stereo match algorithms.',
                'Extracted 3D spatial coordinates (X,Y,Z) from 2D disparity data.'
            ],

        },
        {
            title: 'Failure Analysis of Starter Motor using Statistical Data Analysis',
            type: 'Bachelor Thesis – Industrial Project',
            period : 'January 2019 - May 2019',
            location : 'Lucas TVS Ltd., Puducherry, India',
            tasks: [
                    'Coducted failure analysis of starter motors based on surge fail test.',
                    'Utilized Minitab for statistical data analysis, process capability studies and pattern recognition in failure trends.',
                    'Applied DMAIC methodolgy to structure the root cause analysis process and recommended corrective actions to imporve manufacturing quality',
            ]
        },

    ]

    const personalProjects = [
        {title: 'Full-Stack Applications ', route: '/projects#full-stack-apps'},
        {title: 'Frontend Projects', route: '/projects#frontend'},
        {title: 'Data Science & ML Projects', route: '/projects#ds-ml'},
        {title: 'API & Backend Projects', route: '/projects#api-backend'},
        

        
        
    ]

    return (
        <div id='projects' className='scroll-mt-24 space-y-2 '>
            <h2 className='text-3xl font-bold text-blue-900 mb-2'>
                <i className='fas fa-project-diagram text-blue-600'></i>
                Projects
            </h2>
            <hr className='mb-6'/>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📘 Academic Projects</h3>
            <div className="grid gap-2 px-5 mb-5">
                { academicProjects.map((project, idx) => (
                    <section
                        key={idx}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <h4 className="text-md font-medium text-gray-700">{project.location}</h4>
                        <p className="text-sm text-gray-500 mb-3"> {project.period} | {project.type} </p>
                        <ul className="list-disc list-inside space-y-1 ">
                            {project.tasks.map( (task, i) => (
                                <li key={i}>{task}</li>
                            ))}

                        </ul>
                    </section>
                )) }
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Self-Initiated Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {personalProjects.map((proj, i) => (
                <Link
                    key={i}
                    to={proj.route}
                    className="block bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg hover:border-blue-400 transition duration-200"
                >
                    <h4 className="text-lg font-medium text-blue-800">{proj.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">Self-Learned</p>
                </Link>
                ))}
            </div>

        </div>
     );
    
}
