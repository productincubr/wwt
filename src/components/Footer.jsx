export default function Footer() {
  return (
    <footer className="bg-[#EFE7DC] border-t border-[#e7ddd7] py-10">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-center md:text-left">

        {/* LEFT LOGO */}
        <div>
          <h3 className="font-display text-[28px] text-[#2f2623]">
            Women Who Talk.
          </h3>
        </div>

        {/* CENTER COPYRIGHT */}
        <div>
          <p className="text-[13px] text-[#938a84] tracking-[0.3px]">
            © 2024 Women Who Talk. A space for substance.
          </p>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <a
            href="#"
            className="text-[13px] text-[#5f5752] hover:text-[#7b2c40] transition-all duration-300"
          >
            Privacy
          </a>

          <a
            href="#"
            className="text-[13px] text-[#5f5752] hover:text-[#7b2c40] transition-all duration-300"
          >
            Terms
          </a>

          <a
            href="#"
            className="text-[13px] text-[#5f5752] hover:text-[#7b2c40] transition-all duration-300"
          >
            Membership Policy
          </a>

          <a
            href="#"
            className="text-[13px] text-[#5f5752] hover:text-[#7b2c40] transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}