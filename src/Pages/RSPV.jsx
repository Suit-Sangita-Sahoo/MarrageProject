import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 py-20 px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-rose-700">
            Contact Information
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            For any wedding-related queries, please contact our families.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Groom Side */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden hover:scale-105 transition duration-500">

            <div
              className="h-60 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1200')",
              }}
            ></div>

            <div className="p-10 text-center">

              <h2 className="text-4xl font-bold text-amber-700 mb-2">
                Groom Side
              </h2>

              <h3 className="text-2xl font-semibold mb-6">
                Tapas Kumar Sahoo
              </h3>

              <div className="space-y-4 text-lg text-gray-700">

                <p>
                  👨 Father : Golak Kumar Sahoo
                </p>

                <p>
                  👩 Mother : Khira Sahoo
                </p>

                <p>
                  📞 +91 7681027767
                </p>

                <p>
                  📧 tapas@gmail.com
                </p>

              </div>

            </div>
          </div>

          {/* Bride Side */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden hover:scale-105 transition duration-500">

            <div
              className="h-60 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200')",
              }}
            ></div>

            <div className="p-10 text-center">

              <h2 className="text-4xl font-bold text-rose-700 mb-2">
                Bride Side
              </h2>

              <h3 className="text-2xl font-semibold mb-6">
                Manosmita Sahoo
              </h3>

              <div className="space-y-4 text-lg text-gray-700">

                <p>
                  👨 Father : Arun Kumar Sahoo
                </p>

                <p>
                  👩 Mother :Sujata Sahoo
                </p>

                <p>
                  📞 +91 9337461306
                </p>

                <p>
                  📧 manosmita@gmail.com
                </p>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold text-rose-700">
            We Look Forward To Celebrating With You
          </h3>

          <p className="mt-3 text-gray-600">
            Your presence will make our special day even more memorable.
          </p>
        </div>

      </div>
    );
  }
}

export default Contact;