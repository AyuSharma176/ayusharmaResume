import React, { useState, useEffect, useCallback } from 'react'
import { FaBars, FaTimes, FaPalette } from 'react-icons/fa'
import { themes, defaultTheme } from '../themes'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)
  
  // Initialize theme from localStorage
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('selectedTheme')
    return savedTheme && themes[savedTheme] ? savedTheme : defaultTheme
  })

  // Apply theme to document
  const applyTheme = useCallback((themeName) => {
    const theme = themes[themeName]
    if (!theme) return

    const root = document.documentElement
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
  }, [])

  // Apply theme on mount and when theme changes
  useEffect(() => {
    applyTheme(currentTheme)
  }, [currentTheme, applyTheme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle theme change
  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName)
    applyTheme(themeName)
    localStorage.setItem('selectedTheme', themeName)
    setThemeMenuOpen(false)
  }

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuOpen && !event.target.closest('.theme-dropdown')) {
        setThemeMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [themeMenuOpen])

  const navItems = ['About', 'Education', 'Experience', 'Skills', 'Projects', 'Coding Profiles', 'Contact']

  const getNavHref = (item) => {
    if (item === 'Coding Profiles') {
      return '#competitiveprogramming'
    }
    return `#${item.toLowerCase()}`
  }

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'shadow-2xl shadow-black/50 border-b py-3' 
          : 'border-b py-4'
      } backdrop-blur-xl backdrop-saturate-150`}
      style={{
        backgroundColor: scrolled ? `${themes[currentTheme]?.colors.surface}99` : `${themes[currentTheme]?.colors.surface}66`,
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}>
        {/* Glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Top highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
             style={{ background: `linear-gradient(to right, transparent, ${themes[currentTheme]?.colors.primary}30, transparent)` }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center">
            <div className="logo group">
              <h1 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent drop-shadow-sm group-hover:scale-105 transition-transform cursor-pointer"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${themes[currentTheme]?.colors.primary}, ${themes[currentTheme]?.colors.secondary}, ${themes[currentTheme]?.colors.accent})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                Ayush Sharma
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href={getNavHref(item)} 
                  className="relative px-5 py-2.5 font-semibold text-sm transition-all duration-300 group"
                  style={{ color: 'var(--color-textSecondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-textSecondary)'}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"
                        style={{ background: `linear-gradient(to bottom right, ${themes[currentTheme]?.colors.primary}15, ${themes[currentTheme]?.colors.secondary}15)` }}></span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-[80%]"
                        style={{ background: `linear-gradient(to right, ${themes[currentTheme]?.colors.primary}, ${themes[currentTheme]?.colors.secondary})` }}></span>
                </a>
              ))}
              
              {/* Theme Dropdown */}
              <div className="relative theme-dropdown ml-2">
                <button
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                  className="relative px-4 py-2.5 rounded-full border transition-all duration-300 group flex items-center gap-3 backdrop-blur-md"
                  style={{ 
                    backgroundColor: `${themes[currentTheme]?.colors.surface}99`,
                    borderColor: `${themes[currentTheme]?.colors.primary}30`,
                    color: 'var(--color-text)'
                  }}
                  title="Change Theme"
                >
                  {/* Color Dots */}
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themes[currentTheme]?.colors.primary }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themes[currentTheme]?.colors.secondary }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themes[currentTheme]?.colors.accent }}></div>
                  </div>
                  
                  {/* Theme Name */}
                  <span className="font-medium text-sm">{themes[currentTheme]?.name}</span>
                  
                  {/* Dropdown Arrow */}
                  <svg className="w-4 h-4 transition-transform duration-300" style={{ transform: themeMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ background: `linear-gradient(to bottom right, ${themes[currentTheme]?.colors.primary}10, ${themes[currentTheme]?.colors.secondary}10)` }}></span>
                </button>
                
                {/* Dropdown Menu */}
                {themeMenuOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-56 rounded-xl shadow-2xl border overflow-hidden z-50 backdrop-blur-xl"
                    style={{ 
                      backgroundColor: 'var(--color-surface)',
                      borderColor: `${themes[currentTheme]?.colors.primary}30`
                    }}
                  >
                    <div className="py-2 max-h-96 overflow-y-auto custom-scrollbar">
                      {Object.entries(themes).map(([key, theme]) => (
                        <button
                          key={key}
                          onClick={() => handleThemeChange(key)}
                          className="w-full px-4 py-3 text-left font-medium transition-all duration-200 flex items-center justify-between group"
                          style={{ 
                            backgroundColor: currentTheme === key ? `${themes[currentTheme]?.colors.primary}20` : 'transparent',
                            color: currentTheme === key ? 'var(--color-primary)' : 'var(--color-textSecondary)'
                          }}
                          onMouseEnter={(e) => {
                            if (currentTheme !== key) {
                              e.currentTarget.style.backgroundColor = `${themes[currentTheme]?.colors.primary}10`
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentTheme !== key) {
                              e.currentTarget.style.backgroundColor = 'transparent'
                            }
                          }}
                        >
                          <span>{theme.name}</span>
                          {currentTheme === key && (
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}></span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="px-3 py-2 rounded-full border transition-all duration-300 theme-dropdown flex items-center gap-2 backdrop-blur-md"
                style={{ 
                  backgroundColor: `${themes[currentTheme]?.colors.surface}99`,
                  borderColor: `${themes[currentTheme]?.colors.primary}30`,
                  color: 'var(--color-text)'
                }}
                aria-label="Change theme"
              >
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: themes[currentTheme]?.colors.primary }}></div>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: themes[currentTheme]?.colors.secondary }}></div>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: themes[currentTheme]?.colors.accent }}></div>
                </div>
                <svg className="w-3 h-3 transition-transform duration-300" style={{ transform: themeMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-2xl rounded-lg transition-all duration-300"
                style={{ color: 'var(--color-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${themes[currentTheme]?.colors.primary}10`}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Theme Dropdown */}
      {themeMenuOpen && (
        <div 
          className="fixed top-20 right-4 w-64 md:hidden rounded-xl shadow-2xl border overflow-hidden z-50 backdrop-blur-xl"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: `${themes[currentTheme]?.colors.primary}30`
          }}
        >
          <div className="py-2 max-h-80 overflow-y-auto custom-scrollbar">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => {
                  handleThemeChange(key)
                  setThemeMenuOpen(false)
                }}
                className="w-full px-4 py-3 text-left font-medium transition-all duration-200 flex items-center justify-between"
                style={{ 
                  backgroundColor: currentTheme === key ? `${themes[currentTheme]?.colors.primary}20` : 'transparent',
                  color: currentTheme === key ? 'var(--color-primary)' : 'var(--color-textSecondary)'
                }}
              >
                <span className="text-sm">{theme.name}</span>
                {currentTheme === key && (
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        
        {/* Drawer */}
        <div className={`absolute top-0 right-0 h-full w-72 backdrop-blur-xl border-l shadow-2xl transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: `${themes[currentTheme]?.colors.surface}f2`,
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ 
                 background: `linear-gradient(to bottom right, ${themes[currentTheme]?.colors.primary}20, ${themes[currentTheme]?.colors.secondary}20, ${themes[currentTheme]?.colors.accent}20)`
               }}></div>
          
          {/* Close button */}
          <div className="flex justify-between items-center p-6 border-b relative"
               style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <h2 className="text-xl font-bold bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${themes[currentTheme]?.colors.primary}, ${themes[currentTheme]?.colors.secondary})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
              Menu
            </h2>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-2xl rounded-lg transition-all duration-300"
              style={{ color: 'var(--color-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${themes[currentTheme]?.colors.primary}10`}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col p-6 gap-2 relative">
            {navItems.map((item, index) => (
              <a 
                key={item}
                href={getNavHref(item)}
                onClick={handleNavClick}
                className="group relative px-5 py-4 font-semibold transition-all duration-300 rounded-xl border border-transparent"
                style={{
                  color: 'var(--color-textSecondary)',
                  animationDelay: `${index * 50}ms`,
                  animation: mobileMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-primary)'
                  e.currentTarget.style.background = `linear-gradient(to right, ${themes[currentTheme]?.colors.primary}10, ${themes[currentTheme]?.colors.secondary}10)`
                  e.currentTarget.style.borderColor = `${themes[currentTheme]?.colors.primary}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-textSecondary)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: 'var(--color-primary)' }}></span>
                  {item}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 3px;
          opacity: 0.5;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-secondary);
        }
      `}} />
    </>
  )
}

export default Header
