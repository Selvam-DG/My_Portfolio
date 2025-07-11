import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

    const projects = [
    
    {
        title: "Efficio-Project Management ",
        description:
        "A role-based project management platform for tracking projects and tasks across all employee in an organistaion.",
        stack: ['Django Restframework', "React",'REST API', 'SQLite'],
        image: "/My_Portfolio/images/project-management.jpg",
        github: "https://github.com/Selvam-DG/Efficio",
        demo: null,
        category: 'Full-Stack Applications',
        slug: 'full-stack-apps',
    },
    {
        title: "SpendaliQ - Expense Tracker",
        description:
        "An Intutive personal expense tracker with user authentication, real-time data sync and cloud storage using Firebase.",
        stack: ['React', 'Firebase', 'Tailwind CSS'],
        image: "",
        github: "https://github.com/Selvam-DG/SpendaliQ",
        demo: null,
        category: 'Full-Stack Applications',
        slug: 'full-stack-apps',
    },
    {
        title: "Blog Platform – API + Supabase + React",
        description:
        "A blog application with a decoupled architecture using Django APIs, Supabase for backend services, and  a modern React frontend.",
        stack: ['Django Rest Framework', 'Supabase', 'React', 'PostgreSQL'],
        image: "/My_Portfolio/images/blog.png",
        github: "https://github.com/Selvam-DG/Blog-DSRT",
        demo: 'https://blog-drp.vercel.app/',
        category : "API & Backend Services",
        slug: 'api-backend',
    },
    {
    title: "Weather Dashboard",
    description:
    "A weather visualization dashboard that fetches real-time weather data via OpenMeteo API and display it using responsive UI.",
    stack: [ 'React', 'Tailwind CSS', 'OpenMeteo API'],
    image: "/My_Portfolio/images/weather_forecast.jpg",
    github: "https://github.com/Selvam-DG/Blog-DSRT",
    demo: 'https://weather-om.vercel.app/',
    category : "Frontend Projects",
    slug: 'frontend',
    },
    {
    title: "ML Modles - Titanic Dataset",
    description:
    "Implemented Exploratory Data Analysis and RandomForest models on Titanic Dataset as  part of kaggle competitions.",
    stack: [ 'PYthon', 'NumPy', 'Pandas', 'Scikit Learn'],
    image: "",
    github: null,
    kaggle_link: 'https://www.kaggle.com/code/dgselvam/titanic-dataset',
    category : "Data Science & ML",
    slug: 'ds-ml',
    },
    
    ];

const grouped = projects.reduce((acc, proj) => {
    const {slug, category} = proj;
    if (!acc[slug]) acc[slug]= { title:category, items: []};
    acc[slug].items.push(proj);
    return acc;
}, {});


export default function Projects(){

    const location = useLocation();
    useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay ensures DOM is rendered
      }
    }
  }, [location]);

    return ( 
        <div className="bg-gray-100 min-h-screen py-12 px-6 ">
            <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
            {Object.entries(grouped).map ( ( [slug, {title, items}]) => (
                <section key={slug} id={slug} className="mb-16 bg-gray-300 shadow-md p-5">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 scroll-mt-25">{title}</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                        ))}
                    </div>

                </section>
            ))}

        </div>
    );
}
    