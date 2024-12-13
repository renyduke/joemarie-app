import React from "react";

const Sale = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Sale
      </h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            src="/blog2.jpg"
            alt="Sale Item 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            NiceShoes
          </h3>
          <p className="text-lg text-gray-600 line-through mt-2">$100.00</p>
          <p className="text-lg text-yellow-500 font-semibold mt-1">$50.00</p>
          <button className="mt-4 px-6 py-2 text-white font-semibold bg-yellow-500 hover:bg-yellow-400 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">
            Add to Cart
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            src="/blog3.jpg"
            alt="Sale Item 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            greatShoes
          </h3>
          <p className="text-lg text-gray-600 line-through mt-2">$80.00</p>
          <p className="text-lg text-yellow-500 font-semibold mt-1">$40.00</p>
          <button className="mt-4 px-6 py-2 text-white font-semibold bg-yellow-500 hover:bg-yellow-400 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">
            Add to Cart
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            src="/blog1.jpg"
            alt="Sale Item 3"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Joeshoes</h3>
          <p className="text-lg text-gray-600 line-through mt-2">$120.00</p>
          <p className="text-lg text-yellow-500 font-semibold mt-1">$60.00</p>
          <button className="mt-4 px-6 py-2 text-white font-semibold bg-yellow-500 hover:bg-yellow-400 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">
            Add to Cart
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            src="/blog4.jpg"
            alt="Sale Item 4"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            shoesStick
          </h3>
          <p className="text-lg text-gray-600 line-through mt-2">$90.00</p>
          <p className="text-lg text-yellow-500 font-semibold mt-1">$45.00</p>
          <button className="mt-4 px-6 py-2 text-white font-semibold bg-yellow-500 hover:bg-yellow-400 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale;
