import heroImg from "../assets/images/Vector-wwt-hero.png";
import memberBadge from "../assets/images/group-hero-image.png";
import flower from "../assets/images/flower.png";
import wave from "../assets/images/hero-layer-image.png";

export default function Hero() {
  return (
    <section className="bg-[#f7f2ed] pt-32 pb-20 overflow-visible relative">
      <div className="max-w-[1250px] mx-auto px-5 md:px-8 grid lg:grid-cols-[46%_54%] gap-10 items-center relative z-10">

        {/* LEFT PANEL */}
        <div className="bg-[#f3ece7] rounded-[30px] px-8 py-12 md:px-12 md:py-16 min-h-[500px] md:h-[600px] flex flex-col justify-center relative">
          <p className="text-[13px] md:text-[15px] uppercase tracking-[3px] text-[#b25b67] mb-6 md:mb-8">
            Limited to 12 seats per circle
          </p>

          <h1 className="font-display text-[42px] md:text-[53px] leading-[1.1] md:leading-[1.08] text-[#6f1d30] font-light">
            Where Conversations
            <br />
            Have Depth And So
            <br />
            <span className="italic text-[#b25b67]">Do You</span>
          </h1>

          <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] text-[#746d69] leading-relaxed max-w-[430px]">
            A curated space for women who think deeply, speak freely,
            and seek conversations that truly matter.
          </p>

          <button className="mt-8 md:mt-10 bg-[#7a2234] text-white px-8 py-4 rounded-full w-fit tracking-wider text-sm hover:bg-[#631c2a] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(122,34,52,0.3)] transition-all duration-300">
            APPLY TO JOIN THE CIRCLE
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[400px] md:h-[560px] flex items-center justify-center lg:translate-x-4 mt-8 lg:mt-0">
          
          {/* center flower divider */}
          <img
            src={flower}
            alt=""
            className="absolute left-[-15px] md:left-[-55px] top-[150px] md:top-[210px] w-[60px] md:w-[90px] z-20 hover:rotate-12 hover:scale-110 transition-all duration-500"
          />

          {/* Main hero image */}
          <img
            src={heroImg}
            alt=""
            className="w-[95%] lg:w-[100%] -left-7 max-w-[95%] object-contain relative z-30 hover:scale-[1.02] transition-transform duration-700"
          />

          {/* floating member badge */}
          <img
            src={memberBadge}
            alt=""
            className="absolute left-0 md:left-[10px] bottom-[30px] md:bottom-[80px] w-[140px] md:w-[200px] z-30 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-3 hover:scale-105 transition-all duration-500"
          />
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