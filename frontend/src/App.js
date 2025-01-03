// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import "./index.css";
// import Navbar from "./Component/Navbar.jsx";
// import LoginPage from "./Component/Login";
// import ContactManagement from "./pages/ContactManagement/ContactManagement";
// import PrivateRoute from "./PrivateRoute";
// import ContactForm from "./Component/ContactForm";
// import Footer from "./Component/Footer.jsx";
// import Home from "./pages/Home.jsx";
// import Chatbot from "./Component/Chatbot.jsx";
// import Portfolio from "./pages/Portfolio.jsx";
// import Gallery from "./pages/Gallery.jsx";
// import Services from "./pages/Services.jsx";
// import About from "./pages/About.jsx";
// import Dashboard from "./pages/Dashboard";
// import AdminServices from "./pages/Admin-services.jsx";
// import AdminPortfolio from "./pages/Admin-portfolio.jsx";
// import AdminGallery from "./pages/Admin-gallery.jsx";

// function AppContent({ isAuthenticated, handleLoginSuccess }) {
//   const location = useLocation();

//   const excludeFooterAndChatbot = [
//     "/dashboard",
//     "/admin-services",
//     "/admin-portfolio",
//     "/admin-gallery",
//     "/contacts",
//     "/login",
//   ];

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/contact-form" element={<ContactForm />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/login"
//           element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
//         />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <ContactManagement />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/admin-services"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <AdminServices />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/admin-gallery"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <AdminGallery />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/admin-portfolio"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <AdminPortfolio />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//       {!excludeFooterAndChatbot.includes(location.pathname) && (
//         <>
//           <Footer />
//           <Chatbot />
//         </>
//       )}
//     </>
//   );
// }

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!localStorage.getItem("token")
//   );

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <AppContent
//         isAuthenticated={isAuthenticated}
//         handleLoginSuccess={handleLoginSuccess}
//       />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Navbar from "./Component/Navbar.jsx";
import LoginPage from "./Component/Login";
import ContactManagement from "./pages/ContactManagement/ContactManagement";
import PrivateRoute from "./PrivateRoute";
import ContactForm from "./Component/ContactForm";
import Footer from "./Component/Footer.jsx";
import Home from "./pages/Home.jsx";
import Chatbot from "./Component/Chatbot.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Gallery from "./pages/Gallery.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard";
import AdminServices from "./pages/Admin-services.jsx";
import AdminPortfolio from "./pages/Admin-portfolio.jsx";
import AdminGallery from "./pages/Admin-gallery.jsx";
import Setting from "./pages/Setting.jsx";
import Event from "./pages/Event.jsx";
import AdminEvent from "./pages/Admin-event.jsx";

function AppContent({ isAuthenticated, handleLoginSuccess }) {
  const location = useLocation();

  const excludeFooterAndChatbot = [
    "/dashboard",
    "/admin-services",
    "/admin-portfolio",
    "/admin-gallery",
    "/admin-event",
    "/contacts",
    "/login",
    "/setting",
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event" element={<Event />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ContactManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-services"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AdminServices />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-gallery"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AdminGallery />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-event"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AdminEvent /> {/* Correct component here */}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-portfolio"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AdminPortfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Setting />
            </PrivateRoute>
          }
        />
      </Routes>
      {!excludeFooterAndChatbot.includes(location.pathname) && (
        <>
          <Footer />
          <Chatbot />
        </>
      )}
    </>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        handleLoginSuccess={handleLoginSuccess}
      />
    </Router>
  );
}

export default App;
