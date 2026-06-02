import { Users, Heart } from "lucide-react";

const circleCards = [
    [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600",
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600",
    ],
    [
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    ],
    [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600",
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600",
    ],
    [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600",
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600",

    ],
    [
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600",
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
    ],
    [
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
    ],


];

export default function OurCircles() {
    return (
        <section
            id="circles"
            className="bg-[#F8F2F0] py-24 px-10"
        >
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header */}

                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <span className="w-[70px] h-[1px] bg-[#E7D9D6]" />

                        <span className="uppercase tracking-[3px] text-[10px] text-[#C4A2A7] font-medium">
                            Memories From
                        </span>

                        <span className="w-[70px] h-[1px] bg-[#E7D9D6]" />
                    </div>

                    <h2 className="mt-2 text-[58px] text-[#5D2A37] font-playfair regular">
                        Our Circles ♡
                    </h2>

                    <p className="mt-3 text-[#6B7280]">
                        Real conversations. Genuine connections.
                        Lasting memories.
                    </p>
                </div>

                {/* Gallery */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {circleCards.map((images, index) => (
                        <div
                            key={index}
                            className="
                bg-white
                border
                border-[#EFE5E2]
                rounded-xl
                p-3
                hover:shadow-lg
                transition-all
              "
                        >
                            <div className="text-center mb-3">
                                <h3 className="font-playfair text-[#6D2433] text-lg">
                                    Our Circles ♡
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt=""
                                        className="
                      w-full
                      h-[110px]
                      object-cover
                      rounded-md
                    "
                                    />
                                ))}
                            </div>

                            <div className="mt-3 pt-3 border-t border-[#EFE5E2] flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Heart
                                        size={14}
                                        className="text-[#B17D86]"
                                    />

                                    <span className="text-[#6D2433] font-semibold">
                                        250+
                                    </span>
                                </div>

                                <span className="text-xs text-[#9C8F8A]">
                                    Memories made
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats Card */}

                <div
                    className="
            mt-16
            bg-white
            rounded-[24px]
            border
            border-[#EFE5E2]
            px-8
            py-7
          "
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full bg-[#F8EAEA] flex items-center justify-center">
                                <Users
                                    size={22}
                                    className="text-[#8A4A56]"
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-[42px] font-playfair font-semibold text-[#5D2A37]">
                                    250+
                                </span>

                                <p className="max-w-[300px] text-[#8A817D] text-sm">
                                    women have already joined meaningful
                                    conversations across our circles.
                                </p>
                            </div>
                        </div>

                        <p className="font-playfair italic medium text-[32px] text-[#5D2A37]">
                            Different stories. One sisterhood. ♡
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}