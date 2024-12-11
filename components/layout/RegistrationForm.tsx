import React from "react";

const RegistrationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-#F8F8F8-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Registration Form</h2>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 required">
              Name 
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 required">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Github Account */}
          <div className="mb-4">
            <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1 required">
              Github Account
            </label>
            <input
              type="url"
              id="github"
              name="github"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your Github URL"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 required">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Portfolio Website */}
          <div className="mb-6">
            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
              Portfolio Website
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your portfolio URL"
            />
          </div>

          {/* LinkedIn */}
          <div className="mb-6">
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1 required">
              LinkedIn
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your LinkedIn URL"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
