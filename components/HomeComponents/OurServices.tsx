"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Service Card Images
import cardOne from "@/public/Images/ourservicesImgs/cardOneImg.png";
import cardTwo from "@/public/Images/ourservicesImgs/cardTwoImg.png";
import cardThree from "@/public/Images/ourservicesImgs/cardThreeImg.png";

// Background Flayers
import topFlayer from "@/public/Images/ourservicesImgs/toprightFlayer.png";
import bottomFlayer from "@/public/Images/ourservicesImgs/bottomleftFlayer.png";

const servicesData = [
  {
    image: cardOne,
    title: "Book Scooter from Anywhere",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
  {
    image: cardTwo,
    title: "Unlock & Ride them Using one App",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
  {
    image: cardThree,
    title: "Pay Inside ScooterIT",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
];

const OurServices = () => {
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
      <div className="absolute top-[-5%] right-[0%]  w-[100vw] h-[100vh] md:w-[39vw] md:h-[30vw] pointer-events-none select-none z-0">
        <Image 
          src={topFlayer} 
          alt="" 
          fill 
          sizes="45vw" 
          className="object-contain object-top-right " 
        />
      </div>

      {/* Bottom-left decorative squiggle */}
      <div className="absolute bottom-[-5%] left-[0%]  w-[100vw] h-[100vh] md:w-[40vw] md:h-[65vh] pointer-events-none select-none z-0">
        <Image 
          src={bottomFlayer} 
          alt="" 
          fill 
          sizes="45vw" 
          className="object-contain object-bottom-left " 
        />
      </div>

      <div className="container mx-auto relative z-10 px-6 md:px-0">
        <motion.div 
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between w-full">
            {/* Title Column */}
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-1/2 space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#5FA40A] font-medium text-[25px] leading-[25px] tracking-[1px] whitespace-nowrap">Our Services</span>
                <div className="h-[2px] w-12 bg-[#5FA40A]" />
              </div>
              <h2 className="text-4xl md:text-[50px] font-bold text-[#151515] leading-[1.05] md:leading-[55px] tracking-[1px]">
                ScooterIT Services for <br className="hidden lg:block"/> Urban Mobility
              </h2>
            </motion.div>
            
            {/* Description Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 md:pt-14"
            >
              <p className="text-[#151515] text-[18px] font-medium leading-[24px] tracking-[1px] max-w-xl opacity-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[30px] transition-all duration-300  hover:shadow-xl group bg-transparent flex flex-col gap-6"
                viewport={{ once: true }}
              >
                {/* Image Wrapper */}
                <div className="relative aspect-4/3 rounded-[24px] overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-3 px-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#151515] leading-snug md:leading-[28px] tracking-[1px] group-hover:text-[#5FA40A] transition-colors">
                    {service.title}
                  </h3>
                   <p className="text-[#151515]/70 text-[18px] font-medium leading-[24px] tracking-[1px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
