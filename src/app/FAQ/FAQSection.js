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
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-8 bg-hoverColor rounded-full" />
        <h2 className="text-3xl sm:text-4xl font-extrabold text-textOnLight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="divide-y divide-hoverlight/20 rounded-2xl border border-hoverlight/20 bg-cardBg shadow-sm overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left hover:bg-hoverlight/5 transition"
            >
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-cardText">
                  {faq.question}
                </h3>
                <div
                  className={`mt-2 text-textSecond text-sm sm:text-base leading-relaxed ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
              <span
                className={`ml-2 shrink-0 rounded-full border p-1 text-sm transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 border-hoverColor text-hoverColor"
                    : "border-gray-300 text-gray-500"
                }`}
              >
                ▼
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
