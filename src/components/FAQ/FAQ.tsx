"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Of course! You can upgrade or downgrade your plan anytime from your dashboard. The price difference will be adjusted in your next billing cycle.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We offer a hassle-free cancellation policy. You can cancel your subscription at any time through your settings without any hidden charges.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can easily add your company name, VAT ID, and specific billing address to your invoices from the billing information section.",
    },
    {
      question: "How does billing work?",
      answer:
        "We process payments monthly or annually. You'll receive an automated invoice via email at the start of each billing period.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can update your email address in the 'Account Settings' section. For security, we'll send a verification link to your new email to confirm the change.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[800px]">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#101828] mb-4">
            Frequently asked <span className="text-[#ED3C6A]">questions</span>
          </h2>
          <p className=" text-[18px]">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-[#F2F4F7] last:border-none">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#BF214A47] last:border-none"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full cursor-pointer py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-[18px] font-semibold text-[#101828]">
                  {faq.question}
                </span>

                <div className="flex-shrink-0 ml-4">
                  <div className="w-6 h-6 border-2 border-[#ED3C6A] rounded-full flex items-center justify-center transition-transform duration-300">
                    {openIndex === index ? (
                      <Minus
                        size={14}
                        className="text-[#ED3C6A]"
                        strokeWidth={3}
                      />
                    ) : (
                      <Plus
                        size={14}
                        className="text-[#ED3C6A]"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mb-6"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-[#667085] text-[16px] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
