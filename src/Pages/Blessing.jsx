import React, { Component } from "react";

class Blessings extends Component {
  render() {
    return (
      <div className="min-h-screen bg-white py-24 px-6">

        <h1 className="text-5xl font-bold text-center mb-16">
          Blessings & Wishes
        </h1>

        <div className="max-w-4xl mx-auto bg-rose-50 p-10 rounded-3xl">

          <textarea
            rows="8"
            placeholder="Write your blessings..."
            className="w-full border p-5 rounded-2xl"
          ></textarea>

          <button className="mt-5 bg-amber-500 px-8 py-4 rounded-full">
            Send Wishes
          </button>

        </div>

      </div>
    );
  }
}

export default Blessings;