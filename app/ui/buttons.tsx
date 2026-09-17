'use client'
import { EnvelopeIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
export default function ContactMenu() {
    return (
     <div className="flex-1 flex flex-col gap-3 justify-center">
              <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-400 text-center lg:text-left">Instant Inquiry</h3>
              <div className="flex items-center justify-center lg:justify-start gap-3">
              
                <button className="w-11 h-11 rounded-full bg-[#1e293b] text-white flex items-center justify-center text-base hover:bg-emerald-600 transition-all duration-200 shadow-md active:scale-95 cursor-pointer" title="WhatsApp Enquiry">
                  💬
                </button>
               
                <button className="w-11 h-11 rounded-full bg-[#1e293b] text-white flex items-center justify-center text-base hover:bg-slate-700 transition-all duration-200 shadow-md active:scale-95 cursor-pointer" title="Call Our Store">
                  📞
                </button>
              
                <button className="w-11 h-11 rounded-full bg-[#1e293b] text-white flex items-center justify-center text-base hover:bg-blue-600 transition-all duration-200 shadow-md active:scale-95 cursor-pointer" title="Send Email">
                  ✉️
                </button>
              </div>
            </div>

  );
}