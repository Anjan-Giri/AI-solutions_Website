import React, { useState } from "react";

const AdminSettings = () => {
  const [fontSize, setFontSize] = useState("medium");
  const [theme, setTheme] = useState("light");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSaveSettings = () => {
    setSuccessMessage("Display settings updated successfully.");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setTimeout(() => setErrorMessage(""), 3000);
    } else {
      setSuccessMessage("Password changed successfully.");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

        {/* Display Settings Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Display Settings
          </h2>
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
              Font Size
            </label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <button
            onClick={handleSaveSettings}
            className="mt-6 w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Save Settings
          </button>
        </section>

        {/* Password Management Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Password Management
          </h2>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter current password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm new password"
            />
          </div>

          <button
            onClick={handleChangePassword}
            className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Change Password
          </button>
        </section>

        {/* Feedback Messages */}
        {successMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSettings;
