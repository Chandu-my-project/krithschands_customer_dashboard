'use client'

import {AboutContent, ContactInfo} from "@/app/ui/about/about";

export default function About() {
  return (
    /* Removed lg:pl-[140px] so the core container centers perfectly against your main right-side dashboard view */
    <main className="flex-1 p-4 md:p-4 flex flex-col justify-start max-w-4xl w-full mx-auto gap-8 h-screen overflow-hidden !pt-[4px] ">
      
      {/* PERFECTLY CENTERED HEADER BLOCK */}
      <div className="text-center max-w-3xl mx-auto w-full border-b border-slate-200 pb-1 shrink-0">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
          About Our Enterprise
        </h2>
       
      </div>

      {/* Main Narrative Content Box */}
      <AboutContent />

      {/* Re-polished Clean White Contact Component */}
      <ContactInfo />

    </main>
  );
}
