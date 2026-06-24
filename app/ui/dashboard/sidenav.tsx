'use client';
import { Cog6ToothIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import NavLinks from './navlinks';

export default function SideNav() {
  const whatsappUrl = "https://wa.me...";

  return (
    <> 
      <aside className="w-full md:w-64 bg-[#1e293b] text-white flex flex-col p-6 shrink-0 md:min-h-screen">
        
        {/* 🛠️ Added 'space-y-6' to stack everything closely with nice breathing room */}
        <div className="flex flex-col space-y-6">
          
          {/* BRANDING SECTION */}
          <div className="flex flex-col gap-3 border-b border-slate-700/50 w-full pb-4">
            <div className="flex flex-col items-center">
              <h1 className="font-brand text-2xl tracking-wide font-black text-white leading-none">
                Krith<span className="text-red-500">S</span>Chand<span className="text-red-500">S</span>
              </h1>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                Machine Tools Services
              </span>
            </div>

        
          </div>

          {/* PRIMARY ROUTE PAGES MENU */}
          <nav className="space-y-3">
            <NavLinks />
          </nav>
          
          {/* 🧰 QUICK CONTACT SHORTCUTS BLOCK */}
          <div className="pt-4 border-t border-slate-700/50">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4 mb-3">
              Quick Connect
            </h3>
            
            <div className="space-y-1">
              {/* WhatsApp Option */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-2 rounded-lg text-slate-300 hover:bg-emerald-600/20 hover:text-emerald-400 font-bold transition-all text-sm tracking-wide"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>

              {/* Call Us Option */}
              <a 
                href="tel:+917760494680" 
                className="flex items-center gap-4 px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700/40 hover:text-white font-bold transition-all text-sm tracking-wide"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call Us</span>
              </a>

              {/* Send Email Option */}
              <a 
                href="mailto:krithschands21@gmail.com" 
                className="flex items-center gap-4 px-4 py-2 rounded-lg text-slate-300 hover:bg-blue-600/10 hover:text-blue-400 font-bold transition-all text-sm tracking-wide"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

        </div>
         
      </aside>
    </>
  );
}
