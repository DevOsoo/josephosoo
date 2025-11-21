import React, { useState } from 'react';
import { PROFILE, SOCIALS } from '../constants';
import pfp from '../images/pfp.jpg';
import { Github, Linkedin, NotebookText, Menu, X, Mail, Sun, Moon } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate, isDarkMode, toggleTheme }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Sample Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileOpen(false);
  };

  const NavLink: React.FC<{ id: string; label: string }> = ({ id, label }) => (
    <button
      onClick={() => handleNavClick(id)}
      className={`block w-full text-left py-2 px-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest font-bold ${
        activeSection === id
          ? 'bg-accent/10 text-accent border-l-4 border-accent'
          : 'text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );

  const SocialIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'medium': return <NotebookText size={20} />;
      default: return <NotebookText size={20} />;
    }
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 p-4 flex justify-between items-center transition-colors duration-500">
        <div className="font-bold text-xl tracking-tighter text-black dark:text-white">{PROFILE.shortName}</div>
        <div className="flex items-center gap-4">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300"
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-black dark:text-white">
            {isMobileOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 h-screen 
          bg-white/70 dark:bg-black/40 backdrop-blur-xl
          border-r border-white/20 dark:border-white/5 
          flex flex-col transition-all duration-500 z-40 w-72 lg:translate-x-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Scrollable Content within Sidebar */}
        <div className="flex-1 overflow-y-auto p-8 pt-24 lg:pt-12 scrollbar-hide flex flex-col">
            
            {/* Theme Toggle (Desktop) */}
            <div className="hidden lg:flex justify-end mb-4">
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors"
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            {/* Profile Section */}
            <div className="text-center mb-10">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-gray-200 to-white dark:from-gray-700 dark:to-gray-900 shadow-xl">
                    <img
                      src={pfp || PROFILE.image}
                      alt={PROFILE.name}
                      className="w-full h-full object-cover rounded-full bg-gray-100 dark:bg-gray-800"
                      onError={(e) => {
                        e.currentTarget.src = PROFILE.image || "https://picsum.photos/200";
                      }}
                    />
                </div>
                
                <a 
                    href="mailto:dev.osoo.tech@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full font-semibold text-sm shadow-lg shadow-accent/30 hover:bg-accent-hover transition-all hover:scale-105"
                >
                    <Mail size={16} /> Email Me
                </a>

                <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                    {PROFILE.titles.map((title, i) => (
                        <span key={i} className="bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm border border-black/5 dark:border-white/5">
                            {title}
                        </span>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2 mb-12">
                {navItems.map((item) => (
                    <NavLink key={item.id} id={item.id} label={item.label} />
                ))}
            </nav>

            {/* Socials */}
            <div className="flex justify-center gap-4 mt-auto">
                {SOCIALS.map((social, idx) => (
                    <a 
                        key={idx}
                        href={social.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300 relative group backdrop-blur-sm"
                        aria-label={social.name}
                    >
                        <SocialIcon icon={social.icon} />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {social.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;