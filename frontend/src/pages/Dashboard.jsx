import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);
  const [inquiryData, setInquiryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchChartData();
      setChartData(data);
      const inquiries = await fetchInquiryData();
      setInquiryData(inquiries);
    };

    fetchData();
  }, []);

  const fetchChartData = async () => {
    return {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales Trends",
          data: [100, 200, 150, 250, 300],
          borderColor: "#36a2eb",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          tension: 0.4,
        },
      ],
    };
  };

  const fetchInquiryData = async () => {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Number of Inquiries",
          data: [150, 300, 200, 500, 400, 700, 600], // Increased number of inquiries
          backgroundColor: "#4caf50",
          borderColor: "#388e3c",
          borderWidth: 1,
        },
      ],
    };
  };

  if (!chartData || !inquiryData) {
    return (
      <div className="text-center text-xl text-teal-600 mt-10">Loading...</div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Dashboard Overview
        </h2>

        {/* Stats Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Total Users */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-teal-600">5000</p>
          </div>

          {/* New Inquiries */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">
              New Inquiries
            </h3>
            <p className="text-2xl font-bold text-teal-600">1500</p>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">
              Upcoming Events
            </h3>
            <p className="text-2xl font-bold text-teal-600">5</p>
          </div>

          {/* Active Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700">
              Active Services
            </h3>
            <p className="text-2xl font-bold text-teal-600">8</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Inquiry Trends Bar Chart (Bigger and First) */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-4/5"
            style={{ height: "400px" }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Inquiry Trends (Monthly)
            </h3>
            <div className="w-full h-full">
              <Bar
                data={inquiryData}
                options={{ responsive: true }}
                height={-1000} // Setting height here for Bar chart
              />
            </div>
          </div>

          {/* Sales Trends Line Chart */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-4/5"
            style={{ height: "400px" }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Sales Trends
            </h3>
            <div className="w-full h-full">
              <Line
                data={chartData}
                options={{ responsive: true }}
                height={-1000} // Setting height here for Line chart
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
