import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#f7f2ed]/95 backdrop-blur-md shadow-sm py-3 lg:py-5" : "bg-transparent py-4 lg:py-5"
      }`}
    >
      <div className="max-w-[1250px] mx-auto px-5 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-[26px] lg:text-[30px] font-display text-[#7a2234] tracking-wide hover:scale-105 transition-transform cursor-pointer">
          WWT
        </a>

        {/* Center Links */}
        <ul className="hidden lg:flex items-center gap-12 text-[15px] lg:text-[16px] text-[#7a2234] font-semibold tracking-wide">
          <li className="relative group cursor-pointer pb-1">
            <a href="#experience">The Experience</a>
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#7a2234] transform origin-left scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group cursor-pointer pb-1">
            <a href="#about">Philosophy</a>
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#7a2234] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group cursor-pointer pb-1">
            Curriculum
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#7a2234] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a href="#reserve" className="hidden sm:block bg-[#7a2234] hover:bg-[#5f1524] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-white px-7 py-3 rounded-full text-xs lg:text-sm tracking-wide uppercase font-medium">
            Join the Circle
          </a>

          {/* Mobile menu icon */}
          <div 
            className="lg:hidden flex items-center justify-center cursor-pointer p-2 w-10 h-10 shrink-0 relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#7a2234" className="w-7 h-7 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex flex-col gap-[5px] justify-center w-full h-full items-end">
                <span className="w-6 h-[2.5px] bg-[#7a2234] rounded-full shrink-0"></span>
                <span className="w-4 h-[2.5px] bg-[#7a2234] rounded-full shrink-0"></span>
                <span className="w-6 h-[2.5px] bg-[#7a2234] rounded-full shrink-0"></span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#f7f2ed] border-t border-[#e8dcd0] shadow-xl overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center gap-6 z-40 ${
          mobileMenuOpen ? "max-h-[400px] py-8 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"
        }`}
      >
        <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-[17px] text-[#7a2234] font-semibold tracking-wide">The Experience</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[17px] text-[#7a2234] font-semibold tracking-wide">Philosophy</a>
        <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="text-[17px] text-[#7a2234] font-semibold tracking-wide">Curriculum</a>
        <a href="#reserve" onClick={() => setMobileMenuOpen(false)} className="bg-[#7a2234] text-white px-8 py-3.5 rounded-full text-sm tracking-wide uppercase font-medium mt-2 shadow-lg">
          Join the Circle
        </a>
      </div>
    </nav>
  );
}