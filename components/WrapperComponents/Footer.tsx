"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Phone, Mail, Smartphone, Crown, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'
import logo from '@/public/Images/logo.png'

// Asset imports can be removed if they are no longer used

const Footer = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <footer className="relative z-10 bg-[#151515] pt-16 md:pt-24 border-t border-white/5 w-full font-jakarta">
      <motion.div 
        className="container mx-auto px-6 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          
          {/* Column 1: Brand Info & Buttons */}
          <motion.div 
            className="lg:col-span-2 flex flex-col"
            variants={fadeUpVariants}
          >
            <Link href="/" className="flex items-center gap-3 mb-8 group w-fit">
              <Image 
                src={logo} 
                alt="ScooterIT Logo" 
                width={150}
                height={150}
                className="object-cover"
              />
             
            </Link>

            <p className="text-white/60 text-[18px] font-medium mb-10 leading-[24px] tracking-[1px] max-w-sm">
              Access multiple scooter providers in one seamless mobility experience – built for users, operators, and smart cities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-fit">
              <motion.button 
                className="bg-[#c0ff72] text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-[#b0f55d] transition-all shadow-[0_0_20px_rgba(192,255,114,0.2)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Smartphone size={18} strokeWidth={2.5} />
                <span className="text-[15px]">Download the App</span>
              </motion.button>
             
              <motion.button 
                className="border border-[#c0ff72] text-[#c0ff72] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-[#c0ff72]/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Crown size={18} strokeWidth={2.5} />
                <span className="text-[15px]">Become a Fleet Partner</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            className="flex flex-col"
            variants={fadeUpVariants}
          >
            <h4 className="text-white font-bold text-[22px] mb-8 leading-[24px] tracking-[1px]">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {["Home", "About", "Services", "Partners", "Privacy Policy", "Terms"].map((link) => (
                <Link 
                  key={link}
                  href="#" 
                  className="text-white/60 hover:text-[#c0ff72] transition-colors text-[18px] font-medium leading-[24px] tracking-[1px] hover:translate-x-1"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Address & Support */}
          <motion.div 
            className="flex flex-col"
            variants={fadeUpVariants}
          >
            <div className="mb-10">
              <h4 className="text-white font-bold text-[22px] mb-8 leading-[24px] tracking-[1px]">Address</h4>
              <p className="text-white/60 text-[18px] font-medium leading-[24px] tracking-[1px] mb-6">
                <span className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">
                  ScooterIT Mobility FZ-LLC
                </span><br />
                Office 1204, Marina Plaza Dubai Marina<br/>
                Dubai, United Arab Emirates
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-[22px] mb-8 leading-[24px] tracking-[1px]">Support</h4>
              <div className="flex flex-col gap-5">
                <a 
                  href="tel:+97140000000" 
                  className="flex items-center gap-3 text-white/60 hover:text-[#c0ff72] transition-colors text-[18px] font-medium leading-[24px] tracking-[1px] group"
                >
                  <Phone size={18} className="text-white/40 group-hover:text-[#c0ff72] transition-colors" />
                  +971 4 000 0000
                </a>
                <a 
                  href="mailto:hello@scooterit.com" 
                  className="flex items-center gap-3 text-white/60 hover:text-[#c0ff72] transition-colors text-[18px] font-medium leading-[24px] tracking-[1px] group"
                >
                  <Mail size={18} className="text-white/40 group-hover:text-[#c0ff72] transition-colors" />
                  hello@scooterit.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="w-full h-[1px] bg-white/10 mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Bottom Bar: Social Icons & Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8 pb-16"
          variants={fadeUpVariants}
        >
          {/* Social Icons */}
          <div className="flex gap-8 items-center">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="text-white/40 hover:text-white transition-all transform hover:scale-110"
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/40 font-medium text-[16px] leading-[24px] text-center md:text-right">
            © 2026 ScooterIT. All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
