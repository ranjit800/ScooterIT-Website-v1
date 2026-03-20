"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import leftImage from "@/public/Images/aboutUsImgs/LeftImg.png";
import arrow from "@/public/Images/aboutUsImgs/IconImg.png";
import topRightImg from "@/public/Images/aboutUsImgs/TopFlayer.png";
import bottomLeftImg from "@/public/Images/aboutUsImgs/BottomFlayer.png";
import battery from "@/public/Images/aboutUsImgs/batteryImg.png";
import flash from "@/public/Images/aboutUsImgs/FlashImg.png";

const AboutUs = () => {
  return (
    <section className="relative min-h-screen  w-full bg-white py-16 md:py-[150px] overflow-hidden font-jakarta">
      {/* Top-right decorative squiggle */}
      <div className="absolute top-0 right-0  w-[100vw] h-[100vh] md:w-[20vw] md:h-[30vw] pointer-events-none select-none z-0">
        <Image src={topRightImg} alt="" fill sizes="30vw" className="object-contain object-top-right " />
      </div>

      {/* Bottom-left decorative squiggle */}
      <div className="absolute bottom-0 left-0 w-[100vw] h-[100vh] md:w-[25vw] md:h-[40vw] pointer-events-none select-none z-0">
        <Image src={bottomLeftImg} alt="" fill sizes="40vw" className="object-contain object-bottom-left " />
      </div>

      {/* Parent Content Wrapper */}
      <div className="container mx-auto relative z-10 px-6 md:px-0 ">
        {/* Main Layout Wrapper */}
        <div className="flex flex-col gap-8 md:gap-10">
          
          {/* Top Section (approx 20% height contextually) */}
          <div className="flex flex-col md:flex-row gap-8 items-start w-full ">
            {/* Left 1/2: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#5FA40A] font-medium text-[25px] leading-[25px] tracking-[1px]">About Us</span>
                <div className="h-[2px] w-12 bg-[#5FA40A]" />
              </div>
              <h2 className="text-4xl md:text-[50px] font-bold text-[#151515] leading-[1.05] md:leading-[55px] tracking-[1px]">
                Find nearby electric <br className="hidden lg:block" /> scooters from <br className="hidden lg:block" /> multiple providers
              </h2>
            </motion.div>
            {/* Right 1/2: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 pt-10 "
            >
              <p className="text-[#151515] text-[18px] font-medium leading-[24px] tracking-[1px] max-w-xl opacity-90">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
              </p>
            </motion.div>
          </div>

          {/* Bottom Section (approx 70% height contextually) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 w-full min-h-[500px]">
            {/* Left 1/2: Large Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-auto rounded-[20px] overflow-hidden shadow-2xl"
            >
              <Image 
                src={leftImage} 
                alt="Person with scooter" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Right 1/2: Cards Wrapper */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-5">
              {/* Top Support Card (approx 80% weight) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#c0ff72] rounded-[20px] p-8 md:p-6 h-full lg:flex-[0.8] flex gap-4 group overflow-hidden"
              >
                {/* Left side (90%) */}
                <div className="flex-[0.7] space-y-6 ">
                  <h3 className="text-xl md:text-[51px] font-bold text-[#151515] leading-none md:leading-[56px] tracking-[1px] mb-4">
                    24/7 <br />
                    Ride Support
                  </h3>
                  <p className="text-[#151515] text-[18px] font-medium leading-[24px] tracking-[1px] max-w-sm opacity-90">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                  </p>
                </div>
                {/* Right side (10%) */}
                <div className="flex-[0.3] min-w-fit flex justify-center items-start overflow-visible pt-4 md:pt-6">
                  <div id="arrow-icon" className="  bg-white rounded-full p-5 md:p-2 shadow-xl group-hover:scale-110 transition-transform cursor-pointer shrink-0">
                    <Image src={arrow} alt="Arrow icon" width={48} height={48} className="md:w-12 md:h-12" />
                  </div>
                </div>
              </motion.div>

              {/* Bottom Battery Card (approx 20% weight) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#151515] rounded-[20px] p-8 md:p-6 lg:flex-[0.2] flex items-center justify-between group shadow-xl"
              >
                <div className="flex items-center gap-6 md:gap-8">
                  <div className="relative w-16 h-10 md:w-20 md:h-12">
                    <Image src={battery} alt="Battery indicator" fill sizes="100px" className="object-contain" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[22px] font-bold text-white leading-[24px] tracking-[1px]">75% kWh</h4>
                    <p className="text-white/60 text-[18px] font-medium leading-[24px] tracking-[1px]">Power usage efficiency</p>
                  </div>
                </div>
                
                {/* Flash Image Icon */}
                <div className="relative w-12 h-16 md:w-14 md:h-20 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Image src={flash} alt="Flash icon" fill sizes="100px" className="object-contain" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
