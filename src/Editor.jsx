import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilm, FiCamera, FiEdit, FiMail, FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaShopify, FaYoutube } from 'react-icons/fa';
import { SiCanva } from "react-icons/si";

const AdEditorPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Projects (Video Ads & E-Commerce Work)
  const projects = [
    {
      id: 1,
      title: "High-Converting Product Ad",
      description: "Facebook/Instagram ad that achieved 5x ROAS",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "TikTok Viral Ad Campaign",
      description: "Generated 500K+ views and 10K+ clicks",
      category: "Dropshipping",
      image: "./tiktok.png"
    },
    {
      id: 3,
      title: "YouTube Ad Funnel",
      description: "Scaled to $50K/month in sales",
      category: "Video Ads",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    }
  ];

const highTiktokSales = [
  {
    id: 1,
    title: "Hanging Neck Fan",
    description: "Stay cool anywhere with this wearable fan. Perfect for outdoor walks or workouts!",
    image: "./tiktoklogo.jpeg",
    video_url: "https://www.tiktok.com/@krazymegumin/video/7291871392591531270?is_from_webapp=1&sender_device=pc&web_id=7525895093074626056",
  },
  {
    id: 2,
    title: "Rice Storage Container",
    description: "No more messy cabinets—this container keeps your rice fresh and easy to pour.",
    image: "./tiktoklogo.jpeg",
    video_url: "https://www.tiktok.com/@krazymegumin/video/7240240626682383621?is_from_webapp=1&sender_device=pc&web_id=7525895093074626056",
  },
  {
    id: 3,
    title: "Clip Electric Fan",
    description: "Small but powerful—clip this fan anywhere for instant airflow and cooling comfort.",
    image: "./tiktoklogo.jpeg",
    video_url: "https://www.tiktok.com/@krazymegumin/video/7248516096980995333?is_from_webapp=1&sender_device=pc&web_id=7525895093074626056",
  },
];



  const skills = [
    { name: "Video Editing", icon: <FiFilm className="w-8 h-8" />, level: "95%" },
    { name: "Canva Editing", icon: <SiCanva className="w-8 h-8" />, level: "94%" },
      { name: "TikTok Ads", icon: <FaTiktok className="w-8 h-8" />, level: "92%" },
    { name: "Facebook Ads", icon: <FaFacebook className="w-8 h-8" />, level: "90%" },
    { name: "Shopify Ads", icon: <FaShopify className="w-8 h-8" />, level: "80%" }
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 300) {
        setShowScrollBottom(true);
      } else {
        setShowScrollBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-poppins">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Jazha Studio
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'Work', 'Skills', 'Results', 'Contact'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05, color: "#818cf8" }}
                className="text-gray-300 hover:text-blue-400 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 py-3 space-y-4">
                {['Home', 'Work', 'Skills', 'Results', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-blue-400 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  E-commerce Video Ads That Convert
                </span>
                <br />
              <span className="text-gray-100">For Dropshipping & Online Brands</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                I create scroll-stopping video ads for e-commerce & dropshipping brands that <span className="text-blue-400 font-medium">convert viewers into buyers.</span>
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
               <a href="#work">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg text-sm md:text-base"
  >
    See My Work
  </motion.button>
</a>
               <a href="#contact">
                 <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 px-6 py-3 rounded-full font-medium text-sm md:text-base"
                >
                  Get a Free Audit
                </motion.button>
               </a>
              </div>
            </motion.div>
            <motion.div variants={item} className="relative mt-12 md:mt-0">
              <div className="relative w-full h-64 md:h-96 rounded-xl shadow-md shadow-blue-500/20 overflow-hidden shadow-xl border border-gray-700">
                <img 
                  src="./video-edit-setup1.jpg" 
                  alt="Video editing setup"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 shadow-md shadow-blue-500/20 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Professional headshot"
                  className="w-full h-full object-cover "
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">My Ad Portfolio</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Scroll-stopping video ads that drive sales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-600"
              >
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs md:text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok Ads Section */}
<section id="tiktok-ads" className="py-20 px-4 bg-gray-800 border-t border-gray-700">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Viral TikTok Ads</h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        Scroll-stopping ads that drove real sales
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {highTiktokSales.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-600 group"
        >
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
              <a 
                href={project.video_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center transition-colors"
              >
                <FaTiktok className="mr-2" />
                Watch Ad
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
            <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">My Expertise</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Skills that turn views into sales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-100">Core Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-4 text-blue-400">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-100">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-100">Tools I Use</h3>
              <div className="grid grid-cols-3 gap-4">
                {[    'Capcut',
    'Canva',
    'Figma',
    'AI Tools',
    'Elevenlabs',
    'Photoshop',
    'Meta Ads (Facebook/Instagram)',
    'TikTok Ads',
    'Google Ads',
    'Snapchat Ads',
    'Pinterest Ads',
    'Twitter Ads (X)',
    'Shopify',
    'Dropified',
    'Oberlo'].map((tool) => (
                  <div key={tool} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm md:text-base">{tool}</span>
                  </div>
                ))}
              </div>

         
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Client Results</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Real numbers from real campaigns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "400k+", label: "Ad Views" },
              { metric: "300%", label: "Average ROAS" },
              { metric: "$40k+", label: "Revenue Generated" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-8 rounded-xl border border-gray-600 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-300 text-lg md:text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Let’s Scale Your Brand</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Ready for high-converting video ads? Let’s talk.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8 bg-gradient-to-b from-gray-800 to-gray-900">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-100">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiMail className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 mt-1 flex-shrink-0 text-blue-400" />
                    <div>
                      <h4 className="font-medium text-gray-300 text-sm md:text-base">Email</h4>
                      <p className="text-gray-500 text-xs md:text-sm">b.jazhatijamo22@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaTiktok  className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 mt-1 flex-shrink-0 text-blue-400" />
                    <div>
                      <h4 className="font-medium text-gray-300 text-sm md:text-base">Portfolio</h4>
                      <p className="text-gray-500 text-xs md:text-sm">https://www.tiktok.com/@krazymegumin</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiEdit className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 mt-1 flex-shrink-0 text-blue-400" />
                    <div>
                      <h4 className="font-medium text-gray-300 text-sm md:text-base">Availability</h4>
                      <p className="text-gray-500 text-xs md:text-sm">Accepting new clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-gray-800">
                <form>
                  <div className="mb-4 md:mb-6">
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2 text-sm md:text-base">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-3 py-2 text-sm md:text-base md:px-4 md:py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                    />
                  </div>
                  <div className="mb-4 md:mb-6">
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2 text-sm md:text-base">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 text-sm md:text-base md:px-4 md:py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                    />
                  </div>
                  <div className="mb-4 md:mb-6">
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2 text-sm md:text-base">Message</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      className="w-full px-3 py-2 text-sm md:text-base md:px-4 md:py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 md:py-3 rounded-lg font-medium shadow-md text-sm md:text-base"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Jazha Studio
              </div>
              <p className="text-gray-500 mt-2 text-xs md:text-sm">High-converting video ads for e-commerce</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <FiGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <FiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <FiInstagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} Jazha Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center shadow-lg z-40"
          >
            <FiArrowUp className="w-5 h-5 text-blue-400" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll To Bottom Button */}
      <AnimatePresence>
        {showScrollBottom && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToBottom}
            className="fixed bottom-6 right-20 md:right-24 w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center shadow-lg z-40"
          >
            <FiArrowDown className="w-5 h-5 text-blue-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdEditorPortfolio;