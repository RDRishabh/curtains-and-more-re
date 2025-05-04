
// src/components/layout/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#f4f1ea] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-2">
            <Link to="/" className="flex flex-col items-center">
              {/* <h1 className="text-3xl font-script text-gray-700">Curtains</h1>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mx-1">&</span>
                <span>more</span>
              </div>
              <p className="text-xs text-[#d75a5a] mt-1 uppercase tracking-widest">HOME DECOR SPECIALISTS</p> */}
                <img src="/png/logo.png" alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="mt-2">
            <ul className="flex space-x-8">
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider">
                  OUR STORY
                </Link>
              </li>
              <li>
                <Link to="/how-we-work" className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider">
                  HOW WE WORK
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 uppercase text-sm tracking-wider">
                  BLOG
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;