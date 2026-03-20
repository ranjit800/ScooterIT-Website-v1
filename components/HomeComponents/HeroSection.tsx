"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Users } from "lucide-react";
import heroBg from "@/public/Images/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative md:min-h-screen flex items-center overflow-hidden mt-24">
      {/* Background Image with Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src={heroBg} alt="Scooters in the park" fill sizes="100vw" className="" priority />
        <div className="absolute inset-0 bg-[#C0FF72]/40" />
        {/* <div className="absolute inset-0 bg-linear-to-tr from-green-950/40 via-transparent to-transparent" /> */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-0 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-4xl p-6 md:p-9 max-w-lg shadow-2xl font-jakarta"
        >
          {/* Main Content */}
          <div className="md:space-y-4 space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#151515] leading-[1.1] md:leading-[58px]">
              One Platform <br />
              <span className="text-[#151515]">Every Scooter</span> <br />
              <span className="text-[#151515]">Across the City</span>
            </h1>

            <p className="text-[#151515] text-[18px] font-medium leading-[24px] tracking-[1px] max-w-lg">
              Access multiple scooter providers in one seamless mobility experience — built for users, operators, and smart cities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#c1ff72] text-black font-semibold px-5 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all text-sm md:text-base whitespace-nowrap"
              >
                <Smartphone size={18} />
                Download App
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white font-semibold px-5 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all text-sm md:text-base whitespace-nowrap"
              >
                <Users size={18} />
                Become a Fleet Partner
              </motion.button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 pt-2">
              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#151515]">90+</h3>
                <p className="text-[#151515] text-sm md:text-base font-medium leading-snug">
                  Happy Riders Around <br className="hidden md:block" /> the City
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#151515]">16+</h3>
                <p className="text-[#151515] text-sm md:text-base font-medium leading-snug">
                  Service Provider <br className="hidden md:block" /> Added
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
