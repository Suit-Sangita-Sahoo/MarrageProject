import React, { Component } from "react";

class Venue extends Component {
  render() {
    return (
      <div className="min-h-screen bg-white py-24 px-6">

        <h1 className="text-5xl font-bold text-center mb-16 text-rose-700">
          Wedding Venue
        </h1>

        <div className="max-w-5xl mx-auto bg-rose-50 p-10 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold mb-4">
            Maa Mangala Temple
          </h2>

          <p className="mb-6 text-lg text-gray-700">
            📍 Harianka, Kendrapara, Odisha
          </p>

          <iframe
            title="Maa Mangala Temple Location"
            className="w-full h-96 rounded-2xl border-0"
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Maa%20Mangala%20Temple%20Harianka%20Odisha&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>

        </div>

      </div>
    );
  }
}

export default Venue;