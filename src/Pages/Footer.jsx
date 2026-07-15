import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gradient-to-r from-rose-700 via-pink-600 to-rose-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-3 gap-10">

            {/* Couple Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                ❤️ Tapas & Manosmita
              </h2>

              <p className="text-rose-100 leading-7">
                Together with our families, we invite you to celebrate
                our wedding and share our happiness on this special day.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Quick Links
              </h3>

              <ul className="space-y-2 text-rose-100">
                <li><a href="/" className="hover:text-yellow-300">Home</a></li>
                <li><a href="/story" className="hover:text-yellow-300">Our Story</a></li>
                <li><a href="/events" className="hover:text-yellow-300">Events</a></li>
                <li><a href="/gallery" className="hover:text-yellow-300">Gallery</a></li>
                <li><a href="/contact" className="hover:text-yellow-300">RSVP</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Contact
              </h3>

              <div className="space-y-3 text-rose-100">
                <p>📞 +91 7681027767</p>
                <p>📧 suitsangitasahoo@gmail.com</p>
                <p>📍 Maa Mangala Temple, Harianka, Odisha</p>
              </div>
            </div>

          </div>

          <div className="border-t border-rose-400 mt-10 pt-6 text-center text-rose-100">

            <p className="mb-2">
              Made with ❤️ for our Wedding Celebration
            </p>

            <p>
              © 2027 Rahul & Priya Wedding. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>
    );
  }
}

export default Footer;