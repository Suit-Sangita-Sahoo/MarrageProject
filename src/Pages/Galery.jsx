import React, { Component } from "react";
import { motion } from "framer-motion";

class Gallery extends Component {
  render() {
    const images = [
      "/images/Papu Bhai1.jpeg",
      "/images/Papu Bhai2.jpeg",
      "/images/Papu Bhai3.jpeg",
      "/images/Papu Bhai4.jpeg",
      "/images/Bhauja3.jpeg",
      "/images/Bhauja5.jpeg",
      "/images/Bhauja7.png",
       "/images/Bhauja3.jpeg",
    ];

    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 py-24 px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center text-rose-700 mb-4"
        
        >
          Wedding Gallery 📸
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 mb-16 text-lg"
        >
          Beautiful memories captured forever
        </motion.p>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
            >

              {/* Image */}
              <img
                src={img}
                alt={`Wedding ${index + 1}`}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"></div>

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 text-4xl">
                  💍
                </div>

              </div>

              {/* Shine Effect */}
              <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-1000 group-hover:left-[120%]"></div>

            </motion.div>
          ))}

        </div>

      </div>
    );
  }
}

export default Gallery;