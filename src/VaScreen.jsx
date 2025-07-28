import {
  IoBriefcaseSharp,
  IoLaptopSharp,
  IoChatbubbleEllipsesSharp,
  IoAnalyticsSharp,
  IoCreateSharp,
  IoFileTrayStackedSharp,
  IoCodeWorkingSharp,
  IoCashSharp,
  IoPeopleSharp,
  IoClose,
} from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

function VaScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const openNavBar = () => {
    setIsOpen(true);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const skills = [
    {
      icon: IoLaptopSharp,
      title: "Administrative Support",
      description:
        "If you have daily tasks or administration work that keeping you busy, and you can't do the tasks that will make your business grow more.\n\nWell... it's time for you to get an extra helping hand to do it. I'm easy to be train and my attention to detail is superb.",
    },
    {
      icon: IoChatbubbleEllipsesSharp,
      title: "Social Media Management",
      description:
        "Keeping in touch with your customers, fans, colleagues or even strangers is not as hard as you think.\n\nIf you will hire me, I can manage your social media channels like Facebook, Instagram, and Linkedin and keep updates on what is happening in your business.",
    },
    {
      icon: IoBriefcaseSharp,
      title: "Customer Support",
      description:
        "With so many customers bugging you all day asking for refunds and cannot make successful transactions or can't even do simple tasks themselves to buy from the shopping cart, it's time to call for help.\n\nI have extraordinary patience to handle customer rage and emotions.",
    },
    {
      icon: IoAnalyticsSharp,
      title: "Data Analysis",
      description:
        "Collecting, organizing, and interpreting data to provide actionable insights, helping businesses grow strategically.",
    },
    {
      icon: IoCreateSharp,
      title: "Content Creation",
      description:
        "Crafting blogs, articles, and marketing materials to engage audiences and strengthen brand presence.",
    },
    {
      icon: IoFileTrayStackedSharp,
      title: "File and Document Management",
      description:
        "Organizing, categorizing, and maintaining digital and physical files to keep your operations running smoothly.",
    },
    {
      icon: IoCodeWorkingSharp,
      title: "Youtube Management",
      description:
        "If you are planning or you do already have an existing Youtube channel, you don't need to worry about the video editing anymore or adding descriptions, do the time-consuming graphic design and tagging. I can do that for you...\n\nIf you wish for someone to assist you in doing Youtube Livestream, I can be a great help managing your presentations and help you conduct live streams.",
    },
    {
      icon: IoCashSharp,
      title: "Content Management",
      description:
        "If you have a website like WordPress, Wix, or whatever you use. I can be the one who manages content for you so that people can read the latest update from you directly from your website.\n\nI can also manage the content from start to finish if you have a team and you do regularly publish content.",
    },
    {
      icon: IoPeopleSharp,
      title: "Personal Assistant",
      description:
        "I know you mean business, and just like everybody else in the industry, a personal assistant can be a great help for you. If you want to prepare some documents, marketing materials, or book your travel arrangement, I can be a great help to you.",
    },
  ];
  
  return (
    <div className="font-poppins w-full">
      {isOpen && (
        <div className=" bg-gray-900 text-white h-screen fixed inset-0 z-50">
          <ul className="h-full grid place-items-center py-20">
            <li>
            <Link
            onClick={closeNavbar}
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={500}
                            className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Home</Link>
            </li>
            <li>
            <Link
            onClick={closeNavbar}
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={500}
                            className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">About</Link>
            </li>
            <li>
            <Link
            onClick={closeNavbar}
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={500}
                            className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Skills</Link>
            </li>
            <li>
            <Link
            onClick={closeNavbar}
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={500}
                            className=" hover:border-b-2 border-sky-600 hover:cursor-pointer">Contact</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Header Section */}
      <header className="sticky bg-gray-900 top-0 z-50 p-5">
        <nav className="w-full flex md:justify-around justify-between items-center">
          <div className="text-white flex lg:text-xl text-lg">
            <a className="text-[#3bd6c6] mt-1" href="#home">
              <IoBriefcaseSharp />
            </a>
            <a className="pl-2" href="#home">
              Brigiette Jazha
            </a>
          </div>
          <div>
            <ul className="md:flex hidden text-white items-center space-x-6">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  className=" hover:border-b-2 border-sky-600 hover:cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  className=" hover:border-b-2 border-sky-600 hover:cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  className=" hover:border-b-2 border-sky-600 hover:cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  className=" hover:border-b-2 border-sky-600 hover:cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex text-2xl text-[#3bd6c6]">
            {isOpen ? (
              <button onClick={() => closeNavbar()}>
                {" "}
                <IoClose />
              </button>
            ) : (
              <button onClick={() => openNavBar()}>
                {" "}
                <IoIosMenu />
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 relative p-5"
      >
        <img
          src="/bg3.jpg"
          alt="Background image"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 w-full h-full bg-gray-950 bg-cover bg-center opacity-75"></div>
        <h1 className="lg:text-4xl text-2xl text-center font-bold text-gray-100 z-10">
          I'll be your own Personal Virtual Assistant!
        </h1>
        <p className="lg:text-lg text-md text-gray-50 mt-4 text-center max-w-2xl z-10">
          If your life is messy right now, and you're considering someone to
          help you, well let's sit down and talk!
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          className="mt-6 hover:cursor-pointer mb-20 md:px-6 px-3 py-3 bg-gray-950 border-2 border-white text-white lg:font-bold font-semibold rounded-lg hover:text-[#3bd6c6] hover:border-[#3bd6c6] transition duration-200 z-10 flex items-center space-x-2"
        >
          <span>Connect with me now!</span>
          <FaArrowRight className=" lg:text-lg" />
        </Link>
      </section>

      {/* SERVICES */}
      <div id="about" className="flex flex-col w-full py-28 lg:p-20 p-5 justify-center items-center">
        <div className="flex lg:flex-row flex-col items-center lg:gap-20 gap-8">
          <div className="image">
            <img
              src="/bg.jpg"
              alt=""
              className="2xl:max-w-[40rem] md:max-w-[60rem] max-w-[30rem] w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col max-w-[50rem] w-full">
            <h1 className="lg:text-4xl text-xl font-bold">
              It's About Giving Free Services To You!
            </h1>
            <p className="mt-3">
              I understand your time is valuable, and you may already have
              pressing matters to attend to—but allow me to briefly introduce
              myself in a way that respects your busy schedule. I believe in
              offering value first, building trust through actions rather than
              promises. During this time, I’ll handle any tasks you assign,
              showcasing my skills while making your life simpler and more
              efficient.
            </p>
            <p className="mt-3">
              My only goal is to demonstrate the tangible difference I can bring
              to your workload—no strings attached, no obligation to hire or pay
              me afterward. Over the years, I’ve worked with coaches, content
              creators, and influencers, consistently delivering value in highly
              competitive niches. From administrative tasks to problem-solving,
              I pride myself on offering unique insights and solutions that many
              haven’t experienced elsewhere. If this sounds like an opportunity
              worth exploring, I invite you to schedule a free 15-minute
              discovery call with me. Let’s discuss how I can help you and your
              team succeed. Act quickly—my time is limited, and spots are
              filling up fast.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 p-5">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
    <p className="text-gray-600 mt-2">What I bring to the table</p>
  </div>
  <div className="flex flex-wrap justify-center gap-6 max-w-[80rem] mx-auto">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bg-white shadow-md p-5 rounded-lg md:text-start text-center max-w-96 w-full"
      >
        <skill.icon className="text-4xl text-[#3bd6c6]" />
        <h3 className="text-xl font-semibold mt-4">{skill.title}</h3>
        <p className="text-gray-600 mt-2">{skill.description}</p>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 p-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
          <p className="text-gray-600 mt-2">Get in touch for collaborations</p>
        </div>
        <form className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3bd6c6] text-white p-3 rounded-lg font-bold hover:bg-[#32b5a6] ease-in duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default VaScreen;
