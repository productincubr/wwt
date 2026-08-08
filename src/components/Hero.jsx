import heroImg from "../assets/images/Vector-wwt-hero.png";
import memberBadge from "../assets/images/group-hero-image.png";
import flower from "../assets/images/flower.png";
import wave from "../assets/images/hero-layer-image.png";
import textBoxBg from "../assets/images/two-girls-image.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#f7f2ed] pt-28 lg:pt-32 pb-20 overflow-visible relative">
      <div className="max-w-[1250px] mx-auto px-5 md:px-8 grid lg:grid-cols-[46%_54%] gap-10 items-center relative z-10">

        {/* LEFT PANEL */}
        <div className="bg-[#ece6e6] rounded-[30px] px-8 py-12 md:px-12 md:py-16 min-h-[500px] md:h-[600px] flex flex-col justify-center relative shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden">
          <img
            src={textBoxBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
          />

          <div className="relative z-10 flex flex-col">
            <p className="text-[16px] italic font-inter  text-[#910000] mb-6">
              Limited to 12 seats per circle
            </p>

            <h1 className="regular font-playfair  text-[44px] md:text-[50px] leading-[1.1] text-[#6B2D35]">
              Where Women Connect
              <br />
              Beyond <span className="text-[#C93155]">Small Talk</span>
            </h1>

            <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] text-[#635E55] font-inter italic leading-relaxed max-w-[430px]">
              Join intimate circles designed for meaningful conversations, personal growth, and genuine friendships.
            </p>

            <a href="#reserve" className="mt-8 md:mt-10 bg-[#6B2D35] text-white px-8 py-3.5 rounded-[24px] w-fit uppercase tracking-widest text-[12px] font-medium hover:bg-[#522127] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              RESERVE YOUR SEAT
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[400px] md:h-[560px] flex items-center justify-center lg:translate-x-4 mt-8 lg:mt-0">
          
          {/* Main hero image */}
          <img
            src={heroImg}
            alt="Hero Visual"
            className="w-[95%] lg:w-[100%] md:-left-7 max-w-[95%] object-contain relative z-30 hover:scale-[1.02] transition-transform duration-700"
          />

          {/* New Member Badge HTML */}
          <div className="absolute left-[-20px] md:left-[-40px] bottom-[30px] md:bottom-[70px] bg-[#Fdf8f6] rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-40 flex flex-col gap-3 min-w-[220px]">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=5" className="w-10 h-10 rounded-full border-[3px] border-[#Fdf8f6] object-cover" alt="avatar" />
              <img src="https://i.pravatar.cc/100?img=9" className="w-10 h-10 rounded-full border-[3px] border-[#Fdf8f6] object-cover" alt="avatar" />
              <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-[3px] border-[#Fdf8f6] object-cover" alt="avatar" />
              <div className="w-10 h-10 rounded-full border-[3px] border-[#Fdf8f6] bg-[#6B2D35] text-white text-[11px] font-bold flex items-center justify-center">+7</div>
            </div>
            <div>
              <p className="text-[#817874] text-[12px] font-medium">Curated. Intentional. Impactful.</p>
              <p className="text-[#817874] text-[12px]">For women, by women.</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom wave - positioned at bottom of section */}
      <img
        src={wave}
        alt=""
        className="hidden md:block absolute top-16 right-1 transform translate-x-1/2 w-[750px] opacity-40 pointer-events-none"
      />
    </section>
  );
}