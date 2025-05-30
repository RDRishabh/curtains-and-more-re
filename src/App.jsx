// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import OurStory from './pages/OurStory';
import HowWeWork from './pages/HowWeWork';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import FloatingContactIcons from './components/FloatingContactIcons';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <FloatingContactIcons />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
