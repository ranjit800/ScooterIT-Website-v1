"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Smartphone, Crown } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const features: Feature[] = [
  {
    id: "01",
    title: "Eco-Friendly Commute",
    description:
      "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
    highlighted: true,
  },
  {
    id: "02",
    title: "Smart Ride Integration",
    description:
      "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
  {
    id: "03",
    title: "Effortless Control & Accessibility",
    description:
      "Penatibus congue ipsum condi mentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
  {
    id: "04",
    title: "Built-in Safety Features",
    description:
      "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
  {
    id: "05",
    title: "Seamless Charging Network",
    description:
      "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
  {
    id: "06",
    title: "Reliable Updates & Support",
    description:
      "Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh.",
  },
];

const WhyChooseUs = () => {
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
    <section className="bg-[#F8FFEF] py-16 md:py-[150px] font-jakarta">
      <div className="container mx-auto px-6 md:px-0">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#5FA40A] font-medium text-[25px] leading-[25px] tracking-[1px]">Why Choose Us</span>
              <div className="h-[2px] w-12 bg-[#5FA40A]" />
            </div>
            <h2 className="text-4xl md:text-[50px] font-bold text-[#151515] leading-[1.1] md:leading-[55px] tracking-[1px] mb-6">
              The Benefits of Riding <br className="hidden md:block" /> with ScooterIT
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="md:w-1/2 space-y-8"
          >
            <p className="text-[#151515] text-[18px] font-medium leading-[24px] tracking-[1px] opacity-80 max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s,
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#c0ff72] text-[#151515] px-6 py-4 rounded-full font-semibold shadow-lg"
              >
                <Smartphone size={20} />
                Download the App
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#151515] text-white px-6 py-4 rounded-full font-semibold shadow-lg"
              >
                <Crown size={20} />
                Become a Fleet Partner
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 md:p-12 rounded-[30px] transition-all duration-300 hover:bg-[#c0ff72] hover:shadow-xl group bg-transparent min-h-[400px] flex flex-col"
            >
              <span className="text-5xl md:text-[51px] font-bold text-[#151515] block mb-6 transition-colors tracking-[1px]">
                {feature.id}
              </span>
              <div className="h-px w-full mb-8 bg-[#151515]/20 transition-colors" />
              <h3 className="text-xl md:text-[22px] font-bold text-[#151515] mb-4 transition-colors leading-[24px] tracking-[1px]">
                {feature.title}
              </h3>
              <p className="text-[#151515] text-[18px] font-medium leading-[24px] tracking-[1px] opacity-80 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}


        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
