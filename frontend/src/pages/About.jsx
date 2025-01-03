import React from "react";
import about from "../images/about.jpeg";
import aiAssistant from "../images/ai-assistant.jpeg";
import prototyping from "../images/prototyping.jpeg";
import softwareDevelopment from "../images/software-development.jpeg";

import aiTools from "../images/ai-tools.jpeg";
import proactiveSolutions from "../images/proactive-solutions.jpeg";
import prototypingg from "../images/prototypingg.jpeg";
import customerSuccess from "../images/customer-success.jpeg";

import home from "../images/about.jpeg";

const About = () => {
  const offerings = [
    {
      image: aiAssistant,
      title: "AI Virtual Assistant",
      description:
        "Proactively address workplace challenges with a smart, intuitive AI assistant. Our virtual assistant optimizes productivity by handling repetitive tasks, managing schedules, providing instant support, and assisting in decision-making. With advanced natural language processing capabilities, the assistant ensures seamless communication, reduces bottlenecks, and empowers employees to focus on strategic goals.",
    },
    {
      image: prototyping,
      title: "Prototyping Solutions",
      description:
        "Transform your ideas into tangible models with our affordable and efficient prototyping services. Whether you're developing a new product or refining an existing concept, our team utilizes cutting-edge tools to create prototypes tailored to your business needs. We help you visualize solutions, test functionality, and reduce development risks.",
    },
    {
      image: softwareDevelopment,
      title: "Custom Software Development",
      description:
        "Elevate your business operations with our personalized software development solutions. From workflow automation to advanced analytics tools, we craft software that aligns perfectly with your goals and challenges. Our end-to-end development process ensures scalability, seamless integration, and user-friendly interfaces, delivering systems that enhance efficiency and drive long-term success.",
    },
  ];

  const OfferingCard = ({ image, title, description }) => (
    <div className="bg-white border border-[#ddd] rounded-lg p-12 flex-1 basis-[calc(33.333%-20px)] shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg text-center">
      <img
        src={image}
        alt={title}
        className="max-w-full h-auto rounded-lg mb-4"
      />
      <h3 className="text-2xl mb-2.5 text-[#333]">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  );

  const features = [
    {
      image: aiTools,
      title: "Cutting-Edge AI Tools",
      description:
        "Leverage the power of advanced AI technology to optimize your workflows and boost productivity.",
    },
    {
      image: proactiveSolutions,
      title: "Proactive Solutions",
      description:
        "Address workplace challenges before they arise, ensuring seamless operations and efficiency.",
    },
    {
      image: prototypingg,
      title: "Affordable Prototyping",
      description:
        "Transform ideas into reality with our innovative and cost-effective prototyping solutions.",
    },
    {
      image: customerSuccess,
      title: "Customer Satisfaction",
      description:
        "Our mission is to prioritize your success, delivering solutions that exceed expectations.",
    },
  ];

  const FeatureCard = ({ image, title, description }) => (
    <div className="bg-white border border-[#ddd] rounded-lg p-5 w-[250px] text-center shadow-md transition-transform duration-300 hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-[100px] h-[100px] mb-4 mx-auto"
      />
      <h3 className="text-2xl mb-2.5 text-[#333]">{title}</h3>
      <p className="text-base text-[#555]">{description}</p>
    </div>
  );

  return (
    <>
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-5 text-[rgb(253,253,253)]"
        style={{ backgroundImage: `url(${about})` }}
      >
        <h1 className="text-5xl mb-5">About Us</h1>
        <p className="text-2xl mb-8">
          We are a team of tech enthusiasts dedicated to building innovative
          AI-driven solutions that transform businesses and drive success.
        </p>
        <button className="px-5 py-2.5 bg-[#007bff] text-white border-none rounded uppercase cursor-pointer transition-colors duration-300 hover:bg-[#0056b3]">
          Learn More
        </button>
      </section>

      <section className="py-20 px-16 bg-[#f9f9f9] text-center">
        <h2 className="text-3xl text-[#131414] mb-8">About Us</h2>
        <div className="flex flex-wrap gap-5 items-center justify-center bg-white rounded-lg shadow-md p-5 max-w-[1200px] mx-auto">
          <img
            src={home}
            alt="About Us"
            className="w-full max-w-[500px] h-[500px] rounded-lg object-cover"
          />
          <div className="flex-1 max-w-[600px] text-left">
            <p className="text-base leading-relaxed text-[#555] mb-4">
              AI-Solutions is redefining the digital workplace with cutting-edge
              AI technology designed to optimize efficiency, enhance creativity,
              and drive innovation. By offering intuitive, user-focused
              solutions, the company empowers businesses to streamline
              workflows, reduce repetitive tasks, and focus on strategic
              initiatives. With tools that leverage advanced machine learning
              and natural language processing, AI-Solutions ensures seamless
              integration into daily operations, fostering productivity and
              collaboration. The company's mission is clear: to create smarter,
              more dynamic workplaces where employees can thrive and businesses
              can achieve transformative results.
            </p>
            <p className="text-base leading-relaxed text-[#555] mb-4">
              At the heart of AI-Solutions is a commitment to shaping the future
              of work by addressing challenges head-on and driving sustainable
              growth. By anticipating the evolving needs of organizations, the
              company designs solutions that promote agility, foster innovation,
              and enable teams to unlock their full potential. Whether it's
              improving decision-making, enabling seamless communication, or
              enhancing workplace efficiency, AI-Solutions delivers impactful,
              future-ready tools that inspire progress and global impact. With a
              vision to lead in the age of digital transformation, AI-Solutions
              is a trusted partner for organizations striving to build a
              smarter, more connected tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl">Our Core Offerings</h2>
          </div>
          <div className="flex flex-wrap gap-24 justify-between">
            {offerings.map((offering, index) => (
              <OfferingCard key={index} {...offering} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-16 bg-[#f9f9f9] text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl mb-2.5 text-[#333]">Why Choose Us?</h2>
          <p className="text-xl text-[#666] mb-10">
            Discover what sets AI-Solutions apart from the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
