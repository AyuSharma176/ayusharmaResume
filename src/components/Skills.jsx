import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiC, SiDart, SiFlutter, SiTailwindcss, SiStreamlit, SiFirebase, SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiPlotly, SiJira, SiTrello, SiFigma } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'Java', icon: <FaJava />, level: 85 },
        { name: 'C', icon: <SiC />, level: 80 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'Dart', icon: <SiDart />, level: 80 },
        { name: 'SQL', icon: <FaDatabase />, level: 85 }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Express.js', icon: <SiExpress />, level: 85 },
        { name: 'Flutter', icon: <SiFlutter />, level: 80 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
        { name: 'Streamlit', icon: <SiStreamlit />, level: 75 }
      ]
    },
    {
      category: 'Databases & Cloud',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'Firebase', icon: <SiFirebase />, level: 80 },
        { name: 'MySQL', icon: <SiMysql />, level: 85 },
        { name: 'MongoDB Atlas', icon: <SiMongodb />, level: 80 }
      ]
    },
    {
      category: 'Machine Learning',
      skills: [
        { name: 'Pandas', icon: <SiPandas />, level: 85 },
        { name: 'NumPy', icon: <SiNumpy />, level: 85 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 80 },
        { name: 'XGBoost', icon: <FaPython />, level: 75 },
        { name: 'Plotly', icon: <SiPlotly />, level: 80 }
      ]
    },
    {
      category: 'Product & Collaboration',
      skills: [
        { name: 'Jira', icon: <SiJira />, level: 80 },
        { name: 'Trello', icon: <SiTrello />, level: 85 },
        { name: 'Figma', icon: <SiFigma />, level: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 relative inline-block">
          Skills
          <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
        </h2>
        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-slate-700/50 hover:border-cyan-500/50">
              <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b-2 border-cyan-500">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group space-y-3 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl text-xl shadow-md group-hover:shadow-xl group-hover:rotate-12 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                    </div>
                    <div className="h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
