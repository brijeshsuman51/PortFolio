import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-darker min-h-screen text-slate-100 selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        {/* Contact section is integrated into Footer or can be separate */}
        <section id="contact" className="py-20 bg-dark">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:brijeshsuman461@gmail.com" className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
                    Say Hello
                </a>
            </div>
        </section>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;