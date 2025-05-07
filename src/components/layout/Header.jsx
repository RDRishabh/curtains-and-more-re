import { useState } from 'react';
import { Menu } from 'lucide-react'; // Import Lucide Menu Icon
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);

    // Lock or unlock scrolling on body
    if (!isSidebarOpen) {
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      document.body.style.overflow = ''; // Unlock scroll
    }
  };

  return (
    <header className="bg-[#f4f1ea] py-4 relative z-50">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center lg:justify-center">
      
      <Link to="/" className="flex items-center">
        <img src="/png/logo.png" alt="Logo" className="h-12 w-auto" />
      </Link>

      <button
        onClick={toggleSidebar}
        className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <Menu size={28} />
      </button>
    </div>

    {/* Navigation for Large Screens */}
    <nav className="mt-4 hidden lg:block">
      <ul className="flex justify-center space-x-6 md:space-x-8">
        <li><Link to="/projects" className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">PROJECTS</Link></li>
        <li><Link to="/our-story" className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">OUR STORY</Link></li>
        <li><Link to="/how-we-work" className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">HOW WE WORK</Link></li>
        <li><Link to="/blog" className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider font-quincy">BLOG</Link></li>
      </ul>
    </nav>
  </div>

  {/* Sidebar & Overlay */}
  <div className={`fixed top-0 right-0 w-3/4 sm:w-2/3 md:w-1/2 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className="flex justify-end p-4">
      <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 focus:outline-none">
        <span className="text-2xl">×</span>
      </button>
    </div>
    <ul className="flex flex-col items-center space-y-6">
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
