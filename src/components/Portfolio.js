


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, link, buttonText }) => {
  const isExternalLink = link.startsWith('http');

  const handleClick = (e) => {
    if (isExternalLink) {
      e.preventDefault();
      window.open(link, '_blank');
    }
  };

  return (
    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
      <div className="m-2 text-justify text-sm">
        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
          {title}
        </h4>
        <p className="text-md font-medium leading-5 h-auto md:h-48">
          {description}
        </p>
        <div className="flex justify-center my-4">
          {isExternalLink ? (
            <a
              href={link}
              onClick={handleClick}
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          ) : (
            <Link
              to={link}
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "EtherEase",
      description: "EtherEase is committed to simplifying Web 3.0 adoption for non-technical users and freelancing teams by offering a user-friendly platform, enhanced security, and a simplified tokenization process. Through collaborative problem-solving and rigorous testing, we've successfully overcome challenges to provide a seamless and secure experience for our users.",
      link: "https://github.com/prateek-tiwarii/Eth-ease",
      buttonText: "See Repository"
    },
    {
      title: "Ai Powered Bloging Plarform",
      description: "Write-Wiz leverages the power of the MERN stack, fortified by JWT authentication, to deliver a secure and user-friendly blogging platform. By integrating the Gemini API, it provides advanced generative AI support, transforming the blog-writing experience into an intuitive and innovative process. This fusion of robust tech and AI-driven assistance sets Write-Wiz apart as a forward-thinking tool for content creators.",
      link: "https://write-wiz.vercel.app/",
      buttonText: "Live Demo"
    },
    {
      title: "GDSC ABESIT",
      description: "The GDSC ABESIT platform is a dynamic hub designed to empower students with cutting-edge tech knowledge, hands-on projects, and a collaborative learning environment. It connects aspiring developers, designers, and tech enthusiasts to industry trends, workshops, hackathons, and mentorship opportunities.",
      link: "https://gdsc-abesit.vercel.app/",
      buttonText: "Live Demo"
    },
    {
      title: "Event Management System",
      description: "Our event management system helps to manage different types of events, whether weddings, burials or any kind of event. With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable. With use cases already recorded for quite a number of events, we can assure you of a stress-less event mangement platform.",
      link: "https://festin-0-beats-130-j83aogg4h-tomioka-senseis-projects.vercel.app/",
      buttonText: "Live Demo"
    }
  ];

  return (
    <div className="my-4 py-4" id="portfolio">
      <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
        Products
      </h2>
      <div className="flex justify-center">
        <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
      </div>

      <div className="px-4" data-aos="fade-down" data-aos-delay="600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              buttonText={project.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;