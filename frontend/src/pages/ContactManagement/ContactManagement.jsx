import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactsTable from "../../Component/ContactsTable";

function ContactManagement() {
  const [contacts, setContacts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5008/api/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the backend
      const response = await fetch(`http://localhost:5008/api/contacts/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Successfully deleted, remove contact from state
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact._id !== id)
        );
        alert("Contact deleted successfully");
      } else {
        alert("Failed to delete contact");
      }
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">
        Contact Management
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-medium text-gray-800 mb-4">
          Contacts List
        </h3>
        <ContactsTable contacts={contacts} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default ContactManagement;
