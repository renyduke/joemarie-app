import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-[#F6F8FD]">
      {/* Sidebar */}
      <div className="w-64 bg-blue-500 text-white flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-sm mt-2 text-gray-200">
            Manage your sales and content.
          </p>
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "Sale", path: "/Sale" },
              { name: "Blog", path: "/Blog" },
              { name: "Contact", path: "/Contact" },
              { name: "Dashboard", path: "/Dashboard" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header Section */}
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800">Hello, Dita!</h1>
          <p className="mt-1 text-md text-gray-600">
            Manage your sales easier and more fun.
          </p>
        </div>

        {/* Activity Section */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            {
              title: "Balance",
              value: "$322",
              bgColor: "bg-blue-100",
              textColor: "text-blue-600",
            },
            {
              title: "Delivery",
              value: "102",
              bgColor: "bg-pink-100",
              textColor: "text-pink-600",
            },
            {
              title: "Sold",
              value: "1,022",
              bgColor: "bg-green-100",
              textColor: "text-green-600",
            },
            {
              title: "Stock Available",
              value: "320",
              bgColor: "bg-yellow-100",
              textColor: "text-yellow-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} shadow-lg rounded-lg py-4 text-center`}
            >
              <h2 className={`text-xl font-bold ${stat.textColor}`}>
                {stat.title}
              </h2>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Stock and Sell Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800">Stock</h2>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Nike Air Max", available: 20 },
                { name: "Yeezy", available: 120 },
                { name: "Adidas", available: 60 },
                { name: "Puma", available: 82 },
                { name: "Converse", available: 143 },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-700"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-blue-500 font-semibold">
                    {item.available}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800">Sell</h2>
            {/* Example graph placeholder */}
            <div className="mt-6 h-40 bg-blue-50 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Graph Placeholder</span>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold">Nike Air Max</h2>
            <p className="mt-2 text-lg font-bold">$253</p>
            {/* Product Image */}
            <div className="mt-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Nike Air Max"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Inbox Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800">Inbox</h2>
            <ul className="mt-4 space-y-3">
              {[
                {
                  name: "Sintia Karimah",
                  message: "Hi Sir... are Nike Air Max shoes available?",
                  time: "08:00 AM",
                },
                {
                  name: "Markonah",
                  message: "I'm ordering 1 set Nike Air Max.",
                  time: "12:24 AM",
                },
                {
                  name: "Michel Joni",
                  message: "Are there any discounts available?",
                  time: "01:32 PM",
                },
              ].map((chat, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-800">{chat.name}</p>
                    <p className="text-sm text-gray-500">{chat.message}</p>
                  </div>
                  <span className="text-sm text-gray-400">{chat.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
