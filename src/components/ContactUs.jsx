import {
    Mail,
    Phone,
    User,
    Pencil,
    ArrowRight,
    Check,
    Clock3,
    Heart,
    Quote,
  } from "lucide-react";
  
  export default function ContactSection() {
    const reachItems = [
      "Event inquiries",
      "Partnerships & sponsorships",
      "Hosting a circle in your city",
      "Media & collaborations",
      "General questions",
    ];
  
    return (
      <section className="bg-[#F8F2F0] py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          {/* Header */}
  
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[12px] text-[#C98C93] font-semibold">
              Contact Us
            </p>
  
            <h2 className="mt-4 text-[#7A4B55] text-[58px] leading-none font-serif">
              We'd Love to Hear From You
            </h2>
  
            <p className="mt-5 max-w-[650px] mx-auto text-[#9B918E] leading-8">
              Whether you have a question about an upcoming circle,
              want to collaborate, or simply wish to learn more,
              we're here to help.
            </p>
          </div>
  
          {/* Main Card */}
  
          <div className="bg-[#FCF8F7] rounded-[28px] p-8 lg:p-12 border border-[#F0E8E6]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12">
              {/* LEFT FORM */}
  
              <div>
                {/* Name */}
  
                <div className="mb-6">
                  <label className="block text-[14px] font-semibold text-[#7B4A54] mb-2">
                    Your Name
                  </label>
  
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6A7AC]"
                    />
  
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-14 pl-11 pr-4 rounded-xl border border-[#EFE4E1] bg-white outline-none"
                    />
                  </div>
                </div>
  
                {/* Email */}
  
                <div className="mb-6">
                  <label className="block text-[14px] font-semibold text-[#7B4A54] mb-2">
                    Email Address
                  </label>
  
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6A7AC]"
                    />
  
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full h-14 pl-11 pr-4 rounded-xl border border-[#EFE4E1] bg-white outline-none"
                    />
                  </div>
                </div>
  
                {/* Phone */}
  
                <div className="mb-6">
                  <label className="block text-[14px] font-semibold text-[#7B4A54] mb-2">
                    Phone Number
                  </label>
  
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6A7AC]"
                    />
  
                    <input
                      type="text"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full h-14 pl-11 pr-4 rounded-xl border border-[#EFE4E1] bg-white outline-none"
                    />
                  </div>
                </div>
  
                {/* Message */}
  
                <div>
                  <label className="block text-[14px] font-semibold text-[#7B4A54] mb-2">
                    Message
                  </label>
  
                  <div className="relative">
                    <Pencil
                      size={16}
                      className="absolute left-4 top-5 text-[#D6A7AC]"
                    />
  
                    <textarea
                      rows="6"
                      placeholder="Tell us how we can help..."
                      className="w-full pl-11 pt-4 pr-4 rounded-xl border border-[#EFE4E1] bg-white outline-none resize-none"
                    />
                  </div>
                </div>
  
                <button className="mt-8 w-full h-[56px] bg-[#722D39] hover:bg-[#612430] text-white rounded-xl flex items-center justify-center gap-3 font-medium transition">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </div>
  
              {/* RIGHT CONTENT */}
  
              <div className="lg:pl-10">
                <h3 className="text-[#7A4B55] text-[42px] leading-none font-serif">
                  Let's Start a
                  <br />
                  Conversation
                </h3>
  
                <p className="mt-4 italic text-[#C48389] text-[24px] font-serif leading-8">
                  Every meaningful
                  <br />
                  connection begins with
                  <br />
                  a simple hello.
                </p>
  
                <div className="mt-10">
                  <h4 className="font-semibold text-[#7A4B55] mb-5">
                    Reach out for:
                  </h4>
  
                  <div className="space-y-4">
                    {reachItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F8E6E8] flex items-center justify-center mt-[2px]">
                          <Check
                            size={12}
                            className="text-[#C68B92]"
                          />
                        </div>
  
                        <span className="text-[#8A8280]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
  
                {/* Contact Info */}
  
                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#ECDDDD] flex items-center justify-center">
                      <Mail size={16} className="text-[#C68B92]" />
                    </div>
  
                    <div>
                      <div className="font-semibold text-[#7A4B55]">
                        Email:
                      </div>
  
                      <div className="text-[#8A8280]">
                        hello@womenwhotalk.com
                      </div>
                    </div>
                  </div>
  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#ECDDDD] flex items-center justify-center">
                      <Clock3 size={16} className="text-[#C68B92]" />
                    </div>
  
                    <div>
                      <div className="font-semibold text-[#7A4B55]">
                        Response Time:
                      </div>
  
                      <div className="text-[#8A8280]">
                        Within 24–48 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Bottom Quote Card */}
  
          <div className="mt-8 bg-[#FCF8F7] border border-[#F0E8E6] rounded-[24px] px-8 py-8">
            <div className="grid md:grid-cols-[1.2fr_1fr_auto] items-center gap-6">
              <div className="flex gap-4">
                <Quote className="text-[#C68B92]" />
  
                <p className="text-[32px] font-serif italic text-[#7A4B55] leading-none">
                  Great conversations start with someone reaching out.
                </p>
              </div>
  
              <p className="text-[#8A8280]">
                We can't wait to connect with you and help you be a
                part of something truly meaningful.
              </p>
  
              <Heart
                size={26}
                className="text-[#C68B92]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }