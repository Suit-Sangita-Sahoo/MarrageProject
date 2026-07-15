import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";

class Home extends Component {
  render() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1800')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-yellow-300 text-5xl animate-pulse">
          🪔
        </div>

        <div className="absolute top-20 right-10 text-yellow-300 text-5xl animate-pulse">
          🪔
        </div>

        <div className="absolute bottom-16 left-10 text-pink-300 text-4xl animate-bounce">
          🌸
        </div>

        <div className="absolute bottom-16 right-10 text-pink-300 text-4xl animate-bounce">
          🌸
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center text-white">

          {/* Heading */}
          <h3 className="text-yellow-300 text-sm md:text-base font-semibold tracking-[5px] uppercase mb-4">
            Divine Wedding Ceremony
          </h3>

          {/* Couple Names */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Tapas
            <span className="text-yellow-300 mx-3">
              🪷
            </span>
            Manosmita
          </h1>

          {/* Animated Text */}
          <TypeAnimation
            sequence={[
              "Two Souls • One Sacred Journey",
              2500,
              "Blessed By Love & Family",
              2500,
              "Together Forever",
              2500,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="block text-base md:text-xl text-yellow-200 font-medium mb-6"
          />

          {/* Description */}
          <p className="max-w-2xl text-sm md:text-lg leading-relaxed text-gray-200 mb-8">
            With the blessings of our families and the grace of the Divine,
            we invite you to celebrate the sacred union of our hearts.
          </p>

          {/* Date */}
          <div className="font-serif text-2xl md:text-3xl font-bold text-yellow-300 mb-8">
            ✨ 19 July 2026 ✨
          </div>

          {/* Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base px-8 py-3 rounded-full shadow-xl transition duration-300 hover:scale-105">
            🌸 Save The Date 🌸
          </button>

        </div>

      </section>
    );
  }
}

export default Home;