import React, { useState, useEffect } from 'react';
import { FiArrowUp, FiMail, FiPhone, FiInstagram, FiLinkedin, FiX, FiPlay } from 'react-icons/fi';
import { FaWhatsapp, FaFigma, FaCut, FaRobot } from 'react-icons/fa';
import { SiApplemusic , SiCanva } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { CiImageOn } from "react-icons/ci";

const Enggo = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample media data
  const mediaItems = [
    {
      id: 1,
      type: 'video',
      title: 'Product Commercial',
      description: 'A sleek product commercial for a tech startup',
      thumbnail: './tmnail.jpg',
      src: 'https://player.vimeo.com/video/76979871?h=8272103f6e'
    },
    {
      id: 2,
      type: 'image',
      title: 'Fashion Ad Campaign',
      description: 'Summer fashion collection for a luxury brand',
      thumbnail: 'https://placehold.co/400x300/9333ea/white?text=Image+1',
      src: 'https://placehold.co/800x600/9333ea/white?text=Full+Image+1'
    },
    {
      id: 3,
      type: 'video',
      title: 'Travel Vlog',
      description: 'Travel vlog series for a tourism company',
      thumbnail: 'https://placehold.co/400x300/0ea5e9/white?text=Video+2',
      src: 'https://player.vimeo.com/video/1084537?h=889a9c5d25'
    },
    {
      id: 4,
      type: 'image',
      title: 'Food Photography',
      description: 'Menu photography for a restaurant chain',
      thumbnail: 'https://placehold.co/400x300/10b981/white?text=Image+2',
      src: 'https://placehold.co/800x600/10b981/white?text=Full+Image+2'
    },
    {
      id: 5,
      type: 'video',
      title: 'Corporate Event',
      description: 'Highlight reel for a corporate conference',
      thumbnail: 'https://placehold.co/400x300/f59e0b/white?text=Video+3',
      src: 'https://player.vimeo.com/video/139707837?h=355a612ce5'
    },
    {
      id: 6,
      type: 'image',
      title: 'Brand Identity',
      description: 'Brand identity design for a startup',
      thumbnail: 'https://placehold.co/400x300/ef4444/white?text=Image+3',
      src: 'https://placehold.co/800x600/ef4444/white?text=Full+Image+3'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const sections = ['home', 'about', 'services', 'portfolio', 'tools', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const openMediaModal = (media) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeMediaModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-800"
          >
            Enggo<span className="text-blue-500">.</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-10">
            {['home', 'about', 'services', 'portfolio', 'tools', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${activeSection === item ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md"
          >
            Hire Me
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Creative Video Editor
            </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
             E-Commerce 
            </h1>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight">
              & Dropshipping Ad Special
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Transforming ideas into visually stunning content. Specializing in video editing, image ads, and creative content that tells your story.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-md"
              >
                View Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="max-w-[35rem] w-full h-80 rounded-lg overflow-hidden shadow-xl border-8 border-blue-200">
                <img 
                  src="./enggo.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover "
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute md:-top-7 md:-right-10 -top-4 -right-5 3 md:block hidden w-28 h-28 bg-yellow-400 rounded-full opacity-30"></div>
              <div className="absolute md:-bottom-4 md:-left-10 -bottom-3 -left-3 md:block hidden w-24 h-24 bg-pink-400 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </section>

  {/* About Me Section */}
<section id="about" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
    >
      About Me
    </motion.h2>
    
    <div className="flex flex-col md:flex-row items-start">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="md:w-2/5 mb-10 md:mb-0 flex justify-center"
      >
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img 
              src="https://placehold.co/400x400/2563eb/white?text=Enggo" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full opacity-30"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-pink-400 rounded-full opacity-30"></div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="md:w-3/5 md:pl-12"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hello, I'm Froilan</h3>
        <p className="text-gray-600 mb-6">
          A passionate Video Editor & Graphic Designer with strong research skills and a year of experience crafting highly engaging e-commerce video ads and compelling image creatives.
        </p>
        
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            What I Bring to the Table:
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Video Editing",
                description: "Eye-catching, scroll-stopping ads for dropshipping & e-commerce brands",
                icon: "🎬"
              },
              {
                title: "Graphic Design",
                description: "High-converting image ads that captivate and convert",
                icon: "🎨"
              },
              {
                title: "Ad Scriptwriting",
                description: "Strategically crafted scripts that boost engagement and sales",
                icon: "📝"
              },
              {
                title: "AI Voice-Over Integration",
                description: "Enhancing video ads with realistic AI-generated voiceovers",
                icon: "🤖"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <div>
                  <h5 className="font-semibold text-gray-800">{item.title}</h5>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100">
            <span className="text-2xl mr-3">🔍</span>
            <div>
              <h5 className="font-semibold text-gray-800">Market Research</h5>
              <p className="text-gray-600 text-sm mt-1">Understanding what works best for your brand's audience</p>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white shadow-md mb-6"
        >
          <p className="font-medium">
            I thrive on creating high-impact advertisements that not only look great but also drive results. 
            My goal is to help businesses grow through visually stunning and strategically crafted content.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap gap-3">
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">2+ Years Experience</div>
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">200+ Projects</div>
          <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">95% Client Satisfaction</div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

 
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            My Portfolio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
          >
            A selection of my recent video and image editing projects
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openMediaModal(item)}
              >
                <div className="relative group">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-100 transition-opacity flex items-center justify-center">
                    {item.type === 'video' ? (
                      <FiPlay className="text-white text-4xl" />
                    ) : (
                      <CiImageOn className="text-white text-4xl" />
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  <div className="mt-2">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${item.type === 'video' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Tools I Use
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Professional software and tools to deliver high-quality results
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <FaFigma className="text-4xl text-purple-500" />, name: "Figma" },
              { icon: <SiCanva className="text-4xl text-blue-400" />, name: "Canva" },
              { icon: <FaCut  className="text-4xl text-yellow-400" />, name: "CapCut" },
              { icon: <FaRobot  className="text-4xl text-blue-500" />, name: "AI Tools" },
                     { icon: <SiApplemusic  className="text-4xl text-green-400" />, name: "Elevenlabs" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                {tool.icon}
                <span className="mt-4 text-gray-700 font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Let's discuss how we can bring your vision to life
          </motion.p>
          
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-green-50 text-green-600 rounded-lg"
              >
                <FaWhatsapp className="text-2xl mr-4" />
                <span>WhatsApp</span>
              </motion.a>
              
              <motion.a
                href="mailto:youremail@example.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-blue-50 text-blue-600 rounded-lg"
              >
                <FiMail className="text-2xl mr-4" />
                <span>Email</span>
              </motion.a>
              
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-purple-50 text-purple-600 rounded-lg"
              >
                <FiPhone className="text-2xl mr-4" />
                <span>Phone</span>
              </motion.a>
              
              <motion.a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-pink-50 text-pink-600 rounded-lg"
              >
                <FiInstagram className="text-2xl mr-4" />
                <span>Instagram</span>
              </motion.a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Or send me a message directly</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">Enggo<span className="text-blue-400">.</span></div>
              <p className="mt-2 text-gray-400">Creative Video & Image Editor</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Enggo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-20"
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Media Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeMediaModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeMediaModal}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <FiX className="text-xl" />
                </button>
                
                {selectedMedia.type === 'video' ? (
                  <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                    <iframe
                      src={selectedMedia.src}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={selectedMedia.title}
                    ></iframe>
                  </div>
                ) : (
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedMedia.title}</h3>
                <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
                <div className="flex items-center">
                  <span className={`inline-block px-3 py-1 text-sm rounded-full ${selectedMedia.type === 'video' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                    {selectedMedia.type}
                  </span>
                  <span className="ml-4 text-sm text-gray-500">Project #{selectedMedia.id}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Enggo;