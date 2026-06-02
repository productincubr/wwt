import { FiStar, FiCircle } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

export default function PartnersSponsorsSection() {
  return (
    <section className="bg-[#FDF8F6] py-20 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Headers */}
        <span className="uppercase tracking-[4px] text-[#A87676] text-xs font-semibold block mb-4">
          Trusted By
        </span>
        <h2 className="text-[48px] md:text-[56px] leading-tight regular font-playfair text-[#6B2D35] mb-6">
          Amazing Partners & Sponsors
        </h2>
        <p className="max-w-[600px] mx-auto text-[#817874] text-[16px] mb-12">
          We are grateful to the brands and organizations that believe in meaningful
          conversations and community impact.
        </p>

        {/* White Container */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-[#F1E8E6]">
          {/* Logos Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-10">
            {/* Logo 1 */}
            <div className="text-[#6B2D35] flex flex-col items-center">
              <FiStar className="text-2xl mb-2" fill="currentColor" />
              <span className="uppercase tracking-widest text-[10px] font-semibold">Wellness</span>
              <span className="uppercase tracking-[0.2em] text-[8px] text-[#A87676]">Collective</span>
            </div>
            
            {/* Logo 2 */}
            <div className="text-[#A87676] flex flex-col items-center">
              <span className="font-serif text-[22px] leading-none mb-1">the</span>
              <span className="font-serif text-[22px] leading-none mb-1">kind</span>
              <span className="font-serif text-[22px] leading-none">company</span>
            </div>
            
            {/* Logo 3 */}
            <div className="text-[#8B736E] flex flex-col items-center">
              <FiCircle className="text-[28px] mb-3 font-light" />
              <span className="uppercase tracking-[0.2em] text-[11px] mb-1">Soulful</span>
              <span className="uppercase tracking-[0.2em] text-[11px]">Sips</span>
            </div>
            
            {/* Logo 4 */}
            <div className="text-[#6B2D35] flex flex-col items-center">
              <span className="text-[36px] font-serif mb-1 leading-none">N</span>
              <div className="w-full h-[1px] bg-[#6B2D35] mb-2"></div>
              <span className="uppercase tracking-[0.15em] text-[8px] font-semibold">Noteworthy</span>
              <span className="uppercase text-[6px] tracking-widest text-[#A87676]">Web Journal</span>
            </div>
            
            {/* Logo 5 */}
            <div className="text-[#8B736E] flex flex-col items-center">
              <div className="flex gap-1 mb-2">
                 <FaLeaf className="text-sm opacity-80" />
                 <FaLeaf className="text-xs opacity-60 mt-1" />
              </div>
              <span className="font-serif text-[18px] leading-tight text-[#6B2D35]">Bloom &</span>
              <span className="font-serif text-[18px] leading-tight text-[#6B2D35]">Thrive</span>
            </div>
          </div>

          {/* Footer Line & Text */}
          <div className="h-[1px] bg-[#F4EBE9] w-full mb-6"></div>
          <p className="text-left text-[#C78382] italic text-sm">
            And many more wonderful partners...
          </p>
        </div>
      </div>
    </section>
  );
}