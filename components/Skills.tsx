import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Transform skills for the chart
  const chartData = SKILLS.map(skill => ({
    subject: skill.name,
    A: skill.proficiency,
    fullMark: 100,
  }));

  // Group skills by category for the list view
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-primary pb-2">Technical Proficiency</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Chart Section */}
          <div className="w-full lg:w-1/2 h-[400px] bg-surface/30 rounded-2xl p-4 border border-gray-800">
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="#0ea5e9"
                    strokeWidth={2}
                    fill="#0ea5e9"
                    fillOpacity={0.3}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#38bdf8' }}
                  />
                </RadarChart>
             </ResponsiveContainer>
          </div>

          {/* List Section */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(category => (
              <div key={category} className="bg-surface p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-primary mb-4">{category}</h3>
                <ul className="space-y-3">
                  {SKILLS.filter(s => s.category === category).map(skill => (
                    <li key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-secondary h-2 rounded-full transition-all duration-1000" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        
        {/* DSA Badge / Stat Highlight */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-surface p-6 rounded-xl border border-gray-800 text-center">
             <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
             <div className="text-gray-400 text-sm">LeetCode Problems Solved</div>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-gray-800 text-center">
             <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
             <div className="text-gray-400 text-sm">Geeks for Geeks</div>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-gray-800 text-center">
             <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
             <div className="text-gray-400 text-sm">GitHub Repositories</div>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-gray-800 text-center">
             <div className="text-4xl font-bold text-purple-400 mb-2">1</div>
             <div className="text-gray-400 text-sm">Open Source Contribs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;