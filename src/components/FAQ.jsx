const faqs = [
  {
    question: "What if I want to attend more than one meet?",
    answer:
      "You're welcome to join as often as you like! We will continue creating new circles based on interest and sign-ups. Each circle, however, will strictly have 12 women only to ensure genuine, focused conversations.",
  },
  {
    question: "Can I join together with a friend?",
    answer:
      "Of course! Both of you will need to be shortlisted to ensure the circle remains balanced and intentional.",
  },
  {
    question:
      "Can I request to be placed in the same circle as another friend?",
    answer:
      "Yes, you can! We do our best to accommodate such requests while maintaining the integrity of each circle.",
  },
  {
    question: "Can I request a change to my circle?",
    answer:
      "Yes, circle changes are possible. We aim to make sure every participant feels comfortable and included.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#EFE7DC] py-20">
      <div className="max-w-[980px] mx-auto px-6">

        {/* FAQ BOX */}
        <div className="px-14 py-16">

          {/* HEADING */}
          <h2 className="text-center font-display text-[52px] text-[#6f1d30] leading-none mb-14">
            FAQ – Women Who Talk
          </h2>

          {/* FAQ LIST */}
          <div>

            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`py-8 ${
                  index !== faqs.length - 1
                    ? "border-b border-[#ded4ce]"
                    : ""
                }`}
              >

                {/* QUESTION */}
                <h3 className="font-display text-[32px] leading-[1.25] text-[#6f1d30] mb-4">
                  {faq.question}
                </h3>

                {/* ANSWER */}
                <p className="text-[15px] leading-[1.9] text-[#7b746f] max-w-[760px]">
                  {faq.answer}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}