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
    <section id="experience" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 relative inline-block" style={{ color: 'var(--color-text)' }}>
          Experience
          <span className="absolute bottom-0 left-0 w-20 h-1.5 rounded-full" style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }}></span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group flex gap-6 backdrop-blur-xl p-8 rounded-2xl border-l-4 transition-all duration-500 hover:translate-x-2" style={{ backgroundColor: 'var(--color-surface)', borderLeftColor: 'var(--color-primary)', boxShadow: '0 4px 28px 0 var(--color-primary)' }}>
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))', color: 'var(--color-text)' }}>
                <FaBriefcase />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{exp.title}</h3>
                <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{exp.company}</h4>
                <p className="mb-3" style={{ color: 'var(--color-textSecondary)', opacity: 0.8 }}>{exp.location}</p>
                <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--color-textSecondary)', opacity: 0.8 }}>
                  <FaCode className="text-sm" />
                  <span>{exp.technologies.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--color-textSecondary)', opacity: 0.8 }}>
                  <FaCalendar className="text-sm" />
                  <span>{exp.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: 'var(--color-textSecondary)' }}>
                      <span className="text-xl font-bold mt-0.5" style={{ color: 'var(--color-accent)' }}>▹</span>
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
