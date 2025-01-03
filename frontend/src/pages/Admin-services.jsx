import React, { useState } from "react";
import aiAssistant from "../images/ai-assistant.jpeg";
import prototyping from "../images/prototyping.jpeg";
import softwareDevelopment from "../images/software-development.jpeg";

const AdminServices = () => {
  // State to store services
  const [services, setServices] = useState([
    {
      id: 1,
      title: "AI Virtual Assistants",
      description:
        "Streamline your workflows with our cutting-edge AI-powered virtual assistant. Designed to automate repetitive tasks, improve decision-making, and enhance productivity, our solution adapts to your specific business needs. By leveraging machine learning and intelligent algorithms, our AI assistant delivers personalized support, allowing you to focus on strategic initiatives while reducing operational burdens.",
      image: aiAssistant,
    },
    {
      id: 2,
      title: "Prototyping Services",
      description:
        "Turn ideas into reality with our comprehensive prototyping services. We craft interactive, high-quality models to help you visualize concepts, identify potential improvements, and refine designs before final production. Our prototyping solutions empower you to bring your vision to life with speed and precision, enabling a smoother transition from concept to market-ready product.",
      image: prototyping,
    },
    {
      id: 3,
      title: "Custom Software Development",
      description:
        "Unlock your business's full potential with tailored software solutions. Our team specializes in creating scalable, intuitive applications that seamlessly integrate into your existing ecosystem. From strategy to execution, we focus on delivering solutions that enhance efficiency, improve workflows, and provide measurable results to drive your business forward.",
      image: softwareDevelopment,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const [newService, setNewService] = useState({
    title: "",
    description: "",
    image: "",
  });

  // Add a new service
  const handleAddService = () => {
    const newServiceEntry = {
      id: services.length + 1,
      title: newService.title,
      description: newService.description,
      image: newService.image || aiAssistant, // Default to one of the imported images
    };
    setServices([...services, newServiceEntry]);
    setNewService({ title: "", description: "", image: "" });
  };

  // Delete a service
  const handleDeleteService = (id) => {
    const filteredServices = services.filter((service) => service.id !== id);
    setServices(filteredServices);
  };

  // Edit a service
  const handleEditService = (service) => {
    setIsEditing(true);
    setCurrentService(service);
  };

  const handleSaveEdit = () => {
    setServices(
      services.map((service) =>
        service.id === currentService.id ? currentService : service
      )
    );
    setIsEditing(false);
    setCurrentService(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Admin Services
      </h2>

      {/* Add New Service */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Add New Service
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Service Title"
            value={newService.title}
            onChange={(e) =>
              setNewService({ ...newService, title: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Service Description"
            value={newService.description}
            onChange={(e) =>
              setNewService({ ...newService, description: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input
            type="text"
            placeholder="Image URL (Optional)"
            value={newService.image}
            onChange={(e) =>
              setNewService({ ...newService, image: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddService}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Service
          </button>
        </div>
      </div>

      {/* Service List */}
      <div className="space-y-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-48 h-48 object-cover rounded-lg shadow-md mb-4 md:mb-0"
            />
            <div className="md:ml-6 flex-1">
              {/* Title and Description */}
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>

              {/* Edit and Delete buttons */}
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => handleEditService(service)}
                  className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Service Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Edit Service
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                value={currentService.title}
                onChange={(e) =>
                  setCurrentService({
                    ...currentService,
                    title: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                value={currentService.description}
                onChange={(e) =>
                  setCurrentService({
                    ...currentService,
                    description: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <input
                type="text"
                value={currentService.image}
                onChange={(e) =>
                  setCurrentService({
                    ...currentService,
                    image: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setCurrentService(null);
                  }}
                  className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServices;
