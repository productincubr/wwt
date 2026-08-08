import sideWomen from "../assets/images/two-girls-image.png";
import wave  from "../assets/images/hero-layer-image.png";
import { FiFeather, FiUsers, FiHeart, FiMaximize, FiCheckSquare } from "react-icons/fi";
import { FaRegComments } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";

const statItems = [
  { icon: <FiUsers size={26} />, title: "12", lines: ["Women", "Per Circle"] },
  { icon: <FaRegComments size={24} />, title: "Deep", lines: ["Conversations", "That Stay"] },
  { icon: <FiHeart size={24} />, title: "Trusted", lines: ["Close, Safe &", "Respectful Space"] },
  { icon: <GiLotus size={26} />, title: "Meaningful", lines: ["Connections That", "Last Beyond the Table"] },
];

const pillars = [
  {
    icon: <FiFeather size={15} />,
    title: "For women who think deeply",
    body: "For women who think deeply, read widely, and are unafraid to question the world around them. For women who observe, reflect, and form their own opinions—and are ready to express them. Here, your voice isn’t an interruption. It’s the whole point.",
  },
  {
    icon: <FiUsers size={15} />,
    title: "Women of substance",
    body: "WWT brings together women of substance—the bold, the curious, the self-aware—women who are not silent spectators of life, but active participants in it.",
  },
  {
    icon: <FiHeart size={15} />,
    title: "Intentional gathering",
    body: "Every gathering is intentional. From gourmet experiences to thoughtfully curated themes, everything is designed to spark conversations that matter—the kind that stay with you long after the evening ends. And to preserve that depth, every detail is designed with purpose.",
  },
  {
    icon: <FiMaximize size={15} />,
    title: "Only 12 Seats",
    body: "Each circle is intimate—only 12 seats. Because real conversations don’t happen in crowds—they happen in close, trusted spaces. If there is more interest, additional circles are thoughtfully scheduled on the same theme—ensuring every gathering remains focused, centred, and meaningful.",
  },
  {
    icon: <FiCheckSquare size={15} />,

    title: "Curated Participation",
    body: "Participation is curated. Entry into WWT is not random—it is intentional. A short profile form helps us understand who you are. And more importantly, each form includes a reflection on the upcoming topic—because what you think, how you see the world, and what you bring to the table… truly matters.",
  },
];

export default function Intro() {
  return (
    <section className="bg-[#f7f2ed] py-14 md:py-16  overflow-hidden relative scroll-mt-24 lg:scroll-mt-28" id="about">
      <div className="max-w-[1250px] mx-auto px-5 md:px-9 grid lg:grid-cols-[57%_43%] gap-12 md:gap-6 items-start">

        {/* LEFT CONTENT */}
        <div className="relative">

          <h2 className="font-playfair text-[42px] md:text-[58px] leading-[1.1] md:leading-[1.08] text-[#6f1d30]  max-w-[680px]">
            In a world full of conversations,{" "}
            <span className="italic text-[#b25b67]">very</span>
            <br />
            <span className="italic text-[#b25b67]">few are real.</span>
          </h2>

          <p className="mt-5 md:mt-7 text-[14px] md:text-[18px] font-inter regular text-[#6d6662] leading-[1.8] md:leading-[1.9] max-w-[520px]">
            We've mastered the art of gathering—but somewhere along the way we stopped truly connecting.
            We smile, we nod, we pose... and we leave without ever being seen.
            Women Who Talk was created to change that. This is not another table of polite chatter and predictable conversations.
            WWT is a space for women who refuse to stay on the surface.
          </p>

          {/* Timeline */}
          <div className="mt-10 relative pl-10 before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-px before:bg-[#d8c7bf]">
            {pillars.map((item, i) => (
              <div key={i} className="relative mb-10 group">
                <div className="absolute -left-11 top-1 w-8 h-8 rounded-full border border-[#c7aaaa] bg-[#f7f2ed] flex items-center justify-center text-[#8a3245] text-[11px] group-hover:bg-[#8a3245] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="font-inter medium text-[23px] md:text-[25px] text-[#5f2b38] mb-2 group-hover:text-[#8a3245] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-[14px] font-inter regular md:text-[17px] leading-[1.8] text-[#6f6965] max-w-[510px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom wave */}
          <img
            src={wave}
            alt=""
            className="hidden md:block absolute left-[-90px] bottom-[-55px] w-[280px] opacity-25"
          />
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative w-full flex flex-col items-center mt-10 lg:mt-0">

          {/* Main girls image */}
          <div className="w-full lg:w-[82%] h-[550px] lg:h-[900px] rounded-[28px] overflow-hidden group">
            <img
              src={sideWomen}
              alt="Women Talking"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Stats card */}
          <div className="relative mt-40 w-[260px] md:w-[220px] lg:w-[320px] bg-[#5c1f30] rounded-3xl shadow-xl p-6 md:p-5 lg:p-7 grid grid-cols-2 gap-x-4 gap-y-6 z-20 hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute left-1/2 top-6 bottom-6 w-px bg-white/20" />
            <div className="absolute top-1/2 left-6 right-6 h-px bg-white/20" />

            {statItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center text-white">
                <div className="mb-2">{item.icon}</div>
                <div className="font-inter font-semibold text-base md:text-[15px] lg:text-lg">{item.title}</div>
                <div className="text-[11px] md:text-[10px] lg:text-xs font-inter text-white/80 leading-snug mt-1">
                  {item.lines.map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}