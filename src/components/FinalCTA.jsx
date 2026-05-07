import waveTop from "../assets/images/hero-layer-image.png";
import waveBottom from "../assets/images/hero-layer-image.png";

export default function FinalCTA() {
  return (
    <section className="bg-[#f7f2ed] relative overflow-hidden py-28">

      {/* TOP WAVE */}
      <img
        src={waveTop}
        alt=""
        className="absolute top-0 left-0 w-[340px] opacity-30 pointer-events-none"
      />

      {/* BOTTOM WAVE */}
      <img
        src={waveBottom}
        alt=""
        className="absolute bottom-0 right-0 w-[360px] opacity-30 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="max-w-[820px] mx-auto px-8 relative z-10">

        {/* PARAGRAPH 1 */}
        <p className="text-[17px] leading-[2] text-[#756e69] mb-10">
          This isn’t just a meet. It’s an experience you carry with you.
          This is where you don’t have to pretend. Where you don’t have to
          dilute your thoughts. Where you don’t have to fit in—because you
          already belong.
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-[17px] leading-[2] text-[#756e69] mb-10">
          But not everyone is meant for this room. And that’s what makes
          it powerful. Every seat at Women Who Talk is intentional.
          Every voice in the circle matters. If you’ve ever left a gathering
          feeling unseen... If you’ve ever held back a thought because the room
          couldn’t hold it... If you’ve been searching for conversations that
          go beyond the obvious— This is your space.
        </p>

        {/* PARAGRAPH 3 */}
        <p className="text-[17px] leading-[2] text-[#756e69]">
          But you have to choose it. Take a moment. Reflect. Tell us who you
          are, what you think, and what you want to explore. Because at WWT,
          your presence isn't just attendance— it’s contribution. Apply to join
          the circle. Because the right rooms don’t just include you—they’re
          built with you in mind.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="font-display text-[38px] text-[#7b2c40] border-b border-[#7b2c40] pb-1 hover:opacity-70 transition-all duration-300"
          >
            Apply to Join the Circle
          </a>
        </div>
      </div>
    </section>
  );
}