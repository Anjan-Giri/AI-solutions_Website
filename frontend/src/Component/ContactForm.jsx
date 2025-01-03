import React, { useState } from "react";
import axios from "axios";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css";
import redMarkerIcon from "../images/red-marker-icon.jpeg.jpg"; // Corrected path to your red marker icon

const redIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
    message: "",
  });
  const [contactsList, setContactsList] = useState([]);

  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5008/api/contacts", contact);
      alert("Contact submitted successfully!");
      setContactsList([...contactsList, contact]);
      setContact({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        jobTitle: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact:", error);
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto p-6 bg-white mt-6 rounded-lg shadow-md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} id="contact-form">
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                placeholder="Name"
                required
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                placeholder="Email"
                required
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                name="phone"
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
                placeholder="Phone Number"
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="company"
                value={contact.company}
                onChange={(e) =>
                  setContact({ ...contact, company: e.target.value })
                }
                placeholder="Company Name"
                className="w-full p-3 border border-gray-300 rounded-md text-lg"
              />
              <select
                name="country"
                id="country"
                value={contact.country}
                onChange={(e) =>
                  setContact({ ...contact, country: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="" disabled selected>
                  Country
                </option>
                <option value="nepal">Nepal</option>
                <option value="usa">USA</option>
                <option value="india">India</option>
                <option value="uk">United Kingdom</option>
                <option value="australia">Australia</option>\
                <option value="bangladesh">Bangladesh</option>
                <option value="pakistan">Pakistan</option>
                <option value="china">China</option>
                <option value="japan">Japan</option>
              </select>
              <input
                type="text"
                name="jobTitle"
                value={contact.jobTitle}
                onChange={(e) =>
                  setContact({ ...contact, jobTitle: e.target.value })
                }
                placeholder="Job Title"
                className="w-full p-3 border border-gray-300 rounded-md text-lg"
              />

              <textarea
                name="message"
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-lg"
              ></textarea>

              <button
                type="submit"
                className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {statusMessage && (
          <div
            className={`mt-4 ${
              statusMessage.includes("success")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {statusMessage}
          </div>
        )}

        {/* Map Section */}
        <div className="container mx-auto p-6 bg-white mt-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-4">Contact Locations</h3>
          <MapContainer
            center={[54.904436, -1.39683]} // Updated Center Coordinates
            zoom={16} // Adjusted zoom for better focus
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Updated Marker for University of Sunderland */}
            <Marker position={[54.904436, -1.39683]} icon={redIcon}>
              <Popup>
                <strong>University of Sunderland</strong>
                <br />
                Sunderland, UK
              </Popup>
            </Marker>

            {/* Render markers for submitted contacts */}
            {contactsList.map(
              (c, index) =>
                c.latitude &&
                c.longitude && (
                  <Marker
                    key={index}
                    position={[parseFloat(c.latitude), parseFloat(c.longitude)]}
                  >
                    <Popup>
                      <strong>{c.name}</strong>
                      <br />
                      {c.email}
                    </Popup>
                  </Marker>
                )
            )}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
