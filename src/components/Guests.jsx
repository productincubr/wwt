"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const speakers = [
  {
    name: "Ananya Sharma",
    title: "Relationship Coach",
    desc: "Helping women build conscious relationships and deeper connections.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    name: "Dr. Meera Iyer",
    title: "Psychologist",
    desc: "Specializing in women's mental wellness, self-awareness & emotional healing.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    name: "Ishita Malhotra",
    title: "Entrepreneur & Mentor",
    desc: "Empowering women to build purpose-driven brands and lives they love.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    name: "Priya Verma",
    title: "Leadership Coach",
    desc: "Helping women become strong leaders and effective communicators.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=600",
  },
];

export default function Guests() {
  return (
    <section className="bg-[#FDF8F6] py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-[#5A1E2A] text-[12px] font-inter medium">
            Meet Our
          </span>

          <h2 className="mt-4 text-[58px] font-playfair regular leading-none font-serif text-[#5A1E2A]">
            Guest Speakers
          </h2>

          <p className="max-w-[700px] mx-auto mt-5 text-[#857A76] text-[15px]">
            We bring inspiring voices and thought leaders who empower,
            guide and spark meaningful conversations.
          </p>
        </div>

        <div className="relative">

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".speaker-next",
              prevEl: ".speaker-prev",
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={35}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="px-2 sm:px-4 lg:px-8"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    max-w-[320px]
                    mx-auto
                    bg-white
                    rounded-[24px]
                    p-4
                    text-center
                    h-full
                    border
                    border-[#F1E8E6]
                    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  "
                >
                  <div
                    className="
                      w-full
                      h-[240px]
                      rounded-[18px]
                      overflow-hidden
                      mb-4
                    "
                  >
                    <img
                      src={speaker.img}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-[#5A1E2A] text-[22px] font-playfair regular">
                    {speaker.name}
                  </h3>

                  <p className="italic text-[#C07C84] font-playfair  mt-2 text-sm">
                    {speaker.title}
                  </p>

                  <p className="text-[#6B7280] text-sm mt-4 font-inter regular leading-6 min-h-[60px]">
                    {speaker.desc}
                  </p>

                  <div className="flex justify-center mt-6">
                    <button
                      className="
                        w-11 h-11
                        rounded-full
                        bg-[#F6ECEA]
                        flex
                        items-center
                        justify-center
                        text-[#B77A7A]
                        hover:scale-105
                        transition
                      "
                    >
                      <FaLinkedinIn />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}

          <button
            className="
              speaker-prev
              hidden md:flex
              items-center
              justify-center
              absolute
              -left-4
              top-1/2
              -translate-y-1/2
              z-20
              w-12
              h-12
              rounded-full
              bg-white
              border
              border-[#E9D7D4]
              shadow-lg
              text-[#B77A7A]
            "
          >
            ❮
          </button>

          {/* Right Arrow */}

          <button
            className="
              speaker-next
              hidden md:flex
              items-center
              justify-center
              absolute
              -right-4
              top-1/2
              -translate-y-1/2
              z-20
              w-12
              h-12
              rounded-full
              bg-white
              border
              border-[#E9D7D4]
              shadow-lg
              text-[#B77A7A]
            "
          >
            ❯
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          margin-top: 40px !important;
          position: relative !important;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e8d7d5;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #8b4b53;
        }
      `}</style>
    </section>
  );
}