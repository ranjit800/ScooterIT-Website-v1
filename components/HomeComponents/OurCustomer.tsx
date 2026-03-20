"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Smartphone, Award } from "lucide-react";

// Assets
import personImg from "@/public/Images/ourCusImgs/PersonImg.png";
import starImg from "@/public/Images/ourCusImgs/startImg.png";
import topFlayer from "@/public/Images/ourCusImgs/topFlayerImg.png";

const testimonials = [
  {
    name: "Charles Thompson",
    rating: 5,
    feedback: "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nulla id id non enim venenatis nibh.",
  },
  {
    name: "Charles Thompson",
    rating: 5,
    feedback: "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nulla id id non enim venenatis nibh.",
  },
  {
    name: "Charles Thompson",
    rating: 5,
    feedback: "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nulla id id non enim venenatis nibh.",
  },
];

const OurCustomer = () => {
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

  return (
    <section className="relative w-full bg-white py-16 md:py-[150px] overflow-hidden font-jakarta">
      {/* Top-right decorative squiggle */}
      <div className="absolute top-[-1%] right-[0%]  w-[200vw] h-[50vh] md:w-[40vw] md:h-[35vh] pointer-events-none select-none z-0">
        <Image 
          src={topFlayer} 
          alt="" 
          fill 
          sizes="30vw" 
          className="object-contain object-top-right opacity-50 md:opacity-100" 
        />
      </div>

      <div className="container mx-auto relative z-10 px-6 md:px-0">
        <div className="flex flex-col gap-16">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between w-full">
            {/* Title Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#5FA40A] font-medium text-[25px] leading-[25px] tracking-[1px] whitespace-nowrap">Our Customer</span>
              </div>
              <h2 className="text-4xl md:text-[50px] font-bold text-[#151515] leading-[1.1] md:leading-[55px] tracking-[1px] max-w-lg">
                Ready to Experience <br/> Unified Mobility?
              </h2>
            </motion.div>
            
            {/* Description & Buttons Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col gap-8 md:pt-4"
            >
              <p className="text-[#151515] text-[18px] font-medium leading-[24px] tracking-[1px] max-w-xl opacity-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-[#c0ff72] hover:bg-[#a6e65a] transition-colors text-[#151515] font-semibold px-6 py-4 rounded-full shadow-lg group">
                  <Smartphone className="w-5 h-5" />
                  <span>Download the App</span>
                </button>
                <button className="flex items-center gap-3 bg-[#151515] hover:bg-[#2a2a2a] transition-colors text-white font-semibold px-6 py-4 rounded-full shadow-lg group">
                  <Award className="w-5 h-5 text-[#c0ff72]" />
                  <span>Become a Fleet Partner</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Testimonials Carousel Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative px-4 md:px-12"
          >
            {/* Navigation Arrows - Minimalistic style like the image */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-20 hover:scale-125 transition-transform active:scale-95 text-[#151515] hidden md:block">
              <ChevronLeft className="w-10 h-10 stroke-[2.5]" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 z-20 hover:scale-125 transition-transform active:scale-95 text-[#151515] hidden md:block">
              <ChevronRight className="w-10 h-10 stroke-[2.5]" />
            </button>

            {/* Carousel Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4"
            >
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-[#151515]/10 rounded-[28px] p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:bg-[#c0ff72] hover:border-transparent hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Avatar */}
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image 
                      src={personImg} 
                      alt={item.name} 
                      fill 
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-[22px] font-bold text-[#151515] leading-[24px] tracking-[1px]">
                      {item.name}
                    </h3>
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="relative w-4 h-4">
                          <Image 
                            src={starImg} 
                            alt="star" 
                            fill 
                            sizes="16px"
                            className="object-contain" 
                          />
                        </div>
                      ))}
                    </div>

                    <p className="text-[18px] font-medium leading-[24px] tracking-[1px] text-[#151515]/80 group-hover:text-[#151515] transition-colors px-2">
                      {item.feedback}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Navigation Indicators */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              <div className="w-2.5 h-2.5 rounded-full bg-[#c0ff72]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurCustomer;
