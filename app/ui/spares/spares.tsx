'use client'
import React from 'react';
import Link from 'next/link';

export default function Spares() {
  return (
    <>
      {/* h-screen and overflow-hidden locks down layout bounds to fit the dashboard area perfectly */}
      <main className="flex-1 px-6 py-4 flex flex-col justify-start max-w-6xl w-full mx-auto h-screen overflow-hidden">
        
        {/* TOP SEARCH WRAPPER CARD - Reduced height wrapper padding */}
        <div className="w-full relative shadow-sm rounded-xl overflow-hidden bg-white shrink-0 border border-slate-100">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
            {/* Standards compliant namespace string update */}
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for precision spare parts..." 
            className="w-full pl-12 pr-4 py-3 text-sm font-semibold placeholder-slate-400 text-slate-800 bg-white border border-transparent focus:outline-none rounded-xl transition-all"
          />
        </div>

        {/* 2-COLUMN BALANCED PRODUCT MATRIX CONTAINER - Fills remaining space efficiently */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 min-h-0 py-8">
          
          {/* Card Module 1 */}
          <Link 
           key="spare_part"
          href="spares/1/spare_detail"
          >
          <div className="bg-white h-[68px] md:h-[76px] rounded-xl shadow-sm hover:shadow-md border border-slate-200/60 px-5 flex items-center justify-between group cursor-pointer transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl group-hover:rotate-45 transition-transform duration-300">⚙️</span>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase text-slate-800 tracking-wide">High-Tensile Piston Kit</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Specs: 120mm Forged Alloy</span>
              </div>
            </div>
            <span className="text-sm font-extrabold text-red-600 bg-red-50/50 px-2.5 py-1 rounded-md border border-red-100">₹24,500</span>
          </div>
          </Link>
          {/* Card Module 2 */}
          <div className="bg-white h-[68px] md:h-[76px] rounded-xl shadow-sm hover:shadow-md border border-slate-200/60 px-5 flex items-center justify-between group cursor-pointer transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl group-hover:rotate-45 transition-transform duration-300">⚙️</span>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase text-slate-800 tracking-wide">Hydraulic Gear Pump</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Specs: Max Pressure 250 Bar</span>
              </div>
            </div>
            <span className="text-sm font-extrabold text-red-600 bg-red-50/50 px-2.5 py-1 rounded-md border border-red-100">₹18,750</span>
          </div>

          {/* Card Module 3 */}
          <div className="bg-white h-[68px] md:h-[76px] rounded-xl shadow-sm hover:shadow-md border border-slate-200/60 px-5 flex items-center justify-between group cursor-pointer transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl group-hover:rotate-45 transition-transform duration-300">⚙️</span>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase text-slate-800 tracking-wide">Viton Shaft Seal</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Specs: Inner Dia 45mm</span>
              </div>
            </div>
            <span className="text-sm font-extrabold text-red-600 bg-red-50/50 px-2.5 py-1 rounded-md border border-red-100">₹1,250</span>
          </div>

          {/* Card Module 4 */}
          <div className="bg-white h-[68px] md:h-[76px] rounded-xl shadow-sm hover:shadow-md border border-slate-200/60 px-5 flex items-center justify-between group cursor-pointer transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl group-hover:rotate-45 transition-transform duration-300">⚙️</span>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase text-slate-800 tracking-wide">Industrial Spare 04</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Specs: Component Placeholder</span>
              </div>
            </div>
            <span className="text-sm font-extrabold text-red-600 bg-red-50/50 px-2.5 py-1 rounded-md border border-red-100">₹4,800</span>
          </div>

          {/* Card Module 5 */}
          <div className="bg-white h-[68px] md:h-[76px] rounded-xl shadow-sm hover:shadow-md border border-slate-200/60 px-5 flex items-center justify-between group cursor-pointer transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl group-hover:rotate-45 transition-transform duration-300">⚙️</span>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase text-slate-800 tracking-wide">Industrial Spare 05</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Specs: Component Placeholder</span>
              </div>
            </div>
            <span className="text-sm font-extrabold text-red-600 bg-red-50/50 px-2.5 py-1 rounded-md border border-red-100">₹9,200</span>
          </div>

          {/* Card Module 6 */}
          <div className="bg-white h-[68px] md:h-[76px] rounded-xl shadow-sm hover:shadow-md border border-slate-200/60 px-5 flex items-center justify-between group cursor-pointer transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl group-hover:rotate-45 transition-transform duration-300">⚙️</span>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase text-slate-800 tracking-wide">Industrial Spare 06</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Specs: Component Placeholder</span>
              </div>
            </div>
            <span className="text-sm font-extrabold text-red-600 bg-red-50/50 px-2.5 py-1 rounded-md border border-red-100">₹14,000</span>
          </div>

        </section>

        {/* LOWER PAGINATION BUTTON CONTROLS - Anchored safely at base of grid */}
        <footer className="flex items-center justify-center gap-4 py-2 shrink-0">
          <button className="w-10 h-10 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all active:scale-95 cursor-pointer" aria-label="Previous Page">
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all active:scale-95 cursor-pointer" aria-label="Next Page">
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </footer>

      </main>
    </>
  );
}
