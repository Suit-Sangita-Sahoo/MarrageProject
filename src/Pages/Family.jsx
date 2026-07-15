import React, { Component } from "react";

class Family extends Component {
  render() {
    return (
      <div className="min-h-screen bg-amber-50 py-24 px-6">

        <h1 className="text-5xl font-bold text-center mb-16 text-rose-700">
          Our Families
        </h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Groom Family */}

          <div
            className="relative h-96 rounded-3xl overflow-hidden shadow-xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200')",
            }}
          >
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative z-10 flex flex-col justify-center h-full p-10 text-white">

              <h2 className="text-4xl font-bold mb-6">
                Groom Family
              </h2>

              <ul className="space-y-4 text-lg">
                <li>👨 Golak Sahoo</li>
                <li>👩 Khira Sahoo</li>
                <li>🧑Lipu </li>
              </ul>

            </div>
          </div>

          {/* Bride Family */}

          <div
            className="relative h-96 rounded-3xl overflow-hidden shadow-xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200')",
            }}
          >
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative z-10 flex flex-col justify-center h-full p-10 text-white">

              <h2 className="text-4xl font-bold mb-6">
                Bride Family
              </h2>

              <ul className="space-y-4 text-lg">
                <li>👨 Arun Kumar Sahoo</li>
                <li>👩 Sujata Sahoo</li>
                <li>👧 Sister Name</li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Family;