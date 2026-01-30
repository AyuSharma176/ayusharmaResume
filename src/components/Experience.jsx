import React from 'react'
import { FaBriefcase, FaCalendar,FaCode} from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'JOB Oriented Value Added Course',
      company: 'W3Grads',
      location: 'Online',
      period: 'June 2025 - July 2025',
      description: [
        'Developed and maintained Android applications using Flutter and Firebase',
        'Collaborated with cross-functional teams to deliver high-quality features',
        'Participated in code reviews and contributed to technical documentation',
        'Improved application performance by 30% through optimization techniques'
      ],
      technologies: ['Flutter', 'Firebase', 'Android']
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 relative inline-block">
          Experience
          <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group flex gap-6 bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl border-l-4 border-cyan-500 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:translate-x-2">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaBriefcase />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">{exp.company}</h4>
                <p className="text-slate-400 mb-3">{exp.location}</p>
                <div className="flex items-center gap-2 text-slate-400 mb-4">
                  <FaCode className="text-sm" />
                  <span>{exp.technologies.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 mb-4">
                  <FaCalendar className="text-sm" />
                  <span>{exp.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <span className="text-indigo-600 text-xl font-bold mt-0.5">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
