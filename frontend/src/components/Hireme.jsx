import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function HireMe() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's work together to create 
            something amazing. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-700/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">jitenshreshtha07@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-700/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+1 (416) 857-9012</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-700/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-400">Kitchener-Waterloo, ON, Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hire Me Form */}
          <div className="relative bg-black/40 backdrop-blur-md rounded-2xl shadow-lg p-8 animate-slide-up">
            <form className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Jiten"
                    className="w-full px-4 py-2 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Shrestha"
                    className="w-full px-4 py-2 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">Email</label>
                <input 
                  type="email" 
                  placeholder="your email"
                  className="w-full px-4 py-2 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 outline-none transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-2 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 outline-none transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">Message</label>
                <textarea 
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 outline-none transition min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 shadow-lg hover:opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HireMe;
