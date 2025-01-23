import React from "react";
import FaqItems from "./FaqItems";

const FAQ = () => {
  const OverviewItems = [
    {
      question: "Why Should I Use Your Services?",
      answer:
        "Sign up for an account, set your preferences, and start browsing properties or connecting with agents instantly",
    },
    {
      question: "How Do I get started With Your Services?",
      answer:
        "Yes, our 24/7 support is available via live chat, email, or phone to assist you at every step.",
    },
    {
      question: "Is There Customer Support Available?",
      answer:
      "Log in, navigate to [Profile:Settings], and update your personal or payment details easily.",
    },
    {
      question: "How Can I Update MY Acount Information?",
      answer:
        "Fees are based on a percentage of sales or a fixed amount for rentals, clearly outlined in our pricing section.",
    },
  ];

  const CostsAndPaymentsItems = [
    {
      question: "How Do You Calculate Fees?",
      answer:
        "You can pay securely using credit cards, bank transfers, or digital wallets, with instant confirmation.",
    },
    {
      question: "How Do I Pay?",
      answer:
        "Payments can be made securely via credit cards, bank transfers, or digital wallets",
    },
    {
      question: "Are There Oppurtunities For Discount Or Promotions?",
      answer:
       "Yes, we offer seasonal discounts, referral rewards, and promotions for new users."
    },
    {
      question: "Are There Any Hidden Fees Not Displayed In The Pricing Table?",
      answer:
        "No, all fees are transparent and disclosed upfront before completing transactions.",
    },
    {
        question: "What Are The Refund Procedure?",
        answer:
          "Eligible refunds are processed within 5-7 business days upon request through support."
    },
    {
        question: "Is There Financial Or Accounting Support?",
        answer:
          "We provide tools like mortgage calculators, tax guides, and expert financial advice."
    },
  ];

  const SafetyAndSecurityItems = [
    {
      question: "What Language Does Your Service Support?",
      answer:
        "We support multiple languages, including English, Spanish, and French."
    },
    {
      question: "How Do I Intregrate Your Service With My System?",
      answer:
        "Use our API or guides available in the [Developer Tools] section, or contact our tech team."
    },
    {
      question: "What Are The Safety Features OfYour System?",
      answer:
       "We ensure safety through SSL encryption, two-factor authentication, and regular system audits."
    },
    {
      question: "How Can I Request new Features?",
      answer:
        "Submit requests through the feedback form or email, and we will review them promptly."
    },
    {
        question: "Is MY Data Protected?",
        answer:
          "Yes, your data is secure and complies with global protection standards like GDPR and CCPA."
    },
    {
        question: "How Do I Report A Technical Issue?",
        answer:
          "Report issues via the [Support] section or contact our team with details for a quick fix."
    },
  ];

  return (
    <div className="w-5/6 mx-auto  ">
      <div
        className="hero rounded-3xl z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://neilpatel.com/wp-content/uploads/fly-images/144256/Get-Your-FAQs-Straight-Convert-Your-Curious-Customers-1200x675-c.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md py-2 pt-5 ">
            <p>Home / Faqs</p>
            <h1 className="mb-5 text-5xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exerationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>

      <FaqItems faqTitle={"Overview"} faqItems={OverviewItems} />

      <FaqItems faqTitle={"Costs And Calculation"} faqItems={CostsAndPaymentsItems} />

      <FaqItems faqTitle={"Safety And Security"} faqItems={SafetyAndSecurityItems} />
    </div>
  );
};

export default FAQ;
