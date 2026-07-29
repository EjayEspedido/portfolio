import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Hard Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Hardware Demo', href: '#demo' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full bg-white pt-8 pb-6 px-6 sm:px-12 max-w-6xl mx-auto flex items-center justify-between">
      {/* Name Logo */}
      <a href="#home" className="text-sm font-bold text-zinc-900 tracking-tight hover:opacity-75 transition-opacity">
        Alex Chen
      </a>

      {/* Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-1.5 text-zinc-800 hover:text-black focus:outline-none"
        aria-label="Main Navigation Menu"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Modal Navigation Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 p-8 sm:p-12 flex flex-col justify-between">
          <div className="flex justify-between items-center max-w-5xl mx-auto w-full">
            <span className="text-sm font-bold text-zinc-900">Alex Chen</span>
            <button onClick={() => setMenuOpen(false)} className="p-2 text-zinc-900">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="max-w-5xl mx-auto w-full py-12">
            <ul className="space-y-6 text-2xl sm:text-4xl font-light text-zinc-900">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMenuOpen(false)}
                    className="hover:font-semibold transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-5xl mx-auto w-full text-xs text-zinc-500 font-mono-code pt-4 border-t border-zinc-200">
            San Jose, CA • Computer Engineer
          </div>
        </div>
      )}
    </header>
  );
}
