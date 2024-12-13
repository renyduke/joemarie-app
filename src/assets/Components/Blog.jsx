import React from "react";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Shoe Blog
      </h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="/shoesblog1.jpg"
            alt="Blog Post 1"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            The Ultimate Guide to Choosing Comfortable Shoes
          </h3>
          <p className="mt-2 text-gray-600">
            Learn how to pick the perfect pair of shoes for comfort and style,
            no matter the occasion.
          </p>
          <button className="mt-4 text-yellow-500 font-semibold hover:text-yellow-400 transition-all duration-200">
            Read More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="/shoesblog2.jpg"
            alt="Blog Post 2"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            10 Must-Have Sneakers for Every Shoe Lover
          </h3>
          <p className="mt-2 text-gray-600">
            Discover the top sneakers that combine functionality, design, and
            trend-setting appeal.
          </p>
          <button className="mt-4 text-yellow-500 font-semibold hover:text-yellow-400 transition-all duration-200">
            Read More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="/shoesblog3.jpg"
            alt="Blog Post 3"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            Exploring Shoe Trends in San Carlos City
          </h3>
          <p className="mt-2 text-gray-600">
            Dive into the latest shoe styles and trends taking over San Carlos
            City's fashion scene.
          </p>
          <button className="mt-4 text-yellow-500 font-semibold hover:text-yellow-400 transition-all duration-200">
            Read More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="/shoesbllog4.jpg"
            alt="Blog Post 4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            Beginner’s Guide to Cleaning Your Sneakers
          </h3>
          <p className="mt-2 text-gray-600">
            Step-by-step instructions to keep your sneakers fresh and clean
            without damaging them.
          </p>
          <button className="mt-4 text-yellow-500 font-semibold hover:text-yellow-400 transition-all duration-200">
            Read More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="/shoesblog5.jpg"
            alt="Blog Post 5"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            The Future of Eco-Friendly Shoe Materials
          </h3>
          <p className="mt-2 text-gray-600">
            Discover how sustainable materials are reshaping the shoe industry
            for a greener future.
          </p>
          <button className="mt-4 text-yellow-500 font-semibold hover:text-yellow-400 transition-all duration-200">
            Read More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="/shoesblog6.jpg"
            alt="Blog Post 6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            Mastering the Art of Pairing Shoes with Outfits
          </h3>
          <p className="mt-2 text-gray-600">
            Tips and tricks for creating stylish looks by matching your shoes
            with your wardrobe.
          </p>
          <button className="mt-4 text-yellow-500 font-semibold hover:text-yellow-400 transition-all duration-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
