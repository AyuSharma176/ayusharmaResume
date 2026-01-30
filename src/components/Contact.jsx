import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt,FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 relative inline-block">
          Get In Touch
          <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3 border border-slate-700/50 hover:border-cyan-500/50">
            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Email</h3>
            <a href="mailto:ayusharma1706@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              ayusharma1706@gmail.com
            </a>
          </div>
          
          <div className="group bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 border border-slate-700/50 hover:border-blue-500/50">
            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <FaPhone />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
            <span className="text-slate-400">+91 6396168485</span>
          </div>
          
          <div className="group bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 border border-slate-700/50 hover:border-purple-500/50">
            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Location</h3>
            <span className="text-slate-400">India</span>
          </div>
        </div>
        
        <div className="bg-slate-800/40 backdrop-blur-xl p-10 rounded-2xl shadow-lg border border-slate-700/50 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/AyuSharma176" target="_blank" rel="noopener noreferrer" 
               className="w-16 h-16 flex items-center justify-center bg-slate-700/50 border-2 border-cyan-500 text-cyan-400 rounded-full text-2xl hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-110 hover:rotate-[360deg] transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ayusharma17/" target="_blank" rel="noopener noreferrer" 
               className="w-16 h-16 flex items-center justify-center bg-slate-700/50 border-2 border-blue-500 text-blue-400 rounded-full text-2xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:scale-110 hover:rotate-[360deg] transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/50">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/ayusharma17" target="_blank" rel="noopener noreferrer" 
               className="w-16 h-16 flex items-center justify-center bg-slate-700/50 border-2 border-purple-500 text-purple-400 rounded-full text-2xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-600 hover:text-white hover:border-transparent hover:scale-110 hover:rotate-[360deg] transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-purple-500/50">
              <FaTwitter />
            </a>
           
          </div>
        </div>
        
        <footer className="text-center mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500">&copy; 2026 Ayush Sharma. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
