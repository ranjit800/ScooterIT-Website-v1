"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, X } from "lucide-react";

import RightImg from "@/public/Images/qNaImgs/leftImg.png";

const faqs = [
  {
    question: "What is ScooterIT and how does it work?",
    answer: "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
  {
    question: "What is ScooterIT and how does it work?",
    answer: "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
  {
    question: "What is ScooterIT and how does it work?",
    answer: "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
  {
    question: "What is ScooterIT and how does it work?",
    answer: "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
];

const QuestionsAndAnswers = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-[150px] overflow-hidden font-jakarta">
      <div className="container mx-auto px-6 md:px-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
        >
          
          {/* Left Column: Q&A */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            {/* Header */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                 <span className="text-[#5FA40A] font-medium text-[25px] leading-[25px] tracking-[1px] whitespace-nowrap">Questions & Answers</span>
                <div className="h-[2px] w-12 bg-[#5FA40A]" />
              </div>
               <h2 className="text-4xl md:text-[50px] font-bold text-[#151515] leading-[1.05] md:leading-[55px] tracking-[1px]">
                Frequently Asked <br /> Questions
              </h2>
            </motion.div>

            {/* Accordion */}
            <div className="flex flex-col divide-y divide-[#151515]/10 border-t border-[#151515]/10">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="py-5"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between text-left group"
                  >
                    <span className={`text-xl md:text-[22px] font-bold transition-colors ${activeIndex === index ? "text-[#151515]" : "text-[#151515]/80 group-hover:text-[#5FA40A]"}`}>
                      {faq.question}
                    </span>
                    <div className="shrink-0 ml-4 p-1">
                      {activeIndex === index ? (
                        <X className="w-6 h-6 text-[#151515] transform transition-transform" />
                      ) : (
                        <Plus className="w-6 h-6 text-[#151515] group-hover:text-[#5FA40A] transition-all" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-[18px] font-medium text-[#151515]/60 leading-[24px] tracking-[1px] max-w-lg">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <div className="border-b border-[#151515]/10"></div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              variants={itemVariants}
              className="relative aspect-4/5 rounded-[24px] overflow-hidden shadow-2xl"
            >
              <Image 
                src={RightImg} 
                alt="Branding image" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default QuestionsAndAnswers;