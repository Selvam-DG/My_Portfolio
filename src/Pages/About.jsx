import SectionNavButtons from '../components/AboutPage/NavButtons';
import Introduction from '../components/AboutPage/Introduction';
import Experience from '../components/AboutPage/Experience';

export default function About() {
    return(
        <div className="bg-[url('./public/images/smooth-dark-blue.jpg')]">
            <div className='min-h-50 bg-blue-200'></div>
            <SectionNavButtons />
            <main className='flex-grow max-w-5xl mx-auto px-6 py-12 space-y-10 bg-transparent'>
                <Introduction/>
                <Experience />

            </main>

        </div>
    );
    
};
