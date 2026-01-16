import React, { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/60 shadow-2xl shadow-black/50 border-b border-white/10 py-3' 
        : 'bg-slate-900/40 border-b border-white/5 py-4'
    } backdrop-blur-xl backdrop-saturate-150`}>
      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center">
          <div className="logo group">
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm group-hover:scale-105 transition-transform cursor-pointer">
              Ayush Sharma
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative px-5 py-2.5 text-slate-300 font-semibold text-sm hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[80%] rounded-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
