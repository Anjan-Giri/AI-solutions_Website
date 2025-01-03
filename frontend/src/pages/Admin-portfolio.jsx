import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import images
import turbo from "../images/turbo.jpeg";
import log from "../images/log.jpeg";
import stockk from "../images/stockk.jpeg";
import laundriq from "../images/laundriq.jpeg";

function AdminPortfolio() {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "Turbo Farm",
      description:
        "Turbo Farm is transforming agriculture through cutting-edge AI-powered solutions designed to enhance efficiency, sustainability, and productivity. By providing real-time monitoring of soil, crop, and weather conditions, it empowers farmers with valuable insights to make data-driven decisions. Additionally, its automated systems optimize irrigation and resource management, ensuring smarter use of water, energy, and fertilizers.",
      image: turbo,
    },
    {
      id: 2,
      title: "Log AI",
      description:
        "An intelligent inventory management system simplifies operations by leveraging real-time analytics and automation. It enables accurate demand forecasting and inventory adjustments, ensuring optimal stock levels at all times. With precise tracking across warehouses and delivery networks, businesses can maintain visibility and control over their inventory.",
      image: log,
    },
    {
      id: 3,
      title: "Stockk",
      description:
        "Stockk revolutionizes stock trading by providing AI-driven insights, market analysis, and automated strategies tailored for investors. Its advanced algorithms analyze market trends and data to empower users with informed decision-making. Accessible across multiple devices, it offers seamless trading on the go, making it easier for investors to stay connected to the market.",
      image: stockk,
    },
    {
      id: 4,
      title: "LaundriQ",
      description:
        "LaundriQ transforms laundry care with AI-powered solutions, offering precision, convenience, and enhanced fabric protection. Its innovative features include fabric assessment and tailored care recommendations, ensuring optimal treatment for every garment. With seamless integration into smart home ecosystems, users can enjoy the convenience of remote monitoring and control.",
      image: laundriq,
    },
  ]);

  const handleDelete = (id) => {
    setPortfolioItems(portfolioItems.filter((item) => item.id !== id));
  };

  const [newPortfolio, setNewPortfolio] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPortfolio((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPortfolio = () => {
    if (newPortfolio.title && newPortfolio.description) {
      const newItem = {
        id: portfolioItems.length + 1,
        title: newPortfolio.title,
        description: newPortfolio.description,
        image: newPortfolio.image || "default-image.jpg",
      };
      setPortfolioItems([...portfolioItems, newItem]);
      setNewPortfolio({ title: "", description: "", image: "" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Add New Portfolio Section */}
      <section className="px-8 py-12 mb-16 bg-white rounded-lg shadow-xl max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Add New Portfolio
        </h3>
        <p className="text-lg text-gray-600 text-center mb-8">
          Showcase your innovative AI-powered solutions by adding a new
          portfolio item.
        </p>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Portfolio Title
            </label>
            <input
              type="text"
              name="title"
              value={newPortfolio.title}
              onChange={handleInputChange}
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter portfolio title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Portfolio Description
            </label>
            <textarea
              name="description"
              value={newPortfolio.description}
              onChange={handleInputChange}
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter portfolio description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL (Optional)
            </label>
            <input
              type="text"
              name="image"
              value={newPortfolio.image}
              onChange={handleInputChange}
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL (optional)"
            />
          </div>

          <div className="text-center">
            <button
              onClick={handleAddPortfolio}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition-all duration-300"
            >
              Add Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Past Portfolio
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Explore the impact of our AI-driven solutions across industries.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover object-center transition-transform transform hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/edit-portfolio/${item.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800 font-medium transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminPortfolio;
