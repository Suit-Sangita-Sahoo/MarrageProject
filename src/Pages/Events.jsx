import React, { Component } from "react";
import { motion } from "framer-motion";

class Events extends Component {
  render() {
    const events = [
      {
        title: "Mehendi Ceremony",
        date: "18 JUL 2026",
        time: "07:00 PM",
        image: "/images/mehendi.jpg",
      },
      {
        title: "Haldi Ceremony",
        date: "19 JUL 2026",
        time: "10:00 AM",
        image: "/images/haldi.jpg",
      },
      {
        title: "Sangeet Night",
        date: "18 JUL 2026",
        time: "07:00 PM",
        image: "/images/sangeet.jpg",
      },
      {
        title: "Wedding Ceremony",
        date: "19 JUL 2026",
        time: "06:00 PM",
        image: "/images/wedding.jpg",
      },
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
          Wedding Events ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 mb-16 text-lg"
        >
          Celebrate every beautiful moment with us
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {events.map((event, index) => (
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
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group relative h-96 rounded-[35px] overflow-hidden shadow-2xl cursor-pointer"
            >

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${event.image})`,
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Shine Effect */}
              <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-1000 group-hover:left-[120%]"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                <motion.h2
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl md:text-4xl font-bold mb-3"
                >
                  {event.title}
                </motion.h2>

                <div className="space-y-2 text-lg">

                  <p className="font-medium">
                    📅 {event.date}
                  </p>

                  <p className="font-medium">
                    ⏰ {event.time}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    );
  }
}

export default Events;