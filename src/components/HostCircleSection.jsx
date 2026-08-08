import {
  Users,
  GraduationCap,
  Calendar,
  Briefcase,
  Globe,
  ArrowRight,
  Heart,
  MapPin,
} from "lucide-react";

import rightImg from '../assets/images/forth-section1.png';

const features = [
  {
    icon: Briefcase,
    title: "Leadership Opportunity",
    desc: "Step into a leadership role and make a real impact in your community.",
  },
  {
    icon: Users,
    title: "Community Building",
    desc: "Create a safe space for women to connect, share, and grow together.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    desc: "Get access to resources, training and ongoing support every step of the way.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    desc: "Host circles on your terms and at a pace that fits your life.",
  },
];

export default function HostCircleSection() {
  return (
    <section className="bg-[#F8F2F0] py-24 lg:py-20 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 xl:gap-24 items-center">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Decorative Circle */}

            {/* Top Label */}
            <div className="flex items-center gap-4 mb-5">
              <span className="uppercase tracking-[3px] text-[13px] font-semibold text-[#8D6670]">
                Join Our Team
              </span>

              <Heart
                size={14}
                className="text-[#CBA8AD]"
                strokeWidth={1.5}
              />
            </div>

            {/* Heading */}
            <h2 className="text-[#6B2738] leading-[72px] font-['Playfair_Display'] font-normal mt-2">
              <span className="block text-[52px] md:text-[72px]">
                Bring Women
              </span>

              <span className="block text-[52px] md:text-[72px]">
                Who Talk
              </span>

              <span className="block text-[56px] md:text-[72px] italic mt-1">
                To Your City
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-[500px] text-[#726C69] leading-8 text-[16px]">
              Passionate about creating meaningful connections?
              Become a WWT Circle Host and build a community
              of inspiring women in your city.
            </p>

            {/* Features */}
            <div className="mt-12 space-y-8">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#F1E7E4]">
                      <Icon
                        size={18}
                        className="text-[#8D6670]"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#7B4450] text-[18px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[#857D79] text-[15px] leading-6 max-w-[360px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button
              className="
                mt-10
                bg-[#5D1F29]
                hover:bg-[#5D1E2B]
                text-white
                px-8
                h-[54px]
                rounded-xl
                flex
                items-center
                gap-3
                transition-all
              "
            >
              <span className="font-medium">
                Apply As Host
              </span>

              <ArrowRight size={18} />
            </button>

            {/* Bottom Text */}
            <p className="mt-10 italic text-[#5D1F29] text-[22px] font-serif">
              Be the reason someone finds her people ♡
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <img
              src={rightImg}
              alt="Host Circle"
              className="w-full h-[780px] object-cover"
            />

            {/* Floating Card */}
            <div
              className="
                absolute
                left-1/2
                bottom-5
                -translate-x-1/2
                w-[86%]
                bg-[#FFFDFC]
                rounded-[30px]
                border
                border-[#EFE7E4]
                p-10
              "
            >
              {/* Location Badge */}
              <div className="absolute left-1/2 -top-5 -translate-x-1/2">
                <div className="w-10 h-10 rounded-full bg-[#F7E9E7] flex items-center justify-center">
                  <MapPin
                    size={16}
                    className="text-[#A87079]"
                  />
                </div>
              </div>

              <h3 className="text-center text-[#6D2433] text-[30px] font-playfair leading-none">
                Host a Circle in Your City
              </h3>

              <p className="text-center font-inter regular text-[13px] text-[#4A4A4A] mt-5 leading-7 max-w-[500px] mx-auto">
                From Mumbai to Melbourne, New York to Nairobi —
                let's create a world where every woman has a circle.
              </p>

              <div className="border-t border-[#EFE5E2] mt-7 pt-6 flex items-center justify-between gap-5">
                <div className="flex gap-3">
                  <Globe
                    size={20}
                    className="text-[#8D6670] shrink-0 mt-1"
                  />

                  <p className="text-[12px] text-[#807875] leading-5 max-w-[300px]">
                    Join a global movement of women creating
                    real connections and lasting change.
                  </p>
                </div>

                <div className="text-right min-w-[120px]">
                  <p className="italic font-playfair text-[#5D1F29] text-[23px] leading-[1.1]">
                    Together,
                  </p>

                  <p className="italic font-playfair text-[#5D1F29] text-[23px] leading-[1.1]">
                    we <br></br> grow ♡
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
}