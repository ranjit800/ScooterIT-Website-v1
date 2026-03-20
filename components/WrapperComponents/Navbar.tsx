"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { LogIn } from 'lucide-react'
import logoGif from '@/public/Images/Logogif.gif'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20, transition: { duration: 0.3 } },
    opened: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-120 transition-all duration-300 font-jakarta ${isOpen ? '' : 'bg-[#151515] border-b border-white/5'}`}>
        <div className="container mx-auto px-6 md:px-0 h-24 flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#c0ff72] p-2 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <Image 
                src={logoGif} 
                alt="ScooterIT Logo" 
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h1 className='text-[16px] text-white font-medium tracking-tight'>
              Scooter<span className='font-bold'>IT</span>
            </h1>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-10">
            {/* Navigation Links */}
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-white/80 font-medium text-[15px] hover:text-[#c0ff72] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c0ff72] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Action Button */}
            <motion.button 
              className="bg-[#c0ff72] text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#b0f55d] transition-all shadow-[0_0_20px_rgba(192,255,114,0.3)] group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-[15px]">Login</span>
              <LogIn size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </motion.button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button 
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 relative z-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#0D0D0D] z-110 md:hidden flex flex-col items-center justify-center p-8"
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center gap-8 text-center w-full">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-white text-3xl font-semibold hover:text-[#c0ff72] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="w-full max-w-xs pt-6">
                <button className="bg-[#c0ff72] w-full text-black px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#b0f55d] transition-all shadow-[0_0_30px_rgba(192,255,114,0.2)] group">
                  <span>Login</span>
                  <LogIn size={24} strokeWidth={2.5} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
