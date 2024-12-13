import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} QuickShopping. All Rights
            Reserved.
          </div>

          <div className="space-x-6">
            <a href="/privacy-policy" className="hover:text-yellow-500">
              Privacy Policy
            </a>
            <a href="/faq" className="hover:text-yellow-500">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
