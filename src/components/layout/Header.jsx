import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? 'hidden' : '';
  };

  return (
    <header className="bg-[#f4f1ea] py-4 relative z-50">
      <div className="container mx-auto px-4">
        {/* Flex container for all header content */}
        <div className="flex items-center justify-between">

          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img src="/png/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Center: Navigation - hidden on small screens */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-6 md:space-x-8">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900 uppercase text-md tracking-wider font-quincy">HOME</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-gray-900 uppercase text-md tracking-wider font-quincy">PROJECTS</Link></li>
              <li><Link to="/our-story" className="text-gray-600 hover:text-gray-900 uppercase text-md tracking-wider font-quincy">OUR STORY</Link></li>
              <li><Link to="/how-we-work" className="text-gray-600 hover:text-gray-900 uppercase text-md tracking-wider font-quincy">HOW WE WORK</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900 uppercase text-md tracking-wider font-quincy">BLOG</Link></li>
            </ul>
          </nav>

          {/* Right: Social Icons + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - hidden on mobile */}
            <div className="hidden lg:flex space-x-4 text-gray-600">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
            </div>

            {/* Hamburger Menu - shown only on mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div className={`fixed top-0 right-0 w-3/4 sm:w-2/3 md:w-1/2 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <span className="text-2xl">×</span>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6">
          <li><Link to="/" onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">HOME</Link></li>
          <li><Link to="/projects" onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">PROJECTS</Link></li>
          <li><Link to="/our-story" onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">OUR STORY</Link></li>
          <li><Link to="/how-we-work" onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">HOW WE WORK</Link></li>
          <li><Link to="/blog" onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">BLOG</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header;
