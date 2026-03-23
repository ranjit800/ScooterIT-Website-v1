"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Eye, EyeOff } from 'lucide-react'
import logoIcon from '@/public/Images/LogoIcon.png'

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-200 p-4 pointer-events-none">
            <motion.div 
              className="bg-white rounded-3xl w-full max-w-lg overflow-hidden relative pointer-events-auto font-jakarta"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-8 text-black/60 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X size={28} strokeWidth={2} />
              </button>

              <div className="px-8 pt-12 pb-8 flex flex-col items-center">
                {/* Logo */}
                <div className="mb-6">
                  <Image 
                    src={logoIcon} 
                    alt="ScooterIT Icon" 
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Header */}
                <h2 className="text-[32px] font-bold text-[#1a1a1a] mb-2 font-jakarta">
                  ScooterIT Partner
                </h2>
                <p className="text-[#666666] text-lg font-medium mb-10 font-jakarta">
                  Welcome! Please sign in to your partner account.
                </p>

                {/* Form */}
                <form className="w-full space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-[15px] font-bold text-[#333333] ml-1 font-jakarta">
                      Email
                    </label>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="w-full h-14 bg-white border border-[#E5E5E5] rounded-xl px-4 pr-12 text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:border-[#c0ff72] transition-colors font-jakarta"
                      />
                      <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999999]" size={20} />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-[15px] font-bold text-[#333333] ml-1 font-jakarta">
                      Password
                    </label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Enter your password"
                        className="w-full h-14 bg-white border border-[#E5E5E5] rounded-xl px-4 pr-12 text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:border-[#c0ff72] transition-colors font-jakarta"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999999] hover:text-[#666666] transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full h-16 bg-[#C0FF72] text-black rounded-xl font-bold text-lg hover:bg-[#b0f55d] transition-all mt-4 font-jakarta shadow-lg shadow-[#2D3F1B]/10 active:scale-[0.98]"
                  >
                    Sign in
                  </button>
                </form>

                {/* Footer */}
                <div className="mt-12 text-[#999999] text-[13px] font-medium font-jakarta uppercase tracking-wider">
                  © 2026 ScooterIT. All rights reserved.
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
