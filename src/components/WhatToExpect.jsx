import experienceImg1 from "../assets/images/forth-section1.png";
import experienceImg2 from "../assets/images/forth-section2.png";
import experienceImg3 from "../assets/images/forth-section3.png";

const steps = [
  {
    num: "01",
    title: "Hors d'oeuvres & Intentional Introductions",
    body:
      "We begin with a curated selection of hors d'oeuvres, creating a relaxed space to ease into the evening. Introductions here go beyond the usual—this is your first step into being seen and known.",
  },
  {
    num: "02",
    title: "Deep-Dive Conversations",
    body:
      "The heart of every meet is a focused, thought-provoking discussion around a central theme designed to spark perspective, reflection, and honest dialogue.",
  },
  {
    num: "03",
    title: "Ever-Evolving Themes",
    body:
      "No two meets are the same. Topics may include:\n• Emotional Intelligence\n• Social and cultural narratives\n• Women-centric stories\n• Art, books and creative expression\n• Travel, poetry, films and music\n• Family and relationships\n• and much more to guide curious minds.",
  },
  {
    num: "04",
    title: "Gourmet Dining Experience",
    body:
      "As conversations flow, we move into a thoughtfully curated meal—where ideas deepen, connections strengthen, and the evening unfolds organically.",
  },
  {
    num: "05",
    title: "A Space to Speak & Listen",
    body:
      "Every voice matters. You'll share, listen, and engage in a way that feels both safe and stimulating.",
  },
  {
    num: "06",
    title: "Closing with Intention",
    body:
      "The meet ends on a grounding note—with positive affirmations and a simple calming exercise, leaving you centred and fulfilled.",
  },
  {
    num: "07",
    title: "A Memory to Keep",
    body:
      "You don't leave with thoughts—you leave with a feeling. A beautiful memory from the evening, because exceptional moments deserve to be remembered, not just lived.",
  },
];

export default function WhatToExpect() {
  return (
    <section
      className="bg-[#f7f2ed] py-16 md:py-24 overflow-hidden"
      id="experience"
    >
      <div className="max-w-[1220px] mx-auto px-5 md:px-8">

        {/* TOP HEADING */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[20px] md:text-[24px] text-[#521625] mb-4">
            What to Expect at a WWT Circle Meet
          </p>

          <p className="text-[16px] md:text-[20px] text-[#635E55] max-w-[580px] mx-auto leading-[1.8] md:leading-[1.9]">
            Every Women Who Talk gathering is thoughtfully designed to be immersive,
            meaningful, and deeply engaging—from the first moment to the last.
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-[1150px] mx-auto">

          {/* LEFT SIDE */}
          <div>

            {/* STEP 01 */}
            <div className="mb-14">
              <div className="flex items-start gap-4 md:gap-7">

                <span className="text-[22px] md:text-[26px] font-light text-[#d4c2bc] font-display leading-none mt-1">
                  01
                </span>

                <div>
                  <h3 className="font-display text-[22px] md:text-[24px] text-[#521625] leading-none mb-3 md:mb-4">
                    Hors d'oeuvres & Intentional Introductions
                  </h3>

                  <p className="text-[13px] md:text-[14px] leading-[1.8] md:leading-[1.9] font-semibold text-[#635E55] max-w-[620px]">
                    We begin with a curated selection of hors d'oeuvres,
                    creating a relaxed space to ease into the evening.
                    Introductions here go beyond the usual—this is your first
                    step into being seen and known.
                  </p>
                </div>
              </div>

              {/* IMAGE ROW */}
              <div className="flex flex-col md:grid md:grid-cols-[1.25fr_0.9fr_0.9fr] gap-4 md:gap-5 mt-10 md:mt-12 ml-0 md:ml-[50px] max-w-[1080px]">

                {/* IMAGE 1 BIGGER */}
                <div className="h-[300px] md:h-[500px] overflow-hidden group rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                  <img
                    src={experienceImg1}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-1 transition-transform duration-700"
                  />
                </div>

                {/* IMAGE 2 */}
                <div className="h-[300px] md:h-[500px] overflow-hidden group rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                  <img
                    src={experienceImg2}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                  />
                </div>

                {/* IMAGE 3 */}
                <div className="h-[300px] md:h-[500px] overflow-hidden group rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                  <img
                    src={experienceImg3}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-1 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* OTHER STEPS */}
            <div className="space-y-10 md:space-y-12">

              {steps.slice(1).map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 md:gap-7 group"
                >
                  <span className="text-[22px] md:text-[26px] font-light text-[#d4c2bc] font-display leading-none mt-1 group-hover:text-[#521625] transition-colors duration-300">
                    {item.num}
                  </span>

                  <div>
                    <h3 className="font-display text-[22px] md:text-[24px] text-[#521625] leading-none mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>

                    <p className="text-[13px] md:text-[14px] leading-[1.8] md:leading-[1.9] text-[#635E55] max-w-[620px] whitespace-pre-line">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}