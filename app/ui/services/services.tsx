'use client'
import Image from "next/image";

export default function Services() {
    return <>
    <main className="flex-1 p-6 md:p-8 flex flex-col gap-6 max-w-5xl mx-auto w-full justify-center">
    
 
    <div className="text-center">
      <h2 className="text-3xl font-black text-[#1e293b] tracking-wide uppercase">
        Machine Reconditioning
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center mt-2">
      
     
      <div className="lg:col-span-5 bg-white rounded-3xl p-3 shadow-sm  overflow-hidden flex items-center justify-center">
        <Image 
        width={900}
        height={600}
          src="/CNC.jpg" 
          alt="Heavy Industrial Machinery Reconditioning Workshop" 
          className="w-full h-full object-fill rounded-2xl aspect-[6/7]"
        />
      </div>

      <div className="lg:col-span-7 flex flex-col gap-4">
        <ul className="space-y-6 text-slate-700 font-medium text-base md:text-lg leading-relaxed">
       
          <li className="flex items-start gap-3">
            <span className="text-slate-500 mt-1.5 shrink-0 text-xs">●</span>
            <span>CNC India recognizes the efforts & investment that our customers have put in their Machinery and Equipment. We at CNC India have solutions for older and used machinery to bring it back to life and up to par to meet the modern needs of Industry.</span>
          </li>
       
          <li className="flex items-start gap-3">
            <span className="text-slate-500 mt-1.5 shrink-0 text-xs">●</span>
            <span>CNC India’s retrofit activities include – replacing the existing control with the latest generation controls, replacement of feedback measurement devices, replacement of lubrication systems, ball screws, drives, motors, and replacement of related electromechanical components & electrical wiring while maintaining the old machine’s structure & standards.</span>
          </li>
        
         
        </ul>
      </div>

    </div>

    <div className="flex items-center justify-center gap-4 py-4 mt-4">
      <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all active:scale-95 cursor-pointer" aria-label="Previous Service">
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
      <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all active:scale-95 cursor-pointer" aria-label="Next Service">
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>

  </main>

    </>;
}