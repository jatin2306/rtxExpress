"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Can I check and pay challan directly on E-Challan?",
    answer:
      "Yes, you can instantly check and pay your challan using our secure payment gateway.",
  },
  {
    question: "Why do I need to share an OTP to pay my challan?",
    answer:
      "OTP verification ensures secure and authorized access to your challan details and payment process.",
  },
  {
    question: "How long does it take to settle challan payments?",
    answer:
      "Payments are usually processed within a few minutes, depending on the issuing authority’s response.",
  },
  {
    question: "Can I clear court challans here?",
    answer:
      "Court challans can’t be paid online; please visit the court directly for settlement.",
  },
  {
    question: "What if my challan shows pending after payment?",
    answer:
      "Sometimes updates take 24–48 hours. If the issue persists, contact our support team.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#3e1f92] mb-8 text-center sm:text-left">
        Frequently Asked Questions
      </h2>

      {/* FAQ Box */}
      <div className="bg-white/80 backdrop-blur-lg border border-violet-100 rounded-2xl shadow-md divide-y divide-gray-100">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 sm:p-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-gray-800 font-medium text-base sm:text-lg focus:outline-none"
            >
              <span className="pr-4 leading-snug">Q. {faq.question}</span>
              <span
                className={`ml-2 transition-transform duration-300 text-lg ${
                  openIndex === index ? "rotate-180 text-[#6d38f0]" : "text-gray-400"
                }`}
              >
                ▼
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
