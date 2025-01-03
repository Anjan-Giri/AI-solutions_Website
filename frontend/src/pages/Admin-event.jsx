import React, { useState } from "react";
import event1 from "../images/event1.jpeg.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";

function AdminEvent() {
  const [events, setEvents] = useState([
    {
      id: 1,
      image: event1,
      date: "February 25, 2025",
      title: "AI-Driven Automation Summit",
      description:
        "Join us as we explore the future of AI automation in various industries.",
      venue: "Convention Center, New York, NY",
    },
    {
      id: 2,
      image: event2,
      date: "March 10, 2025",
      title: "Tech Innovation Expo",
      description: "Discover the latest innovations in AI and technology.",
      venue: "Tech Park, San Francisco, CA",
    },
    {
      id: 3,
      image: event3,
      date: "April 20, 2025",
      title: "Startup Networking Gala",
      description:
        "Meet innovative startups and network with industry experts.",
      venue: "Grand Hall, Los Angeles, CA",
    },
  ]);

  const [editEvent, setEditEvent] = useState(null);

  // Handle delete event
  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  // Open Edit Modal
  const openEditModal = (event) => {
    setEditEvent(event);
  };

  // Handle save edited event
  const saveEditedEvent = (event) => {
    const updatedEvents = events.map((item) =>
      item.id === event.id ? event : item
    );
    setEvents(updatedEvents);
    setEditEvent(null); // Close modal after saving
  };

  // Handle changes in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  // Handle adding a new event
  const handleAddEvent = () => {
    const newEvent = {
      id: events.length + 1, // Simple id generation
      image: event1, // Placeholder for image
      date: "",
      title: "",
      description: "",
      venue: "",
    };
    setEvents([...events, newEvent]);
    setEditEvent(newEvent); // Open modal to edit the new event
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-4xl text-gray-800 mb-5 text-center">
          Event Dashboard
        </h2>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl text-gray-700">Manage Events</h3>
          <button
            onClick={handleAddEvent}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add New Event
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-gray-500 mb-4">
                  <strong>Venue:</strong> {event.venue}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openEditModal(event)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Event Modal */}
      {editEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl mb-4">Edit Event</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={editEvent.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={editEvent.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={editEvent.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="venue">
                  Venue
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={editEvent.venue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setEditEvent(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => saveEditedEvent(editEvent)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminEvent;
