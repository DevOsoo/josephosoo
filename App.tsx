import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import FadeIn from './components/FadeIn';
import ProjectCard from './components/ProjectCard';
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE, EDUCATION } from './constants';
import { Briefcase, BookOpen, Code2, Terminal, PenTool } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on preference or default to light
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Simple Scroll Spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-charcoal text-gray-700 dark:text-gray-300 font-sans selection:bg-accent/30 selection:text-accent-hover transition-colors duration-500">
      
      {/* Background Gradient Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-gray-100 to-gray-200 dark:from-[#111827] dark:via-[#0d0d0d] dark:to-[#000000] opacity-100 transition-all duration-700"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-300/20 dark:bg-gray-700/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 flex w-full">
        <Sidebar activeSection={activeSection} onNavigate={handleScrollTo} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* Main Content */}
        <main className="flex-1 lg:ml-72 min-h-screen">
          <div className="max-w-5xl mx-auto px-6 py-24 lg:py-24 space-y-32">
            
            {/* About Section (Hero) */}
            <section id="about" className="scroll-mt-24 min-h-[60vh] flex flex-col justify-center">
              <FadeIn>
                  <div className="mb-12 space-y-2 relative z-20">
                      {/* Line 1 */}
                      <div className="w-fit">
                        <h1 className="text-lg md:text-2xl font-medium text-gray-500 dark:text-gray-400 overflow-hidden whitespace-nowrap border-r-4 border-accent w-0 animate-type-1">
                          Hey you, thanks for dropping by...
                        </h1>
                      </div>
                      
                      {/* Line 2 */}
                      <div className="w-fit">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-normal tracking-tight overflow-hidden whitespace-nowrap border-r-4 border-accent w-0 animate-type-2">
                          I am <span className="text-accent">Joseph Osoo</span>
                        </h2>
                      </div>
                      
                      {/* Line 3 */}
                      <div className="w-fit">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-normal tracking-tight overflow-hidden whitespace-nowrap border-r-4 border-accent w-0 animate-type-3">
                          and this is my portfolio.
                        </h2>
                      </div>
                  </div>
                  
                  {/* Glassy About Card */}
                  <div className="p-8 rounded-2xl bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-lg shadow-xl transition-all duration-500 hover:border-accent/20">
                      <p className="text-lg leading-loose text-justify tracking-wide text-gray-700 dark:text-gray-300 font-normal">
                          {PROFILE.about}
                      </p>
                  </div>
              </FadeIn>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-24">
              <FadeIn>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
                      <Code2 className="mr-3 text-accent" /> Technical Proficiency
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {SKILLS.map((category, idx) => (
                          <div key={idx} className="bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-white/40 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-accent/20">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-black/5 dark:border-white/10">{category.category}</h3>
                              <div className="flex flex-wrap gap-2">
                                  {category.skills.map((skill, sIdx) => (
                                      <span 
                                          key={sIdx} 
                                          className="px-3 py-1.5 bg-gray-100/50 dark:bg-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5 hover:border-accent/30 hover:text-accent transition-colors cursor-default font-medium backdrop-blur-sm"
                                      >
                                          {skill}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
              </FadeIn>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
              <FadeIn>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
                      <Terminal className="mr-3 text-accent" /> Sample Projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {PROJECTS.map((project) => (
                          <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
              </FadeIn>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <FadeIn>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
                      <Briefcase className="mr-3 text-accent" /> Professional Journey
                  </h2>
                  <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-4 md:ml-6 space-y-16">
                      {EXPERIENCE.map((exp, idx) => (
                          <div key={idx} className="relative pl-8 md:pl-12">
                              {/* Timeline Dot */}
                              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-charcoal border-2 border-accent shadow-[0_0_10px_rgba(77,166,255,0.4)]"></div>
                              
                              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                  <span className="text-sm font-mono font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit backdrop-blur-sm">
                                      {exp.period}
                                  </span>
                              </div>
                              <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-4">{exp.company}</h4>
                              
                              <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-400 bg-white/40 dark:bg-white/5 p-6 rounded-xl border border-white/40 dark:border-white/5 backdrop-blur-md">
                                  <p className="text-justify leading-loose tracking-wide">{exp.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </FadeIn>
            </section>

            {/* Education Section */}
            <section id="education" className="scroll-mt-24 pb-24">
              <FadeIn>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
                      <BookOpen className="mr-3 text-accent" /> Education
                  </h2>
                  <div className="bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-white/40 dark:border-white/10 p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:border-accent/20 transition-all shadow-sm hover:shadow-lg">
                      <div className="mb-4 md:mb-0">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{EDUCATION.degree}</h3>
                          <p className="text-lg text-gray-600 dark:text-gray-400">{EDUCATION.university}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 flex items-center font-medium">
                              <PenTool size={14} className="mr-2" />
                              {EDUCATION.honors}
                          </p>
                      </div>
                      <div className="text-accent font-mono font-bold bg-accent/5 dark:bg-accent/10 px-4 py-2 rounded-lg border border-accent/10 backdrop-blur-sm">
                          {EDUCATION.years}
                      </div>
                  </div>
              </FadeIn>
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-500 dark:text-gray-500 text-sm pb-8">
              <p>&copy; {new Date().getFullYear()} Joseph Osoo. All rights reserved.</p>
            </footer>

          </div>
        </main>
      </div>
    </div>
  );
};

export default App;