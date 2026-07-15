import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 py-20 px-6">

        <h1 className="text-5xl font-bold text-center text-rose-700 mb-4">
          RSVP & Blessings
        </h1>

        <p className="text-center text-gray-600 mb-12">
          We would be honored to celebrate our special day with you.
        </p>

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl">

          <form>

            <div className="mb-5">
              <label className="block font-semibold mb-2">
                Guest Name
              </label>

              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>

            <div className="mb-5">
              <label className="block font-semibold mb-2">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>

            <div className="mb-5">
              <label className="block font-semibold mb-2">
                Number of Guests
              </label>

              <input
                type="number"
                placeholder="How many guests?"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>

            <div className="mb-5">
              <label className="block font-semibold mb-2">
                Will You Attend?
              </label>

              <select className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400">
                <option>Yes, I will attend</option>
                <option>No, I can't attend</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">
                Blessings / Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your wishes..."
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 rounded-xl transition duration-300"
            >
              Submit RSVP
            </button>

          </form>

        </div>

      </div>
    );
  }
}

export default Contact;