import React from 'react'
import { FaGraduationCap, FaCalendar } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      major: 'Computer Science Engineering',
      institution: 'GLA University',
      location: 'Mathura, Uttar Pradesh',
      period: '2023 - 2027',
      grade: 'CGPA: 8/10',
      description: 'Focused on software development, data structures, algorithms, and modern web technologies.'
    },
    {
      degree: 'Higher Secondary Education',
      major: 'Science (PCM)',
      institution: 'Senior Secondary School',
      location: 'India',
      period: '2020 - 2022',
      grade: 'Percentage: 80%',
      description: 'Completed with focus on Mathematics, Physics, and Chemistry.'
    }
  ]

  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 relative inline-block">
          Education
          <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="group flex gap-6 bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 border border-slate-700/50 hover:border-cyan-500/50">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">{edu.major}</h4>
                <p className="text-lg font-semibold text-slate-300 mb-1">{edu.institution}</p>
                <p className="text-slate-400 mb-3">{edu.location}</p>
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <FaCalendar className="text-sm" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-lg font-semibold text-cyan-400 mb-3">{edu.grade}</p>
                <p className="text-slate-400 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
