"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Partner Logos
import partnerOne from "@/public/Images/PartnersImages/partnersOne.png";
import partnerTwo from "@/public/Images/PartnersImages/partnersTwo.png";
import partnerThree from "@/public/Images/PartnersImages/partnersThree.png";
import partnerFour from "@/public/Images/PartnersImages/partnersFour.png";
import partnerFive from "@/public/Images/PartnersImages/partnersFive.png";
import partnerSix from "@/public/Images/PartnersImages/partnersSix.png";

const partners = [
  partnerOne,
  partnerTwo,
  partnerThree,
  partnerFour,
  partnerFive,
  partnerSix,
  partnerOne, // Duplicating to match grid if needed or just use 6
  partnerTwo,
];

const OurPartners = () => {
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
    <section className="w-full bg-[#F8FFEF] py-16 md:py-[150px] overflow-hidden font-jakarta">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex flex-col items-center text-center gap-12">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-5 max-w-3xl"
          >
            <p className="text-[#5FA40A] font-medium text-[25px] leading-[25px] tracking-[1px] ">
              Our Partners
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#151515] leading-[1.1] md:leading-[55px] tracking-[1px]">
              All Scooters. One <br className="hidden md:block"/> Intelligent Platform.
            </h2>
          </motion.div>

          {/* Logo Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-16 md:gap-y-16 items-center justify-items-center">
              {partners.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-full h-12 md:h-12 flex items-center justify-center  opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurPartners;