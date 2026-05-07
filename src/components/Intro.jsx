import sideWomen from "../assets/images/two-girls-image.png";
import statCard from "../assets/images/two-girls-image2.png";
import wave  from "../assets/images/hero-layer-image.png";

const pillars = [
  {
    icon: "◌",
    title: "For women who think deeply",
    body: "For women who think deeply, read widely, and are unafraid to question the world around them. For women who observe, reflect, and form their own opinions—and are ready to express them. Here, your voice isn’t an interruption. It’s the whole point.",
  },
  {
    icon: "⌘",
    title: "women of substance",
    body: "WWT brings together women of substance—the bold, the curious, the self-aware—women who are not silent spectators of life, but active participants in it.",
  },
  {
    icon: "♡",
    title: "intentional gathering",
    body: "Every gathering is intentional. From gourmet experiences to thoughtfully curated themes, everything is designed to spark conversations that matter—the kind that stay with you long after the evening ends. And to preserve that depth, every detail is designed with purpose.",
  },
  {
    icon: "◫",
    title: "Only 12 Seats",
    body: "Each circle is intimate—only 12 seats. Because real conversations don’t happen in crowds—they happen in close, trusted spaces. If there is more interest, additional circles are thoughtfully scheduled on the same theme—ensuring every gathering remains focused, centred, and meaningful.",
  },
  {
    icon: "✧",
    title: "Curated Participation",
    body: "Participation is curated. Entry into WWT is not random—it is intentional. A short profile form helps us understand who you are. And more importantly, each form includes a reflection on the upcoming topic—because what you think, how you see the world, and what you bring to the table… truly matters.",
  },
];

export default function Intro() {
  return (
    <section className="bg-[#f7f2ed] py-16 md:py-24 overflow-hidden relative" id="about">
      <div className="max-w-[1250px] mx-auto px-5 md:px-8 grid lg:grid-cols-[57%_43%] gap-12 md:gap-6 items-start">

        {/* LEFT CONTENT */}
        <div className="relative">

          <h2 className="font-display text-[42px] md:text-[56px] leading-[1.1] md:leading-[1.08] text-[#6f1d30] font-light max-w-[680px]">
            In a world full of conversations,{" "}
            <span className="italic text-[#b25b67]">very</span>
            <br />
            <span className="italic text-[#b25b67]">few are real.</span>
          </h2>

          <p className="mt-5 md:mt-7 text-[14px] md:text-[15px] text-[#6d6662] leading-[1.8] md:leading-[1.9] max-w-[520px]">
            We've mastered the art of gathering—but somewhere along the way we stopped truly connecting.
            We smile, we nod, we pose... and we leave without ever being seen.
            Women Who Talk was created to change that. This is not another table of polite chatter and predictable conversations.
            WWT is a space for women who refuse to stay on the surface.
          </p>

          {/* Timeline */}
          <div className="mt-10 relative pl-10 before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-px before:bg-[#d8c7bf]">
            {pillars.map((item, i) => (
              <div key={i} className="relative mb-10 group">
                <div className="absolute -left-10 top-1 w-6 h-6 rounded-full border border-[#c7aaaa] bg-[#f7f2ed] flex items-center justify-center text-[#8a3245] text-[10px] group-hover:bg-[#8a3245] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="font-display text-[21px] md:text-[23px] text-[#5f2b38] mb-2 group-hover:text-[#8a3245] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-[13px] md:text-[14px] leading-[1.8] text-[#6f6965] max-w-[510px]">
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
        <div className="relative h-[600px] lg:h-[850px] w-full flex justify-center mt-10 lg:mt-0">

          {/* Main girls image */}
          <div className="absolute top-0 lg:top-10 left-0 lg:left-0 w-full lg:w-[82%] h-[550px] lg:h-[920px] rounded-[28px] overflow-hidden group">
            <img
              src={sideWomen}
              alt="Women Talking"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Red box image */}
          <img
            src={statCard}
            alt="stats card"
            className="absolute -bottom-[20px] lg:-bottom-[180px] right-[20px] lg:left-[100px] w-[140px] md:w-[180px] lg:w-[210px] z-20 hover:-translate-y-2 transition-transform duration-500 shadow-xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}