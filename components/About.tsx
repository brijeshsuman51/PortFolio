import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {ABOUT_TEXT}
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            My journey involves a deep dive into computer science fundamentals. 
            I actively practice DSA on platforms like LeetCode and GFG to sharpen my problem-solving skills, 
            ensuring that the code I write is not just functional, but optimal.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-surface rounded-lg border border-gray-800">
              <span className="block text-2xl font-bold text-white mb-1">01+</span>
              <span className="text-sm text-gray-500">Years Experience</span>
            </div>
            <div className="p-4 bg-surface rounded-lg border border-gray-800">
              <span className="block text-2xl font-bold text-white mb-1">5+</span>
              <span className="text-sm text-gray-500">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;