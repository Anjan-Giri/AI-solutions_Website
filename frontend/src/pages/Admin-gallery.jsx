import React, { useState } from "react";
import { Link } from "react-router-dom";
import gallery1 from "../images/gallery1.jpeg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpeg";
import gallery4 from "../images/gallery4.jpeg";
import gallery5 from "../images/gallery5.jpeg";
import gallery6 from "../images/gallery6.jpeg";

function AdminGallery() {
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      image: gallery1,
      date: "June 15, 2024",
      title: "AI Innovations Conference",
      description:
        "Exploring advancements in AI-driven workplace technologies.",
    },
    {
      id: 2,
      image: gallery2,
      date: "April 22, 2024",
      title: "Prototyping Showcase",
      description:
        "Highlighting cutting-edge AI-powered prototyping solutions.",
    },
    {
      id: 3,
      image: gallery3,
      date: "January 10, 2024",
      title: "Team Building Event",
      description: "Fostering collaboration and innovation among team members.",
    },
    {
      id: 4,
      image: gallery4,
      date: "August 18, 2023",
      title: "Tech Meetup",
      description:
        "Engaging industry leaders to discuss AI trends and challenges.",
    },
    {
      id: 5,
      image: gallery5,
      date: "March 5, 2023",
      title: "AI Workshop",
      description:
        "A hands-on session introducing AI-powered prototyping tools.",
    },
    {
      id: 6,
      image: gallery6,
      date: "November 20, 2022",
      title: "Product Launch Event",
      description:
        "Unveiling our latest AI-powered software solutions for workplaces.",
    },
  ]);

  const [newGalleryItem, setNewGalleryItem] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
  });

  const handleDelete = (id) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id));
  };

  const handleAddGalleryItem = () => {
    const newItem = {
      id: galleryItems.length + 1,
      image: newGalleryItem.image || gallery1, // Default image if none provided
      date: newGalleryItem.date || "TBD", // Placeholder date if not provided
      title: newGalleryItem.title,
      description: newGalleryItem.description,
    };
    setGalleryItems([...galleryItems, newItem]);
    setNewGalleryItem({ title: "", description: "", image: "", date: "" });
  };

  const handleEditGalleryItem = (id, updatedItem) => {
    const updatedGalleryItems = galleryItems.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    setGalleryItems(updatedGalleryItems);
  };

  const GalleryItem = ({ image, date, title, description, id }) => (
    <div className="bg-white border border-[#ddd] rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-5 text-center">
        <span className="inline-block text-sm font-bold text-white bg-[#4A90E2] px-2.5 py-1 rounded mb-2.5">
          {date}
        </span>
        <h3 className="text-2xl mb-2.5 text-[#333]">{title}</h3>
        <p className="text-base text-[#555] mb-2.5">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`$/edit-gallery-item/${id}`}
            className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(id)}
            className="text-red-600 hover:text-red-800 font-medium transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f4f4f9] min-h-screen py-12">
      {/* Gallery Section */}
      <section className="text-center mb-12">
        <h2 className="text-5xl font-semibold text-[#333] mb-4">
          Gallery: AI Solution Events
        </h2>
        <p className="text-xl text-[#555]">
          Browse, Edit, and Manage AI-powered events and showcases in our
          gallery.
        </p>
      </section>

      {/* Add New Gallery Item Form */}
      <section className="max-w-[800px] mx-auto p-5 mb-12 bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl font-semibold text-[#333] text-center mb-5">
          Add New Gallery
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Gallery Title"
            value={newGalleryItem.title}
            onChange={(e) =>
              setNewGalleryItem({ ...newGalleryItem, title: e.target.value })
            }
            className="w-full p-3 border border-[#ddd] rounded-lg"
          />
          <textarea
            placeholder="Gallery Description"
            value={newGalleryItem.description}
            onChange={(e) =>
              setNewGalleryItem({
                ...newGalleryItem,
                description: e.target.value,
              })
            }
            className="w-full p-3 border border-[#ddd] rounded-lg"
          />
          <input
            type="text"
            placeholder="Event Date"
            value={newGalleryItem.date}
            onChange={(e) =>
              setNewGalleryItem({ ...newGalleryItem, date: e.target.value })
            }
            className="w-full p-3 border border-[#ddd] rounded-lg"
          />
          <input
            type="text"
            placeholder="Image URL (Optional)"
            value={newGalleryItem.image}
            onChange={(e) =>
              setNewGalleryItem({ ...newGalleryItem, image: e.target.value })
            }
            className="w-full p-3 border border-[#ddd] rounded-lg"
          />
          <button
            onClick={handleAddGalleryItem}
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Gallery Item
          </button>
        </div>
      </section>

      {/* Gallery items */}
      <div className="max-w-[1200px] mx-auto p-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl text-[#333] mb-2.5">Gallery Items</h1>
        </div>

        {/* Display Gallery items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.id}
              id={item.id}
              image={item.image}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminGallery;
