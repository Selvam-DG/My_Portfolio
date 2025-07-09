import SectionNavButtons from '../components/AboutPage/NavButtons';
import Introduction from '../components/AboutPage/Introduction';
import Experience from '../components/AboutPage/Experience';
import AcaProjects from '../components/AboutPage/AcaProjects';
import Education from '../components/AboutPage/Education';
import Certifications from '../components/AboutPage/Certifications';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-white to-[#f0f4f8] text-gray-800">
            {/* Spacer or banner header */}
            <div className='min-h-50 bg-blue-200'></div>

            {/* Hidden on mobile by default, visible from md+ */}
            <SectionNavButtons />

            <main className='flex-grow max-w-5xl mx-auto px-6 py-12 space-y-14 bg-transparent'>
                <Introduction />
                <Experience />
                <AcaProjects />
                <Education />
                <Certifications />
            </main>
        </div>
    );
}
