import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-darker">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-primary pb-2">Work Experience</span>
        </h2>

        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-surface border-2 border-gray-600 group-hover:border-primary group-hover:bg-primary transition-all duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20">{exp.period}</span>
              </div>
              
              <h4 className="text-xl text-gray-400 mb-4 font-medium">{exp.company}</h4>
              
              <ul className="list-disc list-outside text-gray-400 ml-4 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;