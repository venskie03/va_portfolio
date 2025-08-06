import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookMessenger, FaWhatsapp, FaEnvelope, FaPlay, FaTimes } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

// Sample data for projects
const localizeVideo = [
  {
    id: 1,
    title: "Localize Video 1",
    description: "A dynamic promotional video tailored for a local product launch.",
    thumbnail: "/videot.jpg",
    videoUrl: "https://drive.google.com/file/d/1lGja_KyxV0zN9WUJq6hZc0cV5wV0Xiwe/preview"
  },
  {
    id: 2,
    title: "Localize Video 2",
    description: "A heartfelt wedding highlight capturing timeless memories.",
    thumbnail: "/videot.jpg",
    videoUrl: "https://drive.google.com/file/d/1cBJ2ZwfqKisw9QwYMjb4qsF9LMVd7BRD/preview"
  },
  {
    id: 3,
    title: "Localize Video 3",
    description: "A sleek corporate video designed to strengthen brand identity.",
    thumbnail: "/videot.jpg",
    videoUrl: "https://drive.google.com/file/d/1iKgJCf8hvCUd0i7oiYjTulz0e-O5ybX6/preview"
  },
  {
    id: 4,
    title: "Localize Video 4",
    description: "A high-impact branding video for corporate presentations.",
    thumbnail: "/videot.jpg",
    videoUrl: "https://drive.google.com/file/d/1UhYgHuwewCUznJEIDrzOOsLUK1INVXmK/preview"
  },
  {
    id: 5,
    title: "Localize Video 5",
    description: "An engaging company overview video for client and investor use.",
    thumbnail: "/videot.jpg",
    videoUrl: "https://drive.google.com/file/d/1n9VAK5xkzP7zCyxTeVCnTUUVkHHqYxoP/preview"
  },
  {
    id: 6,
    title: "Localize Video 6",
    description: "A polished corporate video for digital marketing campaigns.",
    thumbnail: "/videot.jpg",
    videoUrl: "https://drive.google.com/file/d/1gV3m21yeGrkytxxxYF5Dm5JlQcILikT-/preview"
  },
];


const videoCreatives = [
  {
    id: 1,
    title: "Creative Video 1",
    description: "A vibrant product commercial designed to boost brand visibility.",
    thumbnail: "/images.jpeg",
    videoUrl: "https://drive.google.com/file/d/1NCJ5BuXDNCREJdZ555xVS7vaS8QupgUZ/preview"
  },
  {
    id: 2,
    title: "Creative Video 2",
    description: "An emotional highlight capturing the essence of a wedding celebration.",
    thumbnail: "/images.jpeg",
    videoUrl: "https://drive.google.com/file/d/1v4ekeplU5kwzG5n0JrdY0m9HKc24qwVr/preview"
  },
  {
    id: 3,
    title: "Creative Video 3",
    description: "A professional corporate video showcasing business values and goals.",
    thumbnail: "/images.jpeg",
    videoUrl: "https://drive.google.com/file/d/1pJL19zSX62Yuhhh3tOnrsS4BOyc67t9Y/preview"
  },
  {
    id: 4,
    title: "Creative Video 4",
    description: "A clean and modern video designed for company branding and outreach.",
    thumbnail: "/images.jpeg",
    videoUrl: "https://drive.google.com/file/d/1W5eUsjzFodElN1G2NFBNbDsZJ2R5hi7K/preview"
  },
  {
    id: 5,
    title: "Creative Video 5",
    description: "A compelling business video crafted to leave a strong impression.",
    thumbnail: "/images.jpeg",
    videoUrl: "https://drive.google.com/file/d/1KySGvGqSUdZ7cYHyN3qG5zwbWAu_uR_6/preview"
  },
  {
    id: 6,
    title: "Creative Video 6",
    description: "A promotional video designed to elevate your brand’s professional image.",
    thumbnail: "/images.jpeg",
    videoUrl: "https://drive.google.com/file/d/1gV3m21yeGrkytxxxYF5Dm5JlQcILikT-/preview"
  },
];


