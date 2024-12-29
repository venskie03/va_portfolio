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

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openNavBar = () => {
    setIsOpen(true);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  

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
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoLaptopSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">
              Administrative Support
            </h3>
            <p className="text-gray-600 mt-2">
              From managing schedules and organizing calendars to data entry and
              documentation, I ensure your administrative tasks are handled
              efficiently.
            </p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoChatbubbleEllipsesSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">
              Social Media Management
            </h3>
            <p className="text-gray-600 mt-2">
              Creating engaging posts, scheduling content, and analyzing metrics
              to enhance your online presence and drive engagement.
            </p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoBriefcaseSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">Customer Support</h3>
            <p className="text-gray-600 mt-2">
              Resolving complaints, processing refunds, and answering inquiries
              with patience and professionalism to ensure customer satisfaction.
            </p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoAnalyticsSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">Data Analysis</h3>
            <p className="text-gray-600 mt-2">
              Collecting, organizing, and interpreting data to provide
              actionable insights, helping businesses grow strategically.
            </p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoCreateSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">Content Creation</h3>
            <p className="text-gray-600 mt-2">
              Crafting blogs, articles, and marketing materials to engage
              audiences and strengthen brand presence.
            </p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoFileTrayStackedSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">
              File and Document Management
            </h3>
            <p className="text-gray-600 mt-2">
              Organizing, categorizing, and maintaining digital and physical
              files to keep your operations running smoothly.
            </p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoCodeWorkingSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">
              Basic Website Management
            </h3>
            <p className="text-gray-600 mt-2">
              Updating website content, monitoring performance, and
              troubleshooting basic issues to ensure a seamless online presence.
            </p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoCashSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">
              Invoicing and Billing
            </h3>
            <p className="text-gray-600 mt-2">
              Preparing and sending invoices, tracking payments, and maintaining
              accurate financial records to streamline billing processes.
            </p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg text-center max-w-80 w-full">
            <IoPeopleSharp className="text-4xl text-[#3bd6c6]" />
            <h3 className="text-xl font-semibold mt-4">Team Coordination</h3>
            <p className="text-gray-600 mt-2">
              Facilitating communication, scheduling team meetings, and ensuring
              alignment to keep projects moving efficiently.
            </p>
          </div>
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

export default App;
