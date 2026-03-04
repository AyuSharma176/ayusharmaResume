import React, { useState, useEffect } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  const roles = ["Developer", "Student", "Engineer"];

  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 80 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.substring(0, roleText.length + 1));

        if (roleText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setRoleText(currentRole.substring(0, roleText.length - 1));

        if (roleText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);
  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Animated dark background */}
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-background)' }}></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, var(--color-primary)20, var(--color-secondary)20, var(--color-accent)20)' }}></div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.15 }}></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s", backgroundColor: 'var(--color-secondary)', opacity: 0.15 }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s", backgroundColor: 'var(--color-primary)', opacity: 0.15 }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20 pt-20 md:pt-0">
        <div className="animate-fadeInUp">
          {/* Profile Image and Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center mb-8">
            {/* Profile Image */}
            <div className="relative group mx-auto md:mx-0">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 rounded-full opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-300 animate-pulse" style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-accent))' }}></div>
              {/* Image container */}
              <div className="relative w-48 h-48 md:w-48 md:h-48 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300" style={{ boxShadow: '0 0 32px 4px var(--color-primary)' }}>
                <img
                  src="/profile.png"
                  alt="Ayush Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-5xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: 'var(--color-text)' }}>
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]" style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Ayush Sharma
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-accent))' }}></span>
                </span>
              </h2>
              <p className="text-lg md:text-xl font-bold flex items-center justify-center md:justify-start gap-3" style={{ color: 'var(--color-primary)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-primary)' }}></span>
                <span>
                  {roleText}
                  <span className="ml-1 animate-pulse">|</span>
                </span>
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl" style={{ color: 'var(--color-textSecondary)' }}>
            Passionate computer science student with a strong foundation in{" "}
            <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
              software development
            </span>
            ,{" "}
            <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>data structures</span>
            , and{" "}
            <span className="font-semibold" style={{ color: 'var(--color-accent)' }}>algorithms</span>.
            Building innovative solutions and seeking opportunities to make an
            impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="group flex items-center gap-4 backdrop-blur-xl rounded-2xl px-6 py-5 transition-all duration-300 hover:scale-105" style={{ color: 'var(--color-text)', backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 24px 0 var(--color-primary), 0 1.5px 8px 0 var(--color-secondary)' }}>
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))' }}>
                <FaEnvelope className="text-white text-xl animate-float" />
              </div>
              <div className="flex-1 min-w-0">
                <a
                  href="mailto:ayusharma1706@gmail.com"
                  className="text-sm font-semibold transition-colors truncate block"
                  style={{ color: 'var(--color-text)' }}
                >
                  ayusharma1706@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex items-center gap-4 backdrop-blur-xl rounded-2xl px-6 py-5 transition-all duration-300 hover:scale-105" style={{ color: 'var(--color-text)', backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 24px 0 var(--color-secondary), 0 1.5px 8px 0 var(--color-accent)' }}>
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, var(--color-secondary), var(--color-accent))' }}>
                <FaPhone
                  className="text-white text-xl animate-float"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold">+91 6396168485</span>
              </div>
            </div>

            <div className="group flex items-center gap-4 backdrop-blur-xl rounded-2xl px-6 py-5 transition-all duration-300 hover:scale-105" style={{ color: 'var(--color-text)', backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 24px 0 var(--color-accent), 0 1.5px 8px 0 var(--color-primary)' }}>
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, var(--color-accent), var(--color-primary))' }}>
                <FaMapMarkerAlt
                  className="text-white text-xl animate-float"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold">India</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', color: 'var(--color-text)' }}
            >
              Get In Touch
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <a
              href="/AyushSharma_BtechCSE_GLAU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', boxShadow: '0 4px 20px 0 var(--color-primary)' }}
            >
              <FaDownload className="group-hover:animate-bounce" />
              Download CV
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/AyuSharma176"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl text-2xl hover:scale-110 hover:rotate-12 transition-all duration-300"
                style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', boxShadow: '0 4px 16px 0 var(--color-primary)' }}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ayusharma17/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl text-2xl hover:scale-110 hover:rotate-12 transition-all duration-300"
                style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', boxShadow: '0 4px 16px 0 var(--color-secondary)' }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/AyuSharma176"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl text-2xl hover:scale-110 hover:rotate-12 transition-all duration-300"
                style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', boxShadow: '0 4px 16px 0 var(--color-accent)' }}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6"
          style={{ color: 'var(--color-textSecondary)', opacity: 0.6 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
