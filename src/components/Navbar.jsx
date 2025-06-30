import { Link } from "react-router-dom";
import { useState, useRef } from "react";


export default function Navbar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const closeTimer = useRef(null);
    const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 200); // delay close
  };


    return (
        <nav className="top-0 bg-gradient-to-b from-cyan-700 to-indigo-900 shadow top-0 z-50 text-white">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4 ">
                <Link to='/' className="text-2xl font-bold">
                    Selvam Dasari
                </Link>
                {/* Hamburger Button */}
                <button className="md:hidden text-white" onClick={ () => setMobileMenuOpen(!mobileMenuOpen)}>
                    <i className="fas fa-bars text-2xl"></i>
                </button>
                {/* Desktop view */}
                <ul className=" hidden md:flex space-x-6 text-lg">
                    <li><Link to='/' className="hover:text-indigo-600">Home</Link></li>
                    <li><Link to='/about' className="hover:text-indigo-400">About</Link></li>
                    <li className="relative "
                        onMouseEnter={ handleMouseEnter}
                        onMouseLeave={ handleMouseLeave}
                    > 
                        
                        <label className="hover:text-indigo-400">Projects</label>
                        {dropdownOpen && (
                              
                            <div className="absolute left-0 mt-2 bg-cyan-800 rounded shadow-lg w-65">
                                <Link to='/projects/django' className="block text-white px-4 py-1 hover:bg-gray-700">Django Projects</Link>
                                <Link to='/projects/nodejs' className="block text-white px-4 py-1 hover:bg-gray-700">Node.js Projects</Link>
                                <Link to='/' className="block text-white px-4 py-1 hover:bg-gray-700">EXploratory Data Analaytics</Link>
                                <Link to='/' className="block text-white px-4 py-1 hover:bg-gray-700">Django Projects</Link>
                            </div>
                        )}

                    </li>
                    <li><Link to='/blog' className="hover:text-indigo-400">Blog</Link></li>
                    <li><Link to='/contact' className="hover:text-indigo-400">Contact</Link></li>
                </ul>
            </div>
            {/* For Mobile View */}

            {mobileMenuOpen && (
                
                <ul className="md:hidden bg-zinc-700 px-4 pb-2 space-y-2 text-white ">
                  
                    <li> <Link to='/' className="block py-2">Home</Link></li>
                    <li> <Link  to='/about' className="block py-2">About</Link></li>
                    <li>
                        <div className="group">
                            <section className="cursor-pointer py-2">Projects</section>
                            <div className="pl-4 text-md">
                                <Link to='/projects/django' className="block py-1">Django Projects</Link>
                                <Link to='/projects/nodejs' className="block py-1">Node.js Projects</Link>
                                <Link to='/' className="block py-1">EXploratory Data Analaytics</Link>
                                <Link to='/' className="block py-1">Django Projects</Link>

                            </div>
                        </div>
                    </li>
                    <li><Link to='/blog' className="block py-2">Blog</Link></li>
                    <li><Link to='/contact' className="block py-2">Contact</Link></li>

                </ul>
            )}

        </nav>
    );

}

