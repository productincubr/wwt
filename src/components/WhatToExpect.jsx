import experienceImg1 from "../assets/images/forth-section1.png";
import experienceImg2 from "../assets/images/forth-section2.png";
import experienceImg3 from "../assets/images/forth-section3.png";

const stepOneImages = [
  { src: experienceImg1, alt: "", rotate: "group-hover:-rotate-1" },
  {
    src: "https://images.unsplash.com/photo-1758274252457-18a23285169c?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Women talking at an outdoor cafe",
    rotate: "group-hover:rotate-1",
  },
  { src: experienceImg3, alt: "", rotate: "group-hover:-rotate-1" },
  {
    src: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Friends gathered around a wine and cheese spread",
    rotate: "group-hover:rotate-1",
  },
  {
    src: "https://images.unsplash.com/photo-1529832588601-c01e066263a8?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Women celebrating together at an outdoor garden party",
    rotate: "group-hover:-rotate-1",
  },
  {
    src: "https://images.unsplash.com/photo-1681641095814-58c7e8d9e1f7?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Women laughing together over drinks",
    rotate: "group-hover:rotate-1",
  },
];

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
      "You don't leave with just thoughts- you leave with a feeling. A beautiful memory from the evening, because exceptional moments deserve to be remembered, not just lived. And you'll take home beautifully curated souvenirs from the meetup, along with exciting, useful goodies that let the experience stay with you long after the evening ends.",
  },
];

export default function WhatToExpect() {
  return (
    <section
      className="bg-[#f7f2ed] py-16 md:py-20 overflow-hidden"
      id="experience"
    >
      <div className="max-w-[1220px] mx-auto px-5 md:px-8">

        {/* TOP HEADING */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[40px] font-playfair regular md:text-[58px] leading-none text-[#521625] mb-3">
            What to Expect at a WWT Circle Meet
          </h2>

          <p className="text-[16px] md:text-[18px] font-inter regular text-[#635E55] max-w-[580px] mx-auto leading-[1.8] md:leading-[1.9] font-bold">
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
                  <h3 className="font-display regular text-[22px] md:text-[24px] text-[#521625] leading-none mb-3 md:mb-4">
                    Hors d'oeuvres & Intentional Introductions
                  </h3>

                  <p className="text-[13px] font-inter regular md:text-[16px] leading-[1.8] md:leading-[1.9] font-semibold text-[#635E55] max-w-[620px]">
                    We begin with a curated selection of hors d'oeuvres,
                    creating a relaxed space to ease into the evening.
                    Introductions here go beyond the usual—this is your first
                    step into being seen and known.
                  </p>
                </div>
              </div>

              {/* IMAGE ROW - fixed-width cards in a horizontally scrollable strip */}
              <div className="experience-scroll flex flex-row flex-nowrap gap-4 md:gap-5 mt-10 md:mt-12 ml-0 md:ml-[50px] max-w-full md:max-w-[1080px] overflow-x-auto snap-x snap-mandatory pb-5">
                {stepOneImages.map((image, index) => (
                  <div
                    key={index}
                    className="shrink-0 snap-start aspect-[480/724] h-[300px] md:h-[550px] overflow-hidden group rounded-lg shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className={`w-full h-full object-cover group-hover:scale-110 ${image.rotate} transition-transform duration-700`}
                    />
                  </div>
                ))}
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
                    <h3 className="font-inter regular text-[22px] md:text-[27px] text-[#521625] leading-none mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>

                    <p className="text-[13px] md:text-[17px] leading-[1.8] md:leading-[1.9] text-[#635E55] max-w-[620px] whitespace-pre-line">
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