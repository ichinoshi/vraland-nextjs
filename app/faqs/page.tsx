"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/faqs/HeroSection";
import CategoriesSection from "@/components/sections/faqs/CategoriesSection";
import FAQContentSection from "@/components/sections/faqs/FAQContentSection";
import ContactSupportSection from "@/components/sections/faqs/ContactSupportSection";

const faqsData = {
  hero: {
    title: "Frequently Asked Questions",
    subtitle: "Find Answers to Your Questions",
    description:
      "Get quick answers to common questions about VRA Land developments, processes, and services.",
    image: "/images/faq/hero-bg.jpg",
  },
  categories: [
    {
      icon: "HomeIcon",
      title: "Properties & Units",
      description: "Questions about our developments and available units",
    },
    {
      icon: "CurrencyDollarIcon",
      title: "Pricing & Payment",
      description: "Information about pricing, financing, and payment terms",
    },
    {
      icon: "DocumentTextIcon",
      title: "Legal & Documentation",
      description: "Legal processes, contracts, and required documents",
    },
    {
      icon: "BuildingOfficeIcon",
      title: "Construction & Timeline",
      description: "Project timelines, construction updates, and completion",
    },
  ],
  faqSections: [
    {
      category: "Properties & Units",
      faqs: [
        {
          question: "What types of properties does VRA Land offer?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "What unit sizes are available in your developments?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "Are the units fully furnished?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "What amenities are included in your developments?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "Can I customize my unit?",
          answer: "Not available - Information will be provided in the future.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      faqs: [
        {
          question: "What are the price ranges for your developments?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "What payment schemes do you offer?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "Do you assist with bank financing?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "Are there any additional fees or charges?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "What is your reservation process?",
          answer: "Not available - Information will be provided in the future.",
        },
      ],
    },
    {
      category: "Legal & Documentation",
      faqs: [
        {
          question: "What documents do I need to purchase a unit?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "What titles and permits does VRA Land have?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "Can foreigners purchase units in your developments?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "What happens if I need to cancel my reservation?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "Is my investment protected?",
          answer: "Not available - Information will be provided in the future.",
        },
      ],
    },
    {
      category: "Construction & Timeline",
      faqs: [
        {
          question: "What are the expected completion dates for your projects?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "How do you ensure construction quality?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "What happens if there are construction delays?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "Can I visit the construction site?",
          answer: "Not available - Information will be provided in the future.",
        },
        {
          question: "What is included in the unit turnover?",
          answer: "Not available - Information will be provided in the future.",
        },
      ],
    },
  ],
};

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("Properties & Units");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (question: string) => {
    setOpenFAQ(openFAQ === question ? null : question);
  };

  const activeFAQs =
    faqsData.faqSections.find((section) => section.category === activeCategory)
      ?.faqs || [];

  return (
    <div className="bg-background-primary">
      <HeroSection
        title={faqsData.hero.title}
        subtitle={faqsData.hero.subtitle}
        description={faqsData.hero.description}
        image={faqsData.hero.image}
      />
      
      <CategoriesSection
        categories={faqsData.categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <FAQContentSection
        activeCategory={activeCategory}
        faqs={activeFAQs}
        openFAQ={openFAQ}
        onToggleFAQ={toggleFAQ}
      />
      
      <ContactSupportSection />
    </div>
  );
}
