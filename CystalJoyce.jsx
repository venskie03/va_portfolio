import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookMessenger, FaWhatsapp, FaEnvelope, FaPlay, FaTimes } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Sample UGC content data
const ugcVideos = [
  {
    id: 1,
    title: "Cosmetic Product Review",
    description: "Authentic user review showcasing product benefits and real reactions",
    thumbnail: "https://via.placeholder.com/600x400?text=Cosmetic+Review",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: 2,
    title: "Fashion Try-On Haul",
    description: "Genuine user experience with multiple clothing items in different settings",
    thumbnail: "https://via.placeholder.com/600x400?text=Fashion+Haul",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: 3,
    title: "Home Product Demo",
    description: "Real-life demonstration of product functionality in a home environment",
    thumbnail: "https://via.placeholder.com/600x400?text=Home+Product",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: 4,
    title: "Tech Unboxing Experience",
    description: "Authentic first impressions and reactions to new tech products",
    thumbnail: "https://via.placeholder.com/600x400?text=Tech+Unboxing",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: 5,
    title: "Food Product Taste Test",
    description: "Honest reactions and opinions about new food products",
    thumbnail: "https://via.placeholder.com/600x400?text=Food+Taste",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
  {
    id: 6,
    title: "Beauty Routine with Product",
    description: "Real user incorporating product into their daily beauty routine",
    thumbnail: "https://via.placeholder.com/600x400?text=Beauty+Routine",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "video"
  },
];

const ugcImages = [
  {
    id: 1,
    title: "Lifestyle Product Shot",
    description: "Authentic user-generated lifestyle image with product in natural setting",
    imageUrl: "https://via.placeholder.com/600x400?text=Lifestyle+UGC",
    type: "image"
  },
  {
    id: 2,
    title: "Product in Daily Use",
    description: "Real customer using product in their everyday environment",
    imageUrl: "https://via.placeholder.com/600x400?text=Daily+Use",
    type: "image"
  },
  {
    id: 3,
    title: "Customer Review Photo",
    description: "Genuine customer photo with written review of product",
    imageUrl: "https://via.placeholder.com/600x400?text=Review+Photo",
    type: "image"
  },
  {
    id: 4,
    title: "Before & After",
    description: "Authentic user results showing product effectiveness",
    imageUrl: "https://via.placeholder.com/600x400?text=Before+After",
    type: "image"
  },
  {
    id: 5,
    title: "Creative Flat Lay",
    description: "User-created flat lay showcasing multiple products together",
    imageUrl: "https://via.placeholder.com/600x400?text=Flat+Lay",
    type: "image"
  },
  {
    id: 6,
    title: "Social Media Post",
    description: "Organic social media post created by satisfied customer",
    imageUrl: "https://via.placeholder.com/600x400?text=Social+Post",
    type: "image"
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const CrystalJoyce = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              Crystal Joyce
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Portfolio', 'About', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hover:text-pink-600 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Authentic <span className="text-pink-600">UGC Content</span> That <span className="text-pink-600">Connects</span>
            </h1>
            <p className="text-xl mb-8">
              Creating genuine user-generated content that builds trust and drives engagement for brands.
            </p>
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block"
            >
              View My Work
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-pink-200 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img 
                  src="https://via.placeholder.com/600x400?text=UGC+Content+Sample" 
                  alt="UGC Content Sample" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My UGC Portfolio</h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>
          
          {/* Video Projects */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Video Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ugcVideos.map((project, index) => (
                <motion.div 
                  key={project.id}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                    <button 
                      onClick={() => openModal(project)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 md:opacity-0 md:hover:opacity-100 opacity-100 transition-opacity"
                    >
                      <div className="bg-pink-600 text-white p-4 rounded-full">
                        <FaPlay size={24} />
                      </div>
                    </button>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image Projects */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Image Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ugcImages.map((project, index) => (
                <motion.div 
                  key={project.id}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden relative group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center md:opacity-0 md:hover:opacity-100 opacity-100">
                      <a 
                        href={project.imageUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-pink-600 px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-pink-600 hover:text-white transition-colors"
                      >
                        <FiExternalLink className="text-lg" />
                        View Full Screen
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3 mb-10 md:mb-0 flex justify-center"
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-pink-600">
                <img 
                  src="https://via.placeholder.com/400x400?text=Crystal+Joyce" 
                  alt="Crystal Joyce" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-2/3 md:pl-16"
            >
              <h3 className="text-2xl font-semibold mb-4">UGC Content Creator & Brand Advocate</h3>
              <p className="mb-4">
                Hi, I'm Crystal Joyce, a passionate creator specializing in authentic user-generated content that helps brands build trust with their audience.
              </p>
              <p className="mb-6">
                With a keen eye for detail and a deep understanding of social media trends, I create content that resonates with real users and drives engagement. My work includes product reviews, unboxings, tutorials, and lifestyle content across various industries.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {['Product Reviews', 'Unboxings', 'Tutorials', 'Lifestyle Content', 'Social Media Posts', 'Testimonials', 'Before/After'].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Collaborate</h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="mb-8">
                Interested in working together or have questions about my UGC services? Reach out through any of these channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaFacebookMessenger className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Facebook Messenger</h4>
                    <a href="https://m.me/yourprofile" className="text-blue-500 hover:underline">m.me/crystaljoyce</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaWhatsapp className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <a href="https://wa.me/yournumber" className="text-blue-500 hover:underline">+1234567890</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <FaFacebookMessenger className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">OnlineJobs.ph</h4>
                    <a href="https://www.onlinejobs.ph/yourprofile" className="text-blue-500 hover:underline">onlinejobs.ph/crystaljoyce</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:crystal@example.com" className="text-blue-500 hover:underline">crystal@example.com</a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="UGC Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Tell me about your UGC needs..."
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-600"
          >
            &copy; {new Date().getFullYear()} Crystal Joyce - UGC Content Creator. All rights reserved.
          </motion.p>
        </div>
      </footer>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <FaTimes className="text-gray-800" />
            </button>

            <div className="w-full aspect-video">
              <iframe 
                src={selectedVideo?.videoUrl}
                title={selectedVideo?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{selectedVideo?.title}</h3>
              <p className="text-gray-600">{selectedVideo?.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CrystalJoyce;