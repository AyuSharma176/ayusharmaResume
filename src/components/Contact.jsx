import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt,FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 relative inline-block" style={{ color: 'var(--color-text)' }}>
          Get In Touch
          <span className="absolute bottom-0 left-0 w-20 h-1.5 rounded-full" style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }}></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group backdrop-blur-xl p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-3" style={{ backgroundColor: 'var(--color-background)', boxShadow: '0 4px 28px 0 var(--color-primary)' }}>
            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))', color: 'var(--color-text)' }}>
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>Email</h3>
            <a href="mailto:ayusharma1706@gmail.com" className="transition-colors" style={{ color: 'var(--color-textSecondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-textSecondary)'}>
              ayusharma1706@gmail.com
            </a>
          </div>
          
          <div className="group backdrop-blur-xl p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-3" style={{ backgroundColor: 'var(--color-background)', boxShadow: '0 4px 28px 0 var(--color-secondary)' }}>
            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, var(--color-secondary), var(--color-accent))', color: 'var(--color-text)' }}>
              <FaPhone />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>Phone</h3>
            <span style={{ color: 'var(--color-textSecondary)' }}>+91 6396168485</span>
          </div>
          
          <div className="group backdrop-blur-xl p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-3" style={{ backgroundColor: 'var(--color-background)', boxShadow: '0 4px 28px 0 var(--color-accent)' }}>
            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, var(--color-accent), var(--color-primary))', color: 'var(--color-text)' }}>
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>Location</h3>
            <span style={{ color: 'var(--color-textSecondary)' }}>India</span>
          </div>
        </div>
        
        <div className="backdrop-blur-xl p-10 rounded-2xl text-center" style={{ backgroundColor: 'var(--color-background)', boxShadow: '0 4px 28px 0 var(--color-primary)' }}>
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Connect with me</h3>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/AyuSharma176" target="_blank" rel="noopener noreferrer" 
               className="w-16 h-16 flex items-center justify-center rounded-full text-2xl hover:scale-110 hover:rotate-[360deg] transition-all duration-500"
               style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)', boxShadow: '0 4px 16px 0 var(--color-primary)' }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ayusharma17/" target="_blank" rel="noopener noreferrer" 
               className="w-16 h-16 flex items-center justify-center rounded-full text-2xl hover:scale-110 hover:rotate-[360deg] transition-all duration-500"
               style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-secondary)', boxShadow: '0 4px 16px 0 var(--color-secondary)' }}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/ayusharma17" target="_blank" rel="noopener noreferrer" 
               className="w-16 h-16 flex items-center justify-center rounded-full text-2xl hover:scale-110 hover:rotate-[360deg] transition-all duration-500"
               style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-accent)', boxShadow: '0 4px 16px 0 var(--color-accent)' }}>
              <FaTwitter />
            </a>
           
          </div>
        </div>
        
        <footer className="text-center mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-surface)' }}>
          <p style={{ color: 'var(--color-textSecondary)', opacity: 0.6 }}>&copy; 2026 Ayush Sharma. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
