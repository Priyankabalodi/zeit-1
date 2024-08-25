import React from 'react';
import front from '../assests/Group 76.png';
import back from '../assests/Group 77.png';
import UI from '../assests/Group 83.png';
import res from '../assests/Group 78.png';
import custom from '../assests/Group 79.png';
import content from '../assests/Group 80.png';
import api from '../assests/Group 81.png';
import { Link } from 'react-router-dom';
import './Serves.css'; // Import custom CSS for animations

const Serves = () => {
  return (
    <>
      <div className='space-y-24'>
        {/* Frontend Development Section */}
        <div className='flex flex-col md:flex-row items-center px-4 md:px-24 mb-24'>
          <div className='flex-1 md:pr-6'>
            <img className='w-full max-w-lg' src={front} alt="Frontend Development" />
          </div>
          <div className='flex-1 md:pl-6'>
            <h1 className='font-serif text-3xl md:text-4xl font-semibold mb-6'>FRONTEND DEVELOPMENT</h1>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Your frontend service is dedicated to crafting visually engaging and intuitive user interfaces that enhance the overall user experience. We employ the latest technologies and design principles to create responsive and seamlessly interactive websites.
            </p>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Our team is adept at translating your brand identity into compelling visuals, ensuring a cohesive and memorable online presence.
            </p>
            <button className='font-serif bg-blue-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>

        {/* Backend Development Section */}
        <div className='flex flex-col md:flex-row items-center px-4 md:px-24 mb-24'>
          <div className='flex-1 md:pr-6'>
            <img className='w-full max-w-lg' src={back} alt="Backend Development" />
          </div>
          <div className='flex-1 md:pl-6'>
            <h1 className='font-serif text-3xl md:text-4xl font-semibold mb-6'>BACKEND DEVELOPMENT</h1>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Our backend service focuses on building the robust foundation that powers your website or application. We specialize in creating efficient and scalable server-side architectures, ensuring seamless data management and processing.
            </p>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Our experienced backend developers are skilled in optimizing performance and implementing secure data storage solutions.
            </p>
            <button className='font-serif bg-green-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>

        {/* UI/UX Design Section */}
        <div className='flex flex-col md:flex-row items-center px-4 md:px-24 mb-24'>
          <div className='flex-1 md:pr-6'>
            <img className='w-full max-w-lg' src={UI} alt="UI/UX Design" />
          </div>
          <div className='flex-1 md:pl-6'>
            <h1 className='font-serif text-3xl md:text-4xl font-semibold mb-6'>UI/UX DESIGN</h1>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Transforming your digital presence with expert UI/UX design services. From wireframing to prototyping, we craft user-centric interfaces that captivate and convert. Our iterative approach ensures constant refinement based on user feedback, guaranteeing optimal usability and satisfaction.
            </p>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Partner with us to bring your vision to life with seamless, intuitive design solutions across platforms and devices.
            </p>
            <button className='font-serif bg-purple-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>

        {/* Responsiveness Section */}
        <div className='flex flex-col md:flex-row items-center px-4 md:px-24 mb-24'>
          <div className='flex-1 md:pr-6'>
            <img className='w-full max-w-lg' src={res} alt="Responsiveness" />
          </div>
          <div className='flex-1 md:pl-6'>
            <h1 className='font-serif text-3xl md:text-4xl font-semibold mb-6'>RESPONSIVENESS</h1>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Our dedication to responsiveness ensures that your website adapts seamlessly to various screen sizes and devices, providing an optimal user experience. Using advanced coding techniques and flexible design frameworks, we guarantee that your content looks and functions flawlessly across desktops, tablets, and smartphones.
            </p>
            <p className='font-serif text-lg md:text-xl mb-6'>
              With a mobile-first approach, we prioritize loading speed and usability, enhancing accessibility for your audience.
            </p>
            <button className='font-serif bg-teal-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>

        {/* Customized Sites Section */}
        <div className='flex flex-col md:flex-row items-center px-4 md:px-24 mb-24'>
          <div className='flex-1 md:pr-6'>
            <img className='w-full max-w-lg' src={custom} alt="Customized Sites" />
          </div>
          <div className='flex-1 md:pl-6'>
            <h1 className='font-serif text-3xl md:text-4xl font-semibold mb-6'>CUSTOMIZED SITES</h1>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Our customized sites are meticulously designed to reflect the unique identity and goals of your business. We go beyond one-size-fits-all solutions, tailoring every aspect to meet your specific requirements.
            </p>
            <p className='font-serif text-lg md:text-xl mb-6'>
              From personalized aesthetics to specialized functionalities, our team ensures that your website stands out and resonates with your target audience.
            </p>
            <button className='font-serif bg-orange-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>

        {/* Content Strategy Section */}
        <div className='flex flex-col md:flex-row items-center px-4 md:px-24 mb-24'>
          <div className='flex-1 md:pr-6'>
            <img className='w-full max-w-lg' src={content} alt="Content Strategy" />
          </div>
          <div className='flex-1 md:pl-6'>
            <h1 className='font-serif text-3xl md:text-4xl font-semibold mb-6'>CONTENT STRATEGY</h1>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Our content strategy is meticulously crafted to align with your business goals and resonate with your target audience. We conduct thorough research to understand your brand identity and industry landscape, allowing us to develop a comprehensive plan for creating, distributing, and managing content.
            </p>
            <p className='font-serif text-lg md:text-xl mb-6'>
              With a focus on relevance and authenticity, we tailor content that engages and converts, driving meaningful interactions with your audience.
            </p>
            <button className='font-serif bg-red-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>

        {/* API Integration Section */}
        <div className='flex flex-col md:flex-row items-center px-4 md:px-24 mb-24'>
          <div className='flex-1 md:pr-6'>
            <img className='w-full max-w-lg' src={api} alt="API Integration" />
          </div>
          <div className='flex-1 md:pl-6'>
            <h1 className='font-serif text-3xl md:text-4xl font-semibold mb-6'>API INTEGRATION</h1>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Our API integration service enhances the functionality of your website or application by seamlessly connecting with third-party services. We ensure smooth and efficient data exchange, enabling your site to leverage external resources and services to improve user experience and operational efficiency.
            </p>
            <p className='font-serif text-lg md:text-xl mb-6'>
              Our experts manage the entire integration process, from initial setup to ongoing maintenance, ensuring that your APIs function reliably and securely.
            </p>
            <button className='font-serif bg-indigo-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serves;
