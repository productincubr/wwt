import { Users, Heart } from "lucide-react";

const circleCards = [
    [
        "https://i.pinimg.com/control1/736x/61/89/fe/6189fe7b38b63df20c94ed04c80af81d.jpg",
        "https://i.pinimg.com/736x/c4/0a/91/c40a9162e83ed0b583d41ae8f9bba444.jpg",
        "https://i.pinimg.com/736x/64/69/61/6469615f036aef58572d99120f1a4269.jpg",
        "https://i.pinimg.com/736x/fd/55/15/fd551585782881ab27c468719fdecabf.jpg",
    ],
    [
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    ],
    [
        "https://i.pinimg.com/236x/c9/28/5f/c9285fa4c36dbf41580adb2affb60959.jpg",
        "https://i.pinimg.com/236x/c9/28/5f/c9285fa4c36dbf41580adb2affb60959.jpg",
        "https://i.pinimg.com/236x/c9/28/5f/c9285fa4c36dbf41580adb2affb60959.jpg",
        "https://i.pinimg.com/236x/c9/28/5f/c9285fa4c36dbf41580adb2affb60959.jpg",
    ],
    [
        "https://i.pinimg.com/736x/97/14/cb/9714cb79cdea70a30e438e954627dfd9.jpg",
        "https://i.pinimg.com/736x/97/14/cb/9714cb79cdea70a30e438e954627dfd9.jpg",
        "https://i.pinimg.com/736x/97/14/cb/9714cb79cdea70a30e438e954627dfd9.jpg",
        "https://i.pinimg.com/736x/97/14/cb/9714cb79cdea70a30e438e954627dfd9.jpg",
    ],
    [
        "https://i.pinimg.com/736x/3a/10/5e/3a105e896498b6319384fa63bfc62430.jpg",
        "https://i.pinimg.com/736x/3a/10/5e/3a105e896498b6319384fa63bfc62430.jpg",
        "https://i.pinimg.com/736x/3a/10/5e/3a105e896498b6319384fa63bfc62430.jpg",
        "https://i.pinimg.com/736x/3a/10/5e/3a105e896498b6319384fa63bfc62430.jpg",
    ],
    [
        "https://i.pinimg.com/736x/86/85/76/8685764a41a6fcbeb841b6d5a1eed5a7.jpg",
        "https://i.pinimg.com/736x/86/85/76/8685764a41a6fcbeb841b6d5a1eed5a7.jpg",
        "https://i.pinimg.com/736x/86/85/76/8685764a41a6fcbeb841b6d5a1eed5a7.jpg",
        "https://i.pinimg.com/736x/86/85/76/8685764a41a6fcbeb841b6d5a1eed5a7.jpg",
    ],


];

export default function OurCircles() {
    return (
        <section
            id="circles"
            className="bg-[#F8F2F0] py-24 px-10 lg:mt-[-40px] mt-[-40px]"
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