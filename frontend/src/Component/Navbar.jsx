import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  // Conditionally render the navbar items based on the current route
  if (location.pathname === "/login") {
    // Only show the logo and AI Solution text on the login page
    return (
      <header className="flex justify-between items-center px-5 py-2.5 bg-gray-900 text-white">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="AI Solution Logo" className="max-h-20 w-auto" />
          <span className="text-2xl font-bold text-gray-50">AI Solution</span>
        </div>
      </header>
    );
  }

  if (location.pathname === "/admin") {
    // Show only Manage Contacts and Logout on the admin page
    return (
      <header className="flex justify-between items-center px-5 py-2.5 bg-gray-900 text-white">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="AI Solution Logo" className="max-h-20 w-auto" />
          <span className="text-2xl font-bold text-gray-50">AI Solution</span>
        </div>
        <nav>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="mx-4 hover:underline">
                Dashboard
              </Link>
              <Link to="/admin-services" className="mx-4 hover:underline">
                Manage Services
              </Link>
              <Link to="/admin-portfolio" className="mx-4 hover:underline">
                Manage Portfolio
              </Link>
              <Link to="/admin-gallery" className="mx-4 hover:underline">
                Manage Gallery
              </Link>
              <Link to="/contacts" className="mx-4 hover:underline">
                Manage Contacts
              </Link>
              <button onClick={handleLogout} className="mx-4 hover:underline">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="mx-4 hover:underline">
              Admin Login
            </Link>
          )}
        </nav>
      </header>
    );
  }

  // For other pages (Home, Services, Portfolio, etc.)
  return (
    <header className="flex justify-between items-center px-5 py-2.5 bg-gray-900 text-white">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="AI Solution Logo" className="max-h-20 w-auto" />
        <span className="text-2xl font-bold text-gray-50">AI Solution</span>
      </div>
      <nav>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="mx-4 hover:underline">
              Dashboard
            </Link>
            <Link to="/admin-services" className="mx-4 hover:underline">
              Manage Services
            </Link>
            <Link to="/admin-portfolio" className="mx-4 hover:underline">
              Manage Portfolio
            </Link>
            <Link to="/admin-gallery" className="mx-4 hover:underline">
              Manage Gallery
            </Link>
            <Link to="/admin-event" className="mx-4 hover:underline">
              Manage Events
            </Link>
            <Link to="/contacts" className="mx-4 hover:underline">
              Manage Contacts
            </Link>
            <button onClick={handleLogout} className="mx-4 hover:underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="mx-4 hover:underline">
              Home
            </Link>
            <Link to="/services" className="mx-4 hover:underline">
              Services
            </Link>
            <Link to="/portfolio" className="mx-4 hover:underline">
              Portfolio
            </Link>
            <Link to="/gallery" className="mx-4 hover:underline">
              Gallery
            </Link>
            <Link to="/event" className="mx-4 hover:underline">
              Events
            </Link>
            <Link to="/about" className="mx-4 hover:underline">
              About Us
            </Link>
            <Link to="/contact-form" className="mx-4 hover:underline">
              Contact Us
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
