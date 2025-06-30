
export default function SectionNavButtons() {
    const section = [
        {id:"introduction", label:"Introduction"},
        {id:"experience" , label: "Experience"},
        {id:"projects" , label: "Projects"},
        {id:"education" , label: "Education"},
        {id:"certificates" , label: "Certifications"},
        
    ];

    return (

        <nav className="bg-blue-100 shadow-md sticky top-0 z-10">
            <ul className="flex justify-center space-x-8 py-4 text-gray-800"> 
                {section.map( ({id, label}) => (
                    <li key={id}>
                        <a  href={`#${id}`} className="text-lg font-medium hover:text-blue-600 transition-colors scroll={true}">
                            {label}                     
                        </a>   
                    </li>
                ))}
            </ul>
        </nav>
    );
    
};

