import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookMessenger, FaWhatsapp, FaEnvelope, FaPlay, FaTimes, } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiInstagram, FiExternalLink  } from 'react-icons/fi';
import { IoIosBriefcase } from "react-icons/io";

// Sample data for projects
const videoContents = [
  {
    id: 1,
    title: "Video Content 1",
    description: "A dynamic promotional video tailored for a local product launch.",
    thumbnail: "/thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1q8o2yBHPqtdVJC8K9gPfd4VEYFH7DiXA/preview"
  },
  {
    id: 2,
    title: "Localize Video 2",
    description: "A heartfelt wedding highlight capturing timeless memories.",
    thumbnail: "/thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1UFAWJAy58g9pj8ZUsAGoNS-Aj-989pJV/preview"
  },
  {
    id: 3,
    title: "Localize Video 3",
    description: "A sleek corporate video designed to strengthen brand identity.",
    thumbnail: "/thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1c7FvHGM_SIDsSZgRrY0aNUH4kyYcGQ_K/preview"
  },
  {
    id: 4,
    title: "Localize Video 4",
    description: "A high-impact branding video for corporate presentations.",
    thumbnail: "/thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1j8Kjl_aNNJazu5q1D6z10uVFA2N7hQJM/preview"
  },
  {
    id: 5,
    title: "Localize Video 5",
    description: "An engaging company overview video for client and investor use.",
    thumbnail: "/thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1hmJoU3oPlYFT15pfdtfl54zmFpZBwVk3/preview"
  },
  {
    id: 6,
    title: "Localize Video 6",
    description: "A polished corporate video for digital marketing campaigns.",
    thumbnail: "/thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1WcNunq7HHGoXFu4vxjSwyFODLZX9qcCD/preview"
  },
    {
    id: 7,
    title: "Localize Video 6",
    description: "A polished corporate video for digital marketing campaigns.",
    thumbnail: "/thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/13mJcF2jH99tQn3wlb-2saIEAK50S6ZnL/preview"
  },
    {
    id: 8,
    title: "Localize Video 6",
    description: "A polished corporate video for digital marketing campaigns.",
    thumbnail: "/thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1uBgivapcw2WNvt88fFwzgUMqgomqMovj/preview"
  },
];


const imageContent = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Image Content ${i + 1}`,
  imageUrl: `./crystal/img${i + 1}.JPG`
}));



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

  const [selectedImage, setSelectedImage] = useState(null);
const [isImageModalOpen, setIsImageModalOpen] = useState(false);

const openImageModal = (image) => {
  setSelectedImage(image);
  setIsImageModalOpen(true);
  document.body.style.overflow = 'hidden';
};

const closeImageModal = () => {
  setIsImageModalOpen(false);
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
              Crystal Joyce
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
      <section id="home" className="py-44">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Authentic <span className="text-blue-500">UGC Content</span> That <span className="text-blue-500">Connects</span>
            </h1>
            <p className="text-xl mb-8">
             Creating genuine user-generated content that builds trust and drives engagement for brands.
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
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-blue-200 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img 
                  src="/ugc.jpeg" 
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
                  src="/crystaldp.jpg" 
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

      {/* Services Section */}
      {/* <section id="services" className="py-20">
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
      </section> */}

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
            <h3 className="text-2xl font-semibold mb-8 text-center">Video Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoContents.map((project, index) => (
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
  <h3 className="text-2xl font-semibold mb-8 text-center">Image Content</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {imageContent.map((project, index) => (
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
            className="w-full h-60 object-contain transition-transform duration-300 group-hover:scale-105 bg-gray-100"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center md:opacity-0 md:hover:opacity-100 opacity-100">
            <button  
               onClick={() => openImageModal(project)}
              rel="noopener noreferrer"
              className="bg-white text-blue-500 px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FiExternalLink className="text-lg" />
              View Full Screen
            </button>
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
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
              
              <div className="space-y-6 w-full">
             <div className="flex items-center ">
  <div className="bg-blue-100 p-3 rounded-full mr-4">
    <FaFacebookMessenger className="text-blue-500 text-xl" />
  </div>
  <div className="min-w-0"> {/* allows shrink inside flex */}
    <h4 className="font-semibold">Facebook Messenger</h4>
    <a
      href="https://m.me/yourprofile"
      className="text-blue-500 hover:underline break-words whitespace-normal"
    >
  https://www.facebook.com/crystaljoyce.timagos
    </a>
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
    <IoIosBriefcase  className="text-yellow-500 text-xl" />
  </div>
  <div className="min-w-0"> {/* allows shrink inside flex */}
 <h4 className="font-semibold">OnlineJobs.ph</h4>
  <a 
    href="https://www.onlinejobs.ph/jobseekers/info/yourprofile" 
    className="text-blue-500 hover:underline break-words"
  >
    www.onlinejobs.ph/jobseekers/info/4350531
  </a>
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


{/* Image Modal */}
{isImageModalOpen && (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4"
    onClick={closeImageModal}
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button 
        onClick={closeImageModal}
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <FaTimes className="text-gray-800" />
      </button>

      {/* Image Content */}
      <div className="p-4">
        <img
          src={selectedImage?.imageUrl}
          alt={selectedImage?.title}
          className="w-full h-auto max-h-[80vh] object-contain"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
          }}
        />
      </div>

      {/* Text Content */}
      <div className="p-4 sm:p-6 border-t border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{selectedImage?.title}</h3>
      </div>
    </motion.div>
  </motion.div>
)}

    </div>
  );
};

export default MyPortfolio;