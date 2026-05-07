import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        <h1 className="text-[26px] lg:text-[30px] font-display text-[#7a2234] tracking-wide hover:scale-105 transition-transform cursor-pointer">
          WWT
        </h1>

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
          <div className="lg:hidden flex flex-col gap-[5px] cursor-pointer group p-2">
            <span className="w-6 h-[2px] bg-[#7a2234] group-hover:bg-[#4a1320] transition-colors duration-300"></span>
            <span className="w-4 h-[2px] bg-[#7a2234] group-hover:bg-[#4a1320] transition-colors duration-300 ml-auto"></span>
            <span className="w-6 h-[2px] bg-[#7a2234] group-hover:bg-[#4a1320] transition-colors duration-300"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}