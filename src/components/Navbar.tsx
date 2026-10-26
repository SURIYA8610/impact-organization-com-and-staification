import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, GraduationCap, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenAcademicModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAcademicModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Topics', href: '#topics', id: 'topics' },
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: 'Channels', href: '#channels', id: 'channels' },
    { name: 'Factors', href: '#factors', id: 'factors' },
    { name: 'Impact', href: '#impact', id: 'impact' },
    { name: 'Survey', href: '#survey', id: 'survey' },
    { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { name: 'Recommendations', href: '#recommendations', id: 'recommendations' },
    { name: 'Conclusion', href: '#conclusion', id: 'conclusion' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 120;
        for (const link of navLinks) {
          const el = document.getElementById(link.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(link.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/${href}`);
      setTimeout(() => {
        const id = href.replace('#', '');
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#142B4A]/95 dark:bg-[#0A182C]/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-[#142B4A] dark:bg-[#0A182C] py-3.5'
      } text-white border-b border-blue-900/30`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo matching exact reference design */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white leading-tight">
                Comm<span className="text-sky-400">Sync</span>
              </span>
              <span className="text-[10px] text-teal-300 font-medium tracking-wide hidden sm:block">
                Research &amp; Workplace Analytics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === '/' && activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/30 text-sky-300 font-semibold border border-blue-500/30'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Tools: Academic Modal, Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Academic Guide Modal Trigger */}
            <button
              onClick={onOpenAcademicModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
              title="View Academic Research & Viva Guide"
            >
              <GraduationCap className="w-3.5 h-3.5 text-teal-300" />
              <span className="hidden sm:inline">B.Tech Project</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-sky-300" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-900/40 bg-[#142B4A]/98 px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                location.pathname === '/' && activeSection === link.id
                  ? 'bg-blue-600/40 text-sky-300 font-semibold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAcademicModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-white/10 text-white"
            >
              <GraduationCap className="w-4 h-4 text-teal-300" />
              <span>B.Tech Project Details &amp; Viva</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