const imageProjects = [
  {
    id: 1,
    title: "PETSTEAM PL",
    imageUrl: "https://www.dropbox.com/scl/fi/jrnuienkera4dz1azu4fj/PETSTEAM-PL.jpg?rlkey=9ikyso7227p1f3vedazburg5y&st=e4z6ugkr&raw=1"
  },
   {
    id: 2,
    title: "SHARPIT",
    imageUrl: "https://www.dropbox.com/scl/fi/rdwnd4xh97kcnrlajpt8f/SHARPIT-English.png?rlkey=u67bmfgbl068wewm4bnfsiksq&st=87stk45o&raw=1"
  },
   {
    id: 3,
    title: "SHAPEWEAR",
    imageUrl: "https://www.dropbox.com/scl/fi/8nu27lb6l1xegzry9mpil/SHAPEWEAR.png?rlkey=vs5yuw6l9yauk9st5hcqhj2k5&st=2vqzz6u6&raw=1"
  },
   {
    id: 4,
    title: "PUMPFLOW",
    imageUrl: "https://www.dropbox.com/scl/fi/q00vof8c2tyhij1a3ehpx/PUMPFLOW.png?rlkey=c97ammzm8i11z70abztt5j7pa&st=arizb1lc&raw=1"
  },
   {
    id: 5,
    title: "BOKSARA",
    imageUrl: "https://www.dropbox.com/scl/fi/4oe5c0rnrj8n1vzxuh30t/BOKSARA.png?rlkey=eummxb39q64g977u79c4zmc3a&st=i2ppafty&raw=1"
  },
   {
    id: 6,
    title: "GROOMSY",
    imageUrl: "https://www.dropbox.com/scl/fi/k21523urvoz0oh3j2eo3d/GROOMSY-English.png?rlkey=hsqcy3lcrlwkikt4i1lp3qbeo&st=op2l9apq&raw=1"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const MyPortfolio = () => {
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
    <div className="min-h-screen bg-white text-gray-800 font-poppins">
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
              Brigiette Jazha
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hover:text-blue-500 transition-colors"
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
              Creative <span className="text-blue-500">Video Editor</span> & <span className="text-blue-500">Image Ads</span> Specialist
            </h1>
            <p className="text-xl mb-8">
              Bringing your vision to life through compelling visuals and storytelling.
            </p>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block"
            >
              Get In Touch
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-200 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img 
                  src="/editor.jpg" 
                  alt="Portfolio Sample" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
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
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
                <img 
                  src="/dp.png" 
                  alt="Brigiette Jazha" 
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
              <h3 className="text-2xl font-semibold mb-4">Professional Video Editor & Image Ads Creator</h3>
              <p className="mb-4">
                Hi, I'm Brigiette Jazha, a passionate creative professional specializing in video editing, image ads creation, and VSL (Video Sales Letter) production. I help businesses and individuals tell their stories through compelling visuals.
              </p>
              <p className="mb-6">
                My expertise includes commercial video production, social media content creation, product promotion videos, and professional image editing for advertisements.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {['CapCut', 'Canva', 'Photoshop', 'Final Cut Pro', 'Elevenlabs', 'AI Tools', 'Figma'].map((skill, index) => (
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

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Video Editing",
                description: "Professional editing for commercials, social media content, events, and corporate videos.",
                icon: "🎬"
              },
              {
                title: "Image Ads Creation",
                description: "Eye-catching advertisements for social media, print, and digital platforms.",
                icon: "🖼️"
              },
              {
                title: "VSL Production",
                description: "High-converting video sales letters that drive engagement and sales.",
                icon: "💰"
              },
              {
                title: "Motion Graphics",
                description: "Dynamic animations and graphics to enhance your video content.",
                icon: "✨"
              },
              {
                title: "Color Grading",
                description: "Professional color correction and grading for a cinematic look.",
                icon: "🎨"
              },
              {
                title: "Social Media Content",
                description: "Engaging content tailored for Instagram, Facebook, TikTok, and YouTube.",
                icon: "📱"
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          {/* Video Projects */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Localize Video ADS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {localizeVideo.map((project, index) => (
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
                      <div className="bg-blue-500 text-white p-4 rounded-full">
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

               {/* Video Projects */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Creative Video ADS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoCreatives.map((project, index) => (
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
                      <div className="bg-blue-500 text-white p-4 rounded-full">
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
            <h3 className="text-2xl font-semibold mb-8 text-center">Image Ads Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageProjects.map((project, index) => (
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
          className="bg-white text-blue-500 px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
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
                Have a project in mind or want to discuss potential collaboration? Feel free to reach out through any of these channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaFacebookMessenger className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Facebook Messenger</h4>
                    <a href="https://m.me/yourprofile" className="text-blue-500 hover:underline">www.facebook.com/jazha.tijamo</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaWhatsapp className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <a href="https://wa.me/yournumber" className="text-blue-500 hover:underline">09554469071</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaWhatsapp className="text-yellow-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">OnlineJobs.ph</h4>
                    <a href="https://www.onlinejobs.ph/jobseekers/info/yourprofile" className="text-blue-500 hover:underline">www.onlinejobs.ph/jobseekers/info/4350531</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:your@email.com" className="text-blue-500 hover:underline">jazhatijamo22@email.com</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                {[
                  { icon: <FiGithub size={24} />, url: "#" },
                  { icon: <FiLinkedin size={24} />, url: "#" },
                  { icon: <FiInstagram size={24} />, url: "#" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url}
                    whileHover={{ y: -5 }}
                    className="bg-gray-100 p-3 rounded-full text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            &copy; {new Date().getFullYear()} Brigiette Jazha. All rights reserved.
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
      {/* Close Button */}
      <button 
        onClick={closeModal}
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <FaTimes className="text-gray-800" />
      </button>

      {/* Responsive Video */}
      <div className="w-full aspect-video">
        <iframe 
          src={`${selectedVideo.videoUrl}`}
          title={selectedVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Text Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{selectedVideo.title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{selectedVideo.description}</p>
      </div>
    </motion.div>
  </motion.div>
)}

    </div>
  );
};

export default MyPortfolio;