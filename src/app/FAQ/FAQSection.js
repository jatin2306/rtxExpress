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
  {
    question: "Is my payment secure?",
    answer:
      "Yes, we use industry-standard encryption and a secure payment gateway to ensure your data is safe.",
  },
  {
    question: "Can I view past challans for my vehicle?",
    answer:
      "You can check the history of your vehicle’s challans and their status in our portal.",
  },
  {
    question: "Do I need to register to pay a challan?",
    answer:
      "Registration is optional. You can pay as a guest, but registering allows you to track payments easily.",
  },
  {
    question: "Can I use multiple vehicles under one account?",
    answer:
      "Yes, you can add multiple vehicles to your account and manage their challans conveniently.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16">
      <h2 className="text-4xl font-extrabold text-[#4b2cf0] mb-12 text-left">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-white via-white/90 to-white/80 p-6 rounded-2xl shadow-lg border border-violet-100 hover:shadow-2xl transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-gray-800 font-semibold text-lg focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <div className="text-[#7d5cff] font-bold text-xl">Q.</div>
                <span>{faq.question}</span>
              </div>
              <span
                className={`ml-2 transition-transform duration-300 text-2xl ${
                  openIndex === index ? "rotate-180 text-[#6d38f0]" : "text-gray-400"
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`mt-4 text-gray-700 text-base leading-relaxed overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
