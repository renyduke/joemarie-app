import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          At Your Company Name, we value your privacy and are committed to
          protecting your personal information. This privacy policy outlines how
          we collect, use, and safeguard your data.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Personal identification information (Name, email address, phone
            number, etc.)
          </li>
          <li>
            Usage data (e.g., pages visited, time spent on the website, etc.)
          </li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To improve our website and services</li>
          <li>To communicate with you</li>
          <li>To process transactions</li>
        </ul>
        <p className="text-gray-600">
          If you have any questions about our Privacy Policy, please contact us
          at{" "}
          <a href="mailto:support@yourcompany.com" className="text-blue-600">
            support@yourcompany.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
