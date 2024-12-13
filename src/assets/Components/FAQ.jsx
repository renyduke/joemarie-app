import React from "react";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Q: What is your return policy?
            </h2>
            <p className="text-gray-600">
              A: We offer a 30-day return policy for all products, provided they
              are in original condition. Contact us for further assistance.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Q: How do I track my order?
            </h2>
            <p className="text-gray-600">
              A: You can track your order using the tracking number provided in
              your confirmation email.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Q: Do you offer international shipping?
            </h2>
            <p className="text-gray-600">
              A: Yes, we ship worldwide. Shipping costs and times vary by
              location.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Q: How can I contact customer support?
            </h2>
            <p className="text-gray-600">
              A: You can reach us via email at{" "}
              <a
                href="mailto:support@yourcompany.com"
                className="text-blue-600"
              >
                support@yourcompany.com
              </a>{" "}
              or call us at +1 234 567 890.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
