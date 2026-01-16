import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaCalendar } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'MediConnect – Secure Digital Platform',
      period: 'Oct 2025',
      description: 'Built a full-stack digital healthcare solution within 48 hours; shortlisted as finalist among 160+ teams. Developed user-friendly interfaces using React.js and Flutter, focusing on usability and accessibility. Designed secure REST API flows using Node.js/Express with JWT auth to support role-based user journeys. Integrated ML prediction workflows to automate early insights and enhance user decision-making.',
      technologies: ['React', 'Flutter', 'Node.js', 'Express', 'MongoDB Atlas', 'Python', 'JWT', 'REST APIs'],
      github: 'https://github.com/DJXROSSS/Smart-Electronic-Health-Records-for-predictive-analytics-and-personalized-medicines-',
      demo: '#'
    },
    {
      title: 'GCG – Developer Resources Platform',
      period: 'Aug 2025 - Sep 2025',
      description: 'Designed and developed a high-performance web platform with emphasis on UX clarity and fast page loads. Optimized rendering with React + Tailwind, improving Time-to-Interactive and responsiveness. Implemented CI/CD pipelines for frictionless deployments and iterative feature delivery.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Git', 'GitHub', 'Vercel'],
      github: 'https://github.com/AyuSharma176/GCG',
      demo: 'https://gla-coding-group.vercel.app/'
    },
    {
      title: 'Electricity Demand Forecasting Dashboard',
      period: 'Jul 2025 - Aug 2025',
      description: 'Designed a real-time analytics dashboard supporting data-driven planning and insights. Used ARIMA and XGBoost forecasting models to provide accurate demand predictions. Delivered interactive visualizations improving usability and interpretability for non-technical users.',
      technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'XGBoost', 'Scikit-learn'],
      github: 'https://github.com/AyuSharma176/Electricity-Demand-Forecasting-Dashboard',
      demo: '#'
    },
    {
      title: 'BeFit – Cross-Platform Fitness Application',
      period: 'Jun 2025 - Jul 2025',
      description: 'Developed a fitness app with secure authentication and personalized user dashboards. Integrated Firebase Authentication and Firestore to maintain data reliability and sync. Collaborated in an agile environment, delivering features through iterative sprints and user feedback loops.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Cloud'],
      github: 'https://github.com/AyuSharma176/BeFIT-A_Fitness_Application',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 relative inline-block">
          Projects
          <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between border border-slate-700/50 hover:border-cyan-500/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-3">
                  <FaCalendar />
                  <span>{project.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-700/50 text-cyan-400 rounded-full text-xs font-bold border border-slate-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-5 border-t border-slate-700/50">
                <a href={project.github} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
