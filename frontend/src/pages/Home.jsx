import React, { useState } from "react";
import background from "../images/background.jpeg";
import aiAssistant from "../images/ai-assistant.jpeg";
import prototyping from "../images/prototyping.jpeg";
import softwareDevelopment from "../images/software-development.jpeg";
import gallery1 from "../images/gallery1.jpeg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpeg";
import turbo from "../images/turbo.jpeg";
import log from "../images/log.jpeg";
import stockk from "../images/stockk.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const services = [
    {
      title: "AI Virtual Assistant",
      image: aiAssistant,
      description: [
        "Streamline your workflows with our cutting-edge AI-powered virtual assistant. Designed to automate repetitive tasks, improve decision-making, and enhance productivity, our solution adapts to your specific business needs.",
        "By leveraging machine learning and intelligent algorithms, our AI assistant delivers personalized support, allowing you to focus on strategic initiatives while reducing operational burdens.",
      ],
    },
    {
      title: "Prototyping Solutions",
      image: prototyping,
      description: [
        "Turn ideas into reality with our comprehensive prototyping services. We craft interactive, high-quality models to help you visualize concepts, identify potential improvements, and refine designs before final production.",
        "Our prototyping solutions empower you to bring your vision to life with speed and precision, enabling a smoother transition from concept to market-ready product.",
      ],
    },
    {
      title: "Custom Software Development",
      image: softwareDevelopment,
      description: [
        "Unlock your business's full potential with tailored software solutions. Our team specializes in creating scalable, intuitive applications that seamlessly integrate into your existing ecosystem.",
        "From strategy to execution, we focus on delivering solutions that enhance efficiency, improve workflows, and provide measurable results to drive your business forward.",
      ],
    },
  ];

  const galleries = [
    {
      title: "Project 1",
      image: gallery1,
      description: "A seamless AI-powered solution for workplace management.",
    },
    {
      title: "Project 2",
      image: gallery2,
      description:
        "Intuitive tools for enhancing collaboration and productivity.",
    },
    {
      title: "Project 3",
      image: gallery3,
      description: "Innovative designs that redefine user experiences.",
    },
  ];

  const portfolioItems = [
    {
      title: "Turbo Farm",
      image: turbo,
      description:
        "Turbo Farm revolutionizes agriculture with AI-powered solutions to optimize efficiency, sustainability, and productivity.",
      features: [
        "Real-time monitoring of soil, crop, and weather conditions.",
        "Automated decision-making for irrigation and resource optimization.",
      ],
    },
    {
      title: "Log AI",
      image: log,
      description:
        "An intelligent inventory management system designed to streamline operations with real-time analytics and automation.",
      features: [
        "Demand forecasting and inventory adjustment.",
        "Precise tracking across warehouses and delivery networks.",
        "Seamless integration with ERP, POS, and supply chain systems.",
      ],
    },
    {
      title: "Stockk",
      image: stockk,
      description:
        "Stockk simplifies stock trading with AI-driven insights, market analysis, and automated strategies for investors.",
      features: [
        "Advanced algorithms for analyzing market trends and data.",
        "Personalized portfolio adjustments based on goals.",
        "Accessible on multiple devices for trading on the go.",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-5 text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-5xl mb-5">Welcome to Ai Solution Innovation</h1>
        <p className="text-2xl mb-8">
          Revolutionizing the digital employee experience with innovative
          AI-powered tools.
        </p>
        <Link
          to="/about"
          className="px-5 py-2.5 bg-blue-600 text-white rounded uppercase hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Expertise
          </h2>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex items-center gap-5 mb-16 ${
                index % 2 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-w-lg h-64 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-blue-600 font-semibold mb-5">
                  {service.title}
                </h3>
                {service.description.map((para, i) => (
                  <p key={i} className="text-gray-600 mb-5 leading-relaxed">
                    {para}
                  </p>
                ))}
                {index === 2 && (
                  <Link
                    to="/services"
                    className="inline-block px-5 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-5 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-5 text-gray-800">Our Gallery</h2>
          <p className="text-gray-600 mb-10">
            Take a look at the work we've done and the solutions we've built for
            our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleries.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 duration-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white mb-4">{item.description}</p>
                  <Link
                    to="/gallery"
                    className="px-5 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-5">Our Portfolio</h2>
          <p className="text-gray-600 mb-10">
            Explore our successful projects and innovative AI solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-lg p-5 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover rounded-lg mb-5"
                />
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-5">{item.description}</p>
                <ul className="list-disc text-left pl-5 text-gray-600 mb-5">
                  {item.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 mt-10 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
