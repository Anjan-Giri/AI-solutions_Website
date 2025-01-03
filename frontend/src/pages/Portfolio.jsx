import React from "react";
import aiBg from "../images/ai-bg.jpeg";
import { Link } from "react-router-dom";

import turbo from "../images/turbo.jpeg";
import log from "../images/log.jpeg";
import stockk from "../images/stockk.jpeg";
import laundriq from "../images/laundriq.jpeg";

function Portfolio() {
  const portfolioItems = [
    {
      image: turbo,
      title: "Turbo Farm",
      description:
        "Turbo Farm is transforming agriculture through cutting-edge AI-powered solutions designed to enhance efficiency, sustainability, and productivity. By providing real-time monitoring of soil, crop, and weather conditions, it empowers farmers with valuable insights to make data-driven decisions. Additionally, its automated systems optimize irrigation and resource management, ensuring smarter use of water, energy, and fertilizers. Turbo Farm represents the future of farming, where technology and innovation work hand in hand to maximize yields while minimizing environmental impact.",
    },
    {
      image: log,
      title: "Log AI",
      description:
        "An intelligent inventory management system simplifies operations by leveraging real-time analytics and automation. It enables accurate demand forecasting and inventory adjustments, ensuring optimal stock levels at all times. With precise tracking across warehouses and delivery networks, businesses can maintain visibility and control over their inventory. Additionally, seamless integration with ERP, POS, and supply chain systems ensures a unified and efficient workflow, enhancing overall operational efficiency and productivity.",
    },
    {
      image: stockk,
      title: "Stockk",
      description:
        "Stockk revolutionizes stock trading by providing AI-driven insights, market analysis, and automated strategies tailored for investors. Its advanced algorithms analyze market trends and data to empower users with informed decision-making. With personalized portfolio adjustments aligned with individual financial goals, Stockk ensures a customized trading experience. Accessible across multiple devices, it offers seamless trading on the go, making it easier than ever for investors to stay connected to the market and manage their portfolios effectively.",
    },
    {
      image: laundriq,
      title: "LaundriQ",
      description:
        "LaundriQ transforms laundry care with AI-powered solutions, offering precision, convenience, and enhanced fabric protection. Its innovative features include fabric assessment and tailored care recommendations, ensuring optimal treatment for every garment. By optimizing detergent usage and energy consumption, LaundriQ promotes sustainability while reducing costs. With seamless integration into smart home ecosystems like Samsung SmartThings, users can enjoy the convenience of remote monitoring and control, making laundry management smarter and more efficient than ever.",
    },
  ];

  const PortfolioCard = ({ image, title, description }) => (
    <div className="bg-white border border-[#e5e7eb] rounded-xl shadow-md p-5 transition-transform duration-300 flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="w-[70%] h-[400px] rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );

  return (
    <>
      <section
        className="h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-5 text-white"
        style={{ backgroundImage: `url(${aiBg})` }}
      >
        <h2 className="text-5xl mb-5">Our Portfolio</h2>
        <p className="text-2xl mb-8">
          Explore some of our most impactful projects that highlight our
          expertise and commitment to innovation.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center text-center p-5 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl mb-5">Portfolio</h2>
      </section>
      <section className="px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </section>

      <div className="mt-10 text-center mb-10">
        <Link
          to="/contact-form"
          className="inline-block px-5 py-3 bg-[#007BFF] text-white no-underline rounded text-lg hover:bg-[#0056b3] hover:shadow-lg transition-all duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
