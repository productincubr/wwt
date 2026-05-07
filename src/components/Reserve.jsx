import {
  PiCircleLight,
  PiSparkleLight,
  PiBowlFoodLight,
  PiHeartStraightLight,
} from "react-icons/pi";

const includes = [
  {
    icon: <PiCircleLight />,
    title: "A Reserved Seat:",
    body: "An intimate spot in a thoughtfully curated circle of just 12 women",
  },
  {
    icon: <PiSparkleLight />,
    title: "Takeaway Goodies:",
    body: "A special keepsake to remember the evening by",
  },
  {
    icon: <PiBowlFoodLight />,
    title: "Gourmet Food & Drinks:",
    body: "A carefully crafted culinary experience to complement meaningful conversations",
  },
  {
    icon: <PiHeartStraightLight />,
    title: "A Priceless Experience:",
    body: "Deep conversations, genuine connections, and a space where you are truly seen and heard",
  },
];

export default function Reserve() {
  return (
    <section
      className="bg-[#f7f2ed] py-16 md:py-24 px-5"
      id="reserve"
    >
      {/* OUTER BORDER CONTAINER */}
      <div className="max-w-[1220px] mx-auto border border-[#ebe2dc] bg-[#f9f6f3] py-14 px-6 md:py-20 md:px-10">

        {/* HEADING */}
        <div className="text-center">

          <h2 className="font-display text-[40px] md:text-[58px] leading-none text-[#6f1d30] mb-4">
            Reserve Your Seat
          </h2>

          <h3 className="font-display text-[50px] md:text-[74px] leading-none text-[#8b3044] font-semibold">
            INR 2500
          </h3>

          <p className="mt-5 text-[14px] text-[#7d7671]">
            Get your place at this exclusive table for INR 2500 (all-inclusive)
          </p>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-[#ece3de] my-10 md:my-14" />

        {/* EXPERIENCE TITLE */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[13px] tracking-[2px] uppercase text-[#8c5d68] font-medium">
            Your Experience Includes:
          </p>
        </div>

        {/* INCLUDES GRID */}
        <div className="max-w-[720px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8 md:gap-y-10">

          {includes.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group"
            >

              {/* ICON */}
              <div className="text-[#8a3245] text-[18px] mt-[2px] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h4 className="text-[15px] leading-[1.7] text-[#5c4d48] font-medium group-hover:text-[#8a3245] transition-colors duration-300">
                  {item.title}
                </h4>

                <p className="text-[14px] leading-[1.9] text-[#7b746f] mt-1">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button className="bg-[#7c2a3d] hover:bg-[#631c2a] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(124,42,61,0.3)] transition-all duration-300 text-white text-[12px] tracking-[2px] uppercase px-12 py-5 rounded-full">
            Apply To Join The Circle
          </button>
        </div>

        {/* FOOT TEXT */}
        <p className="text-center mt-10 text-[14px] text-[#7f7772]">
          <span className="text-[#a52d46]">
            Limited seats.
          </span>{" "}
          Intentional conversations. Meaningful connections.
          Reserve your place at the table.
        </p>
      </div>
    </section>
  );
}