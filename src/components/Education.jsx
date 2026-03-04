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
      period: '2021 - 2022',
      grade: 'Percentage: 80%',
      description: 'Completed with focus on Mathematics, Physics, and Chemistry.'
    }
  ]

  return (
    <section id="education" className="py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 relative inline-block" style={{ color: 'var(--color-text)' }}>
          Education
          <span className="absolute bottom-0 left-0 w-20 h-1.5 rounded-full" style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }}></span>
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="group flex gap-6 backdrop-blur-xl p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2" style={{ backgroundColor: 'var(--color-background)', boxShadow: '0 4px 28px 0 var(--color-primary)' }}>
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))', color: 'var(--color-text)' }}>
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{edu.degree}</h3>
                <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>{edu.major}</h4>
                <p className="text-lg font-semibold mb-1" style={{ color: 'var(--color-textSecondary)' }}>{edu.institution}</p>
                <p className="mb-3" style={{ color: 'var(--color-textSecondary)', opacity: 0.8 }}>{edu.location}</p>
                <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--color-textSecondary)', opacity: 0.8 }}>
                  <FaCalendar className="text-sm" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>{edu.grade}</p>
                <p className="leading-relaxed" style={{ color: 'var(--color-textSecondary)', opacity: 0.8 }}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
