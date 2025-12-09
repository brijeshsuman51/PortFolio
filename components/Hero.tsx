import React from 'react';
import { PROFILE } from '../constants';

// 1. IMPORT YOUR IMAGE
// We go up one folder (../) then into Images to find profile.jpg
import profileImg from '../Images/profile.jpg'; 

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-16 md:pt-24 flex items-center bg-darker overflow-hidden">
      {/* Background Split for Desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-[38%] h-full bg-surface/30 border-r border-gray-800"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Profile Card */}
          <div className="w-full md:w-[380px] lg:w-[420px] flex-shrink-0 animate-fade-in">
            <div className="bg-surface rounded-3xl shadow-2xl border border-gray-700 overflow-hidden text-center group hover:-translate-y-2 transition-transform duration-300 relative">
              
              {/* Card Header/Background */}
              <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              
              <div className="px-8 pb-8 -mt-16">
                
                {/* --- AVATAR SECTION --- */}
                <div className="w-40 h-40 mx-auto rounded-full p-1.5 bg-surface border border-gray-700 group-hover:border-primary transition-colors relative z-10">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    {/* 2. USE THE IMPORTED IMAGE HERE */}
                    <img
                      src={profileImg}
                      alt={PROFILE.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* ---------------------- */}
                
                <h2 className="text-3xl font-bold text-white mt-6 mb-2">{PROFILE.name}</h2>
                <div className="w-12 h-1.5 bg-primary mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-300 font-semibold tracking-wider uppercase text-sm mb-8">{PROFILE.role}</p>
                
                {/* Social Icons */}
                <div className="bg-darker/50 py-4 px-6 -mx-8 -mb-8 border-t border-gray-700 flex justify-center gap-6">

                {/* Telephone */}
                  <a href={`tel:${PROFILE.phone}`} className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                </a>
                  {/* Gmail */}
                  
                  <a href={`mailto:${PROFILE.email}`} className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href={PROFILE?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                  
                  {/* GitHub */}
                  <a href={PROFILE?.github || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intro Text */}
          <div className="flex-1 text-center md:text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tighter leading-none">
              {PROFILE.title}
            </h1>
            <h3 className="text-xl md:text-3xl font-semibold text-gray-200 mb-8">
              {PROFILE.subtitle}
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a 
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-primary hover:bg-sky-600 text-white font-bold rounded-full transition-all shadow-lg shadow-primary/25 transform hover:-translate-y-0.5"
              >
                {PROFILE.buttons.primary}
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-transparent hover:bg-surface text-white border-2 border-gray-600 hover:border-white font-bold rounded-full transition-all transform hover:-translate-y-0.5"
              >
                {PROFILE.buttons.secondary}
              </a>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              {PROFILE.shortBio}
            </p>

             <div className="mt-10 pt-8 mb-10 pb-8 border-t border-gray-800/50 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="font-mono text-sm text-gray-300">MERN Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="font-mono text-sm text-gray-300">DSA Solver</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;