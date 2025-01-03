// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       {/* Footer Section */}
//       <footer className="py-5 bg-gray-800 text-white text-center">
//         <p>&copy; 2024 My Website. All rights reserved.</p>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Edinburgh Building, Chester Road, Sunderland SR1 3SD, United Kingdom
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+441915152000" className="hover:text-gray-400">
              +44 191 515 2000
            </a>{" "}
            | Email:{" "}
            <a
              href="mailto:info@aisolutions.co.uk"
              className="hover:text-gray-400"
            >
              info@aisolutions.co.uk
            </a>
          </p>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; 2024 Ai Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
