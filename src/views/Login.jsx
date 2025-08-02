import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar with padding */}
      <div className="mb-10">
        <Navbar />
      </div>

      {/* Form Container with margin bottom */}
      <div className="w-[90%] mx-auto  p-10 rounded-lg  mb-24">
        <h1 className="text-5xl font-extrabold text-lime-600 mb-12">Profile</h1>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT COLUMN — Basic Info + Education */}
          <div className="space-y-10">
            {/* Basic Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic Info</h2>
              <p className="text-gray-500 mb-4">Just the essentials.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">First Name</label>
                  <input type="text" placeholder="E.g. Mari" className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                  <input type="text" placeholder="E.g. Kondo" className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-gray-700">I identify as</label>
                <select className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1 bg-transparent mt-1">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                  <option>Choose your preference</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="text-sm text-gray-700">T-shirt size</label>
                <select className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1 bg-transparent mt-1">
                  <option>Pick a T-shirt size</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-700 mb-1">City</label>
                <input type="text" placeholder="E.g. Bangalore" className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1" />
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
              <p className="text-gray-500 mb-4">All journeys count.</p>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 accent-lime-500" />
                <label className="text-sm text-gray-700">I don’t have a formal education</label>
              </div>
              <div className="mt-4">
                <label className="text-sm text-gray-700 mb-1">Education Level</label>
                <select className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1 bg-transparent">
                  <option>Bachelors</option>
                  <option>Professional</option>
                  <option>Masters</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="text-sm text-gray-700 mb-1">College Name</label>
                <input type="text" placeholder="GH Raisoni College..." className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1" />
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <input type="checkbox" className="w-4 h-4 accent-lime-500" />
                <label className="text-sm text-gray-700">I currently study here</label>
              </div>
              <div className="mt-4">
                <label className="text-sm text-gray-700 mb-1">Field of Study</label>
                <input type="text" placeholder="Computer Science & Engineering" className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-sm text-gray-700 mb-1">Graduation Year</label>
                  <select className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1 bg-transparent">
                    <option>Choose Year</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-1">Graduation Month</label>
                  <select className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1 bg-transparent">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Social Links + Contact Info */}
          <div className="space-y-10">
            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Social Links</h2>
              <p className="text-gray-500 mb-4">Let others connect with you.</p>

              {["LinkedIn", "GitHub", "Twitter", "Instagram"].map((platform) => (
                <div className="mb-4" key={platform}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{platform}</label>
                  <input
                    type="url"
                    placeholder={`Enter your ${platform} URL`}
                    className="w-full border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1"
                  />
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">How Can We Reach You?</h2>
              <p className="text-gray-500 mb-4">For updates and communication.</p>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1"
                    required
                  />
                  <button type="button" className="px-4 py-1 border-b border-lime-500 text-sm text-lime-600 hover:text-lime-700 hover:underline">Verify</button>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                <div className="flex gap-2">
                  <select className="border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1 w-1/3 bg-transparent">
                    <option>India</option>
                  </select>
                  <input type="text" placeholder="+91XXXXXXXXXX" className="flex-grow border-b border-gray-400 focus:outline-none focus:border-lime-500 py-1" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-md transition-all duration-200">
                Save Profile
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
