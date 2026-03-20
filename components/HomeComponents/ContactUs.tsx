"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Phone, Mail } from "lucide-react";

import bottomFlear from "@/public/Images/contactUsImgs/bottomLeftFlear.png";

const ContactUs = () => {
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
    <section className="relative w-full bg-[#F8FFEF] py-16 md:py-[150px] overflow-hidden font-jakarta">
      {/* Bottom-left decorative flayer */}
      <div className="absolute bottom-[0%] left-[0%]  w-[100vw] h-[100vh] md:w-[35vw] md:h-[35vh] pointer-events-none select-none z-0">
        <Image 
          src={bottomFlear} 
          alt="" 
          fill 
          sizes="(max-width: 768px) 256px, 30vw"
          className="object-contain object-bottom-left" 
        />
      </div>

      <div className="container mx-auto relative z-10 px-6 md:px-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          
          {/* Left Column: Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10 md:gap-14">
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <span className="text-[#5FA40A] font-medium text-[25px] leading-[25px] tracking-[1px]">Contact Us</span>
              <h2 className="text-4xl md:text-[50px] font-bold text-[#151515] leading-[1.05] md:leading-[55px] tracking-[1px]">
                Get in Touch <br /> with ScooterIT <br /> Today
              </h2>
              <p className="text-[#151515] text-[18px] font-medium leading-[24px] tracking-[1px] max-w-xl opacity-80">
                Penatibus congue ipsum condimentu ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.
              </p>
            </motion.div>

            {/* Office Info */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#5FA40A] font-bold text-[22px] leading-[24px] tracking-[1px] whitespace-nowrap">Our Office</span>
                <div className="h-[2px] w-full max-w-[200px] bg-[#5FA40A]/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 text-[#666666]/70 text-lg leading-relaxed">
                  <p className="font-bold text-[17px] underline underline-offset-5  text-[#666666] leading-[24px] tracking-[1px]">ScooterIT Mobility FZ-LLC</p>
                  <p>Office 1204, Marina Plaza</p>
                  <p>Dubai Marina</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[18px] font-medium text-[#666666]/70">
                    <Phone className="w-5 h-5 text-[#5FA40A]" />
                    <span>+971 4 000 0000</span>
                  </div>
                  <div className="flex items-center gap-3 text-[18px] font-medium text-[#666666]/70">
                    <Mail className="w-5 h-5 text-[#5FA40A]" />
                    <span>hello@scooterit.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div 
              variants={itemVariants}
              className="bg-[#c0ff72] w-full max-w-xl rounded-[40px] p-8 md:py-16 md:px-12 relative shadow-xl"
            >
{/*              
              <div className="absolute top-[-20px] right-[-20px] bg-white rounded-full shadow-2xl z-20 flex items-center justify-center w-14 h-14">
                <X className="w-8 h-8 text-[#151515] stroke-[3.5]" />
              </div> */}

              <form className="space-y-6 md:space-y-8">
                <div className="space-y-3">
                  <label className="text-[#151515] font-semibold text-[18px] ml-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full bg-white border-none rounded-full px-8 py-5 text-[18px] font-medium focus:ring-2 focus:ring-[#5FA40A] outline-none placeholder:text-[#151515]/30 transition-all shadow-sm"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[#151515] font-semibold text-[18px] ml-2">Email Address*</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-white border-none rounded-full px-8 py-5 text-[18px] font-medium focus:ring-2 focus:ring-[#5FA40A] outline-none placeholder:text-[#151515]/30 transition-all shadow-sm"
                  />
                </div>
 
                <div className="space-y-3">
                  <label className="text-[#151515] font-semibold text-[18px] ml-2">Your Message</label>
                  <textarea 
                    placeholder="Tell us what you need" 
                    rows={1}
                    className="w-full bg-white border-none rounded-full px-8 py-5 text-[18px] font-medium focus:ring-2 focus:ring-[#5FA40A] outline-none placeholder:text-[#151515]/30 transition-all shadow-sm resize-none overflow-hidden"
                  />
                </div>
 
                <div className="pt-4">
                  <button className="bg-[#151515] hover:bg-black text-white font-semibold px-10 py-5 rounded-full text-[18px] shadow-xl transition-all transform hover:scale-105 active:scale-95">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
