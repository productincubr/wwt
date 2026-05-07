import {
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

import {
  PiEar,
  PiBrain,
  PiHandshake,
  PiChatsCircle,
} from "react-icons/pi";

import benefitsImage from "../assets/images/benefits-img.png";

const benefits = [
  {
    icon: <HiOutlineUserGroup />,
    title: "FIND YOUR TRIBE",
    body: "Connect with like-minded women who value depth, authenticity, and meaningful exchange.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "LEARN FROM REMARKABLE WOMEN",
    body: "Be part of a circle where every voice brings insight, perspective, and lived experience.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight />,
    title: "SPEAK FREELY",
    body: "Share your thoughts, ideas, and opinions without hesitation or judgment.",
  },
  {
    icon: <PiEar />,
    title: "BE TRULY HEARD",
    body: "Experience conversations where you are not just listened to—but understood.",
  },
  {
    icon: <PiBrain />,
    title: "CURATED FOR CURIOUS MINDS",
    body: "Engage in thoughtfully designed experiences and discussions that stimulate, inspire, and expand your thinking.",
  },
  {
    icon: <PiHandshake />,
    title: "UNLOCK OPPORTUNITIES",
    body: "From collaborations to careers, discover possibilities that emerge from genuine connection.",
  },
  {
    icon: <PiChatsCircle />,
    title: "MOVE BEYOND SMALL TALK",
    body: "Be part of conversations that are intellectual, soulful, and real.",
  },
];

export default function Benefits() {
  return (
    <section
      className="bg-[#f7f2ed] py-20 overflow-hidden"
      id="benefits"
    >
      <div className="max-w-[1220px] mx-auto px-8">

        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <span className="text-[16px] text-[#9c6b72] tracking-wide lowercase">
            benefits
          </span>

          <h2 className="mt-3 font-display text-[52px] leading-none text-[#6f1d30] font-light">
            Why join Women Who Talk?
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-5">

          {/* CARDS */}
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#f2ece7] rounded-[14px] px-7 py-7 min-h-[160px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(125,43,62,0.12)] hover:-translate-y-1 transition-all duration-400 group"
            >

              {/* ICON */}
              <div className="text-[#7d2b3e] text-[18px] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[13px] tracking-[0.8px] font-semibold text-[#3e312d] uppercase leading-[1.5] mb-3 group-hover:text-[#7d2b3e] transition-colors duration-300">
                {item.title}
              </h3>

              {/* BODY */}
              <p className="text-[14px] leading-[1.8] text-[#6e6763]">
                {item.body}
              </p>
            </div>
          ))}

          {/* IMAGE CARD */}
          <div className="col-span-2 bg-[#f2ece7] rounded-[4px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-[200px] group cursor-pointer">
            <img
              src={benefitsImage}
              alt="Women Who Talk"
              className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}