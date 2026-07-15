import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.audioRef = createRef();

    this.state = {
      playing: false,
    };
  }

  componentDidMount() {
    const startMusic = () => {
      if (this.audioRef.current) {
        this.audioRef.current.play();

        this.setState({
          playing: true,
        });
      }

      document.removeEventListener(
        "click",
        startMusic
      );
    };

    document.addEventListener(
      "click",
      startMusic
    );
  }

  toggleMusic = () => {
    const audio = this.audioRef.current;

    if (!audio) return;

    if (this.state.playing) {
      audio.pause();

      this.setState({
        playing: false,
      });
    } else {
      audio.play();

      this.setState({
        playing: true,
      });
    }
  };

  render() {
    return (
      <>
        {/* Music */}
        <audio ref={this.audioRef} loop>
          <source
            src="/music/wedding-song.mp3"
            type="audio/mpeg"
          />
        </audio>

        <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">

  <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

    {/* Peacock Logo */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-full flex items-center"
    >
      <img
        src="/images/peacock-logo.png"
        alt="Peacock Wedding Logo"
        className="h-full object-contain"
      />
    </motion.div>

    {/* Navigation */}
    <ul className="hidden md:flex gap-8 text-white font-medium">

      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/events">Events</Link>
      </li>

      <li>
        <Link to="/gallery">Gallery</Link>
      </li>

      <li>
        <Link to="/family">Family</Link>
      </li>

      <li>
        <Link to="/venue">Venue</Link>
      </li>

      <li>
        <Link to="/rsvp">RSVP</Link>
      </li>

    </ul>

    {/* Music Button */}
    <button
      onClick={this.toggleMusic}
      className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full shadow-lg transition"
    >
      {this.state.playing ? "⏸ Pause" : "🎵 Music"}
    </button>

  </div>

</nav>
      </>
    );
  }
}

export default Navbar;